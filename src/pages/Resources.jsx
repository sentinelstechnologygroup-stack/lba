import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, RotateCcw, Lock, BookOpen, Clock } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';
import {
  sampleResources,
  BUSINESS_STAGES,
  RESOURCE_TOPICS,
  RESOURCE_TYPES,
  ACCESS_LEVELS,
  ACCESS_RANK,
} from '@/data/sampleResources';

const accessColors = {
  'Public': { bg: '#E6F4F5', color: '#00606B' },
  'Community Member': { bg: '#F3EFE7', color: '#2C3238' },
  'Visibility Member': { bg: '#FDF5E6', color: '#B8862B' },
  'Category Member': { bg: '#E6F4F5', color: '#00606B' },
  'Partner': { bg: '#FDF5E6', color: '#B8862B' },
  'Chapter Leader': { bg: '#111418', color: '#F7F5F0' },
};

const typeIcons = {
  'Checklist': '✓',
  'Guide': '📖',
  'Template': '⬡',
  'Article': '◆',
  'Worksheet': '⬜',
  'Video / Training': '▷',
  'Local Contact': '◉',
  'Provider Category': '◈',
};

export default function Resources() {
  const [search, setSearch] = useState('');
  const [stage, setStage] = useState('All Stages');
  const [topic, setTopic] = useState('All Topics');
  const [resourceType, setResourceType] = useState('All Types');
  const [accessLevel, setAccessLevel] = useState('All Access Levels');

  const resetFilters = () => {
    setSearch(''); setStage('All Stages'); setTopic('All Topics');
    setResourceType('All Types'); setAccessLevel('All Access Levels');
  };

  const hasActiveFilters = search || stage !== 'All Stages' || topic !== 'All Topics' ||
    resourceType !== 'All Types' || accessLevel !== 'All Access Levels';

  const filtered = useMemo(() => {
    return sampleResources.filter(r => {
      const q = search.toLowerCase();
      const matchSearch = !search ||
        r.title.toLowerCase().includes(q) ||
        r.topic.toLowerCase().includes(q) ||
        r.shortDescription.toLowerCase().includes(q);
      const matchStage = stage === 'All Stages' || r.stage === stage || r.stage === 'All Stages';
      const matchTopic = topic === 'All Topics' || r.topic === topic;
      const matchType = resourceType === 'All Types' || r.resourceType === resourceType;
      const matchAccess = accessLevel === 'All Access Levels' || r.accessLevel === accessLevel;
      return matchSearch && matchStage && matchTopic && matchType && matchAccess;
    });
  }, [search, stage, topic, resourceType, accessLevel]);

  const SelectFilter = ({ label, value, setValue, options }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#2C3238', opacity: 0.5 }}>{label}</label>
      <select value={value} onChange={e => setValue(e.target.value)}
        className="h-9 rounded-md border px-3 text-sm w-full bg-white"
        style={{ borderColor: '#E4E0D8', color: '#111418' }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div>
      <PageHero {...pageContent.resources} />

      <section id="library" className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-2">
              <div>
                <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: '#B8862B' }} />
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Resource Library</p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
                  Checklists, Guides & Practical Tools
                </h2>
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 flex-shrink-0 self-start lg:self-auto"
                style={{ backgroundColor: '#FDF5E6', color: '#B8862B' }}>
                ★ Sample Resource Preview
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl mt-3" style={{ color: '#2C3238', opacity: 0.65 }}>
              All resources below are sample/demo preview data. The full library is available to members.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="bg-white border p-6 mb-8" style={{ borderColor: '#E4E0D8' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
              <div className="flex flex-col gap-1.5 sm:col-span-2 xl:col-span-2">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#2C3238', opacity: 0.5 }}>Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#2C3238', opacity: 0.4 }} />
                  <Input placeholder="Search by keyword, topic, or resource title..." value={search}
                    onChange={e => setSearch(e.target.value)} className="pl-9 text-sm" style={{ borderColor: '#E4E0D8' }} />
                </div>
              </div>
              <SelectFilter label="Business Stage" value={stage} setValue={setStage} options={BUSINESS_STAGES} />
              <SelectFilter label="Topic" value={topic} setValue={setTopic} options={RESOURCE_TOPICS} />
              <SelectFilter label="Resource Type" value={resourceType} setValue={setResourceType} options={RESOURCE_TYPES} />
              <SelectFilter label="Access Level" value={accessLevel} setValue={setAccessLevel} options={ACCESS_LEVELS} />
            </div>
            <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#F3EFE7' }}>
              <p className="text-xs" style={{ color: '#2C3238', opacity: 0.5 }}>
                {filtered.length} resource{filtered.length !== 1 ? 's' : ''} shown
              </p>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: '#00606B' }}>
                  <RotateCcw className="w-3 h-3" /> Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 border bg-white" style={{ borderColor: '#E4E0D8' }}>
              <p className="font-semibold text-base mb-2" style={{ color: '#111418' }}>No resources found for this filter.</p>
              <p className="text-sm mb-6" style={{ color: '#2C3238', opacity: 0.55 }}>Try adjusting your filters or ask about resources available for your business stage.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="sm" onClick={resetFilters} style={{ backgroundColor: '#00606B', color: '#fff' }}>Reset Filters</Button>
                <Button asChild size="sm" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  <Link to="/contact">Ask About Resources</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((r, i) => {
                const ac = accessColors[r.accessLevel] || accessColors['Public'];
                const isLocked = r.accessLevel !== 'Public';
                return (
                  <motion.div key={r.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="bg-white border flex flex-col" style={{ borderColor: '#E4E0D8' }}>
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-6 pt-5 pb-3">
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1"
                        style={{ backgroundColor: ac.bg, color: ac.color }}>
                        {isLocked && <Lock className="w-2.5 h-2.5 inline mr-1" />}{r.accessLevel}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 border" style={{ borderColor: '#E4E0D8', color: '#2C3238', opacity: 0.6 }}>
                        {typeIcons[r.resourceType] || '◆'} {r.resourceType}
                      </span>
                    </div>

                    <div className="px-6 pb-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-base mb-2 leading-snug" style={{ color: '#111418' }}>{r.title}</h3>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: '#2C3238', opacity: 0.65 }}>{r.shortDescription}</p>

                      <div className="mt-4 pt-4 border-t flex flex-wrap gap-2 items-center justify-between" style={{ borderColor: '#F3EFE7' }}>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[9px] font-bold tracking-wide uppercase px-2 py-0.5" style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>{r.stage}</span>
                          <span className="text-[9px] font-bold tracking-wide uppercase px-2 py-0.5" style={{ backgroundColor: '#FAF8F3', color: '#2C3238', border: '1px solid #E4E0D8' }}>{r.topic}</span>
                        </div>
                        {r.estimatedTime && (
                          <span className="text-[9px] flex items-center gap-1" style={{ color: '#2C3238', opacity: 0.45 }}>
                            <Clock className="w-2.5 h-2.5" /> {r.estimatedTime}
                          </span>
                        )}
                      </div>

                      <div className="mt-5 flex gap-2">
                        <Button asChild size="sm" className="flex-1 text-xs font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                          <Link to={isLocked ? '/ask-about-membership' : '/resources'}>
                            {isLocked ? 'Ask About Access' : 'View Resource'} <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="flex-1 text-xs" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                          <Link to="/contact">Ask About This Topic</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Access Level Explanation */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-4 h-4" style={{ color: '#00606B' }} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#00606B' }}>Resource Access Levels</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Public', 'Community Member', 'Visibility Member', 'Category Member', 'Partner', 'Chapter Leader'].map(level => {
                const ac = accessColors[level] || accessColors['Public'];
                return (
                  <div key={level} className="flex items-start gap-3 p-4 border" style={{ borderColor: '#E4E0D8' }}>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 flex-shrink-0"
                      style={{ backgroundColor: ac.bg, color: ac.color }}>{level}</span>
                    <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
                      {level === 'Public' && 'Available to anyone, no membership required.'}
                      {level === 'Community Member' && 'Available to Community Members and above.'}
                      {level === 'Visibility Member' && 'Available to Visibility Members and above.'}
                      {level === 'Category Member' && 'Available to Category Members and above.'}
                      {level === 'Partner' && 'Available to Chapter Partners and Exclusive Category Partners.'}
                      {level === 'Chapter Leader' && 'Available to approved chapter organizers and founding members.'}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 text-center" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#F7F5F0' }}>
              Full Resource Access for Members
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Public resources are available to anyone. Additional checklists, guides, worksheets, and tools are available based on membership level.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/membership">Explore Membership <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/member-readiness-quiz">Take Readiness Quiz</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}