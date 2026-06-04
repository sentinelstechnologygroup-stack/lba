import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, RotateCcw, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';
import {
  sampleMembers,
  groupMembersByLevelAndCategory,
  PLACEMENT_ORDER,
  ALL_CHAPTERS,
  ALL_CITIES,
  ALL_LEVELS,
  ALL_CATEGORIES,
} from '@/data/sampleMembers';

const levelStyles = {
  'Exclusive Category Partner': { labelColor: '#B8862B', bg: '#FDF5E6' },
  'Category Member': { labelColor: '#00606B', bg: '#E6F4F5' },
  'Visibility Member': { labelColor: '#2C3238', bg: '#F3EFE7' },
  'Community Member': { labelColor: '#888', bg: '#F7F5F0' },
};

export default function Directory() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('All Levels');
  const [category, setCategory] = useState('All Categories');
  const [chapter, setChapter] = useState('All Chapters');
  const [city, setCity] = useState('All Cities');

  const resetFilters = () => {
    setSearch(''); setLevel('All Levels'); setCategory('All Categories');
    setChapter('All Chapters'); setCity('All Cities');
  };

  const hasActiveFilters = search || level !== 'All Levels' || category !== 'All Categories' ||
    chapter !== 'All Chapters' || city !== 'All Cities';

  const filtered = useMemo(() => {
    return sampleMembers.filter(m => {
      const q = search.toLowerCase();
      const matchSearch = !search ||
        m.businessName.toLowerCase().includes(q) ||
        m.ownerName.toLowerCase().includes(q) ||
        m.shortDescription.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.tags?.some(t => t.includes(q));
      const matchLevel = level === 'All Levels' || m.membershipLevel === level;
      const matchCat = category === 'All Categories' || m.category === category;
      const matchChapter = chapter === 'All Chapters' || m.chapter === chapter;
      const matchCity = city === 'All Cities' || m.city === city;
      return matchSearch && matchLevel && matchCat && matchChapter && matchCity;
    });
  }, [search, level, category, chapter, city]);

  const grouped = useMemo(() => groupMembersByLevelAndCategory(filtered), [filtered]);

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
      <PageHero {...pageContent.directory} />

      <section id="search" className="py-16 lg:py-24 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-2">
              <div>
                <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: '#B8862B' }} />
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Member Directory</p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
                  Find Member Businesses by Category and Market
                </h2>
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 flex-shrink-0 self-start lg:self-auto"
                style={{ backgroundColor: '#FDF5E6', color: '#B8862B' }}>
                ★ Sample Directory Preview
              </span>
            </div>
            <p className="text-xs mt-2" style={{ color: '#2C3238', opacity: 0.45 }}>
              All listings below are sample/demo data only. Actual member data is available to members.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="bg-white border p-6 mb-8" style={{ borderColor: '#E4E0D8' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
              <div className="flex flex-col gap-1.5 sm:col-span-2 xl:col-span-2">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#2C3238', opacity: 0.5 }}>Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#2C3238', opacity: 0.4 }} />
                  <Input placeholder="Business name, owner, category, or keyword..." value={search}
                    onChange={e => setSearch(e.target.value)} className="pl-9 text-sm" style={{ borderColor: '#E4E0D8' }} />
                </div>
              </div>
              <SelectFilter label="Membership Level" value={level} setValue={setLevel} options={ALL_LEVELS} />
              <SelectFilter label="Category" value={category} setValue={setCategory} options={ALL_CATEGORIES} />
              <SelectFilter label="Chapter" value={chapter} setValue={setChapter} options={ALL_CHAPTERS} />
              <SelectFilter label="City" value={city} setValue={setCity} options={ALL_CITIES} />
            </div>
            <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#F3EFE7' }}>
              <p className="text-xs" style={{ color: '#2C3238', opacity: 0.5 }}>
                {filtered.length} member{filtered.length !== 1 ? 's' : ''} shown
              </p>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: '#00606B' }}>
                  <RotateCcw className="w-3 h-3" /> Reset Filters
                </button>
              )}
            </div>
            <p className="mt-3 text-[10px] leading-relaxed" style={{ color: '#2C3238', opacity: 0.4 }}>
              Directory placement notice: Listings are ordered by membership level, then category, then alphabetically within each group.
            </p>
          </div>

          {/* Grouped Results */}
          {Object.keys(grouped).length === 0 ? (
            <div className="text-center py-20 border bg-white" style={{ borderColor: '#E4E0D8' }}>
              <p className="font-semibold text-base mb-2" style={{ color: '#111418' }}>No members found for this search.</p>
              <p className="text-sm mb-2" style={{ color: '#2C3238', opacity: 0.55 }}>Try adjusting your filters or ask about category availability in your chapter.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Button asChild size="sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/ask-about-category">Ask About This Category <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
                </Button>
                <Button size="sm" variant="outline" onClick={resetFilters} style={{ borderColor: '#E4E0D8', color: '#111418' }}>Reset Filters</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {PLACEMENT_ORDER.filter(lvl => grouped[lvl]).map(lvl => {
                const st = levelStyles[lvl] || levelStyles['Community Member'];
                return (
                  <div key={lvl}>
                    <div className="flex items-center gap-4 mb-7">
                      <div className="h-px flex-1" style={{ backgroundColor: '#E4E0D8' }} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 whitespace-nowrap"
                        style={{ backgroundColor: st.bg, color: st.labelColor }}>
                        {lvl === 'Exclusive Category Partner' ? '★ ' : ''}{lvl.toUpperCase()}S
                      </span>
                      <div className="h-px flex-1" style={{ backgroundColor: '#E4E0D8' }} />
                    </div>

                    <div className="space-y-8">
                      {Object.entries(grouped[lvl]).map(([cat, catMembers]) => (
                        <div key={cat}>
                          <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-4 pb-2 border-b"
                            style={{ color: '#2C3238', opacity: 0.5, borderColor: '#E4E0D8' }}>{cat}</h4>
                          <div className="space-y-3">
                            {catMembers.map((m, idx) => (
                              <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: idx * 0.04 }}
                                className="border bg-white p-6 flex flex-col sm:flex-row sm:items-start gap-4"
                                style={{ borderColor: '#E4E0D8' }}>
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                                    <h3 className="font-semibold text-base" style={{ color: '#111418' }}>{m.businessName}</h3>
                                    <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-0.5"
                                      style={{ backgroundColor: st.bg, color: st.labelColor }}>{m.membershipLevel}</span>
                                  </div>
                                  <p className="text-xs mb-2" style={{ color: '#00606B' }}>{m.ownerName} · {m.category}</p>
                                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#2C3238', opacity: 0.65 }}>{m.shortDescription}</p>
                                  <div className="flex flex-wrap gap-3 text-xs" style={{ color: '#2C3238', opacity: 0.5 }}>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {m.city}</span>
                                    <span>{m.chapter}</span>
                                    <span>{m.serviceArea}</span>
                                  </div>
                                </div>
                                <div className="flex-shrink-0 flex flex-col gap-2 min-w-[120px]">
                                  <Button asChild size="sm" className="text-xs font-semibold w-full" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                                    <Link to="/request-introduction">Request Intro</Link>
                                  </Button>
                                  <Button asChild size="sm" variant="outline" className="text-xs w-full" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                                    <Link to="/contact">Contact</Link>
                                  </Button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Placement Disclosure */}
      <section className="py-12 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border p-7" style={{ borderColor: '#E4E0D8', borderLeft: '3px solid #B8862B' }}>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#B8862B' }} />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#B8862B' }}>Directory Placement Notice</p>
                <p className="text-sm leading-relaxed mb-2" style={{ color: '#2C3238', opacity: 0.7 }}>
                  Link Business Alliance directory placement may be influenced by membership level, category participation, sponsorship, geography, approval status, responsiveness, and compliance with chapter standards. Listings within each membership/category group may be sorted alphabetically.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.6 }}>
                  Listings are not rankings, ratings, endorsements, guarantees of quality, or guarantees of availability unless specifically stated through a separate verified program. Membership does not guarantee leads, revenue, referrals, sales, or business outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-10 text-center" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#111418' }}>List Your Business in The Link Directory</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
              Members can list their business, set a service category, and become findable by other owners looking for trusted local providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/list-your-business">List Your Business <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                <Link to="/membership">View Membership Plans</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}