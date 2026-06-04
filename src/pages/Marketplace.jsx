import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, RotateCcw, ShieldCheck, CheckSquare } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';
import MarketplaceCard from '@/components/marketplace/MarketplaceCard';
import {
  sampleMembers,
  groupMembersByLevelAndCategory,
  PLACEMENT_ORDER,
  SERVICE_TYPES,
  ALL_CHAPTERS,
  ALL_LEVELS,
  ALL_CATEGORIES,
} from '@/data/sampleMembers';

const listingChecklist = [
  'Clear business name',
  'Clear service category',
  'Short description of what you do',
  'Who you help',
  'Service area',
  'Best introduction or referral type',
  'Contact information',
  'Website or landing page',
  'Chapter / market',
  'Membership level',
];

const levelStyles = {
  'Exclusive Category Partner': { labelColor: '#B8862B', bg: '#FDF5E6' },
  'Category Member': { labelColor: '#00606B', bg: '#E6F4F5' },
  'Visibility Member': { labelColor: '#2C3238', bg: '#F3EFE7' },
  'Community Member': { labelColor: '#888', bg: '#F7F5F0' },
};

export default function Marketplace() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('All Levels');
  const [category, setCategory] = useState('All Categories');
  const [chapter, setChapter] = useState('All Chapters');
  const [serviceType, setServiceType] = useState('All Service Types');

  const resetFilters = () => {
    setSearch(''); setLevel('All Levels'); setCategory('All Categories');
    setChapter('All Chapters'); setServiceType('All Service Types');
  };

  const hasActiveFilters = search || level !== 'All Levels' || category !== 'All Categories' ||
    chapter !== 'All Chapters' || serviceType !== 'All Service Types';

  const filtered = useMemo(() => {
    return sampleMembers.filter(m => {
      const q = search.toLowerCase();
      const matchSearch = !search ||
        m.businessName.toLowerCase().includes(q) ||
        m.shortDescription.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.ownerName.toLowerCase().includes(q) ||
        m.tags?.some(t => t.includes(q));
      const matchLevel = level === 'All Levels' || m.membershipLevel === level;
      const matchCat = category === 'All Categories' || m.category === category;
      const matchChapter = chapter === 'All Chapters' || m.chapter === chapter;
      const matchType = serviceType === 'All Service Types' || m.serviceType === serviceType;
      return matchSearch && matchLevel && matchCat && matchChapter && matchType;
    });
  }, [search, level, category, chapter, serviceType]);

  const grouped = useMemo(() => groupMembersByLevelAndCategory(filtered), [filtered]);
  const totalCount = filtered.length;

  const SelectFilter = ({ label, value, setValue, options }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#2C3238', opacity: 0.5 }}>{label}</label>
      <select value={value} onChange={e => setValue(e.target.value)}
        className="h-9 rounded-md border px-3 text-sm w-full"
        style={{ borderColor: '#E4E0D8', color: '#111418', backgroundColor: '#fff' }}>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div>
      <PageHero {...pageContent.marketplace} />

      {/* ── What the Marketplace Is ── */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: 'A Member Services Showcase', desc: 'Find services, providers, and business support available through Link Business Alliance members — organized by membership placement, category, and market.' },
            { title: 'Not an E-Commerce Store', desc: 'This is not a checkout system. It is a structured member directory for services, introductions, and local business connections.' },
            { title: 'Not a Guarantee of Results', desc: 'Listings are not rankings, endorsements, or guarantees. Membership placement affects visibility. See placement notice below.' },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="border-t-2 pt-5" style={{ borderColor: '#00606B' }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: '#111418' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Member Services Showcase ── */}
      <section id="showcase" className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Member Services Showcase</p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
                  Explore Services Available Through Link Members
                </h2>
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 flex-shrink-0 self-start lg:self-auto"
                style={{ backgroundColor: '#FDF5E6', color: '#B8862B' }}>
                ★ Sample Marketplace Preview
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-3xl mt-3" style={{ color: '#2C3238', opacity: 0.65 }}>
              Explore services, offers, and business support available through Link Business Alliance members. Listings are organized by membership placement, category, and business name to make it easier to find relevant member services.
            </p>
            <p className="text-xs mt-3" style={{ color: '#2C3238', opacity: 0.4 }}>
              All listings below are sample/demo data only. Names, contacts, and details are fictional placeholders for preview purposes.
            </p>
          </motion.div>

          {/* ── Filters ── */}
          <div className="bg-white border p-6 mb-8" style={{ borderColor: '#E4E0D8' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-2 xl:col-span-2">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#2C3238', opacity: 0.5 }}>Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#2C3238', opacity: 0.4 }} />
                  <Input placeholder="Business name or service keyword..." value={search} onChange={e => setSearch(e.target.value)}
                    className="pl-9 text-sm" style={{ borderColor: '#E4E0D8' }} />
                </div>
              </div>
              <SelectFilter label="Membership Level" value={level} setValue={setLevel} options={ALL_LEVELS} />
              <SelectFilter label="Service Type" value={serviceType} setValue={setServiceType} options={SERVICE_TYPES} />
              <SelectFilter label="Category" value={category} setValue={setCategory} options={ALL_CATEGORIES} />
              <SelectFilter label="Chapter" value={chapter} setValue={setChapter} options={ALL_CHAPTERS} />
            </div>
            <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#F3EFE7' }}>
              <p className="text-xs" style={{ color: '#2C3238', opacity: 0.5 }}>
                {totalCount} listing{totalCount !== 1 ? 's' : ''} shown
              </p>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: '#00606B' }}>
                  <RotateCcw className="w-3 h-3" /> Reset Filters
                </button>
              )}
            </div>
            <p className="mt-3 text-[10px] leading-relaxed" style={{ color: '#2C3238', opacity: 0.4 }}>
              Placement notice: Marketplace listings are ordered by membership level first, then category, then alphabetically. Higher membership tiers may receive enhanced visibility and priority placement. See placement details below.
            </p>
          </div>

          {/* ── Grouped Listings ── */}
          {Object.keys(grouped).length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 border bg-white" style={{ borderColor: '#E4E0D8' }}>
              <p className="font-semibold text-base mb-2" style={{ color: '#111418' }}>No members found for this search.</p>
              <p className="text-sm mb-2" style={{ color: '#2C3238', opacity: 0.55 }}>Try adjusting your filters or ask about category availability in your chapter.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
                <Button asChild size="sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/ask-about-category">Ask About This Category <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
                </Button>
                <Button size="sm" variant="outline" onClick={resetFilters} style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  Reset Filters
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-14">
              {PLACEMENT_ORDER.filter(lvl => grouped[lvl]).map(lvl => {
                const st = levelStyles[lvl] || levelStyles['Community Member'];
                return (
                  <div key={lvl}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1" style={{ backgroundColor: '#E4E0D8' }} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 whitespace-nowrap"
                        style={{ backgroundColor: st.bg, color: st.labelColor }}>
                        {lvl === 'Exclusive Category Partner' ? '★ ' : ''}{lvl.toUpperCase()}S
                      </span>
                      <div className="h-px flex-1" style={{ backgroundColor: '#E4E0D8' }} />
                    </div>
                    <div className="space-y-10">
                      {Object.entries(grouped[lvl]).map(([cat, catMembers]) => (
                        <div key={cat}>
                          <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-5 pb-2 border-b" style={{ color: '#2C3238', opacity: 0.5, borderColor: '#E4E0D8' }}>
                            {cat}
                          </h4>
                          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {catMembers.map((m, idx) => (
                              <MarketplaceCard key={m.id} member={m} index={idx} />
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

      {/* ── Placement Disclosure ── */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border p-8" style={{ borderColor: '#E4E0D8', borderLeft: '3px solid #B8862B' }}>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#B8862B' }} />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#B8862B' }}>Marketplace Placement Notice</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#2C3238', opacity: 0.7 }}>
                  Marketplace and directory placement may be influenced by membership level, category participation, sponsorship, geography, approval status, responsiveness, and compliance with chapter standards. Higher membership levels may receive enhanced visibility, priority placement, featured category positioning, or sponsor/partner placement. Listings within each membership/category group may be sorted alphabetically.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.6 }}>
                  Listings are not rankings, ratings, endorsements, guarantees of quality, or guarantees of availability unless specifically stated through a separate verified program. Membership does not guarantee leads, revenue, referrals, sales, or business outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Listing Readiness Callout ── */}
      <section className="py-16 lg:py-20 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare className="w-4 h-4" style={{ color: '#00606B' }} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#00606B' }}>Listing Readiness</p>
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-[1.2] mb-4" style={{ color: '#111418' }}>
              Make Your Listing Easier to Understand
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
              The strongest listings make it easy for other owners to understand what the business does, who it helps, and when to make an introduction. This is about service clarity — not digital marketing.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <ul className="space-y-3">
              {listingChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm py-2 border-b last:border-0" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                    style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Want to List Your Services ── */}
      <section className="py-16 lg:py-20 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Members</p>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#F7F5F0' }}>
              Want to List Your Services?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#F7F5F0', opacity: 0.6 }}>
              Members can use their profile and marketplace listing to help other owners understand what they offer, who they serve, and when to contact them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/contact">Ask About Membership <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/membership">See Membership Options</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="border p-7 space-y-3" style={{ borderColor: '#ffffff15' }}>
            {[
              { lvl: 'Exclusive Category Partner', desc: 'Primary category positioning, gold badge, priority placement.' },
              { lvl: 'Category Member', desc: 'Category listing, teal badge, directory placement.' },
              { lvl: 'Visibility Member', desc: 'Enhanced profile, directory listing, contact details.' },
              { lvl: 'Community Member', desc: 'Basic listing, community participation.' },
            ].map((item) => {
              const st = levelStyles[item.lvl];
              return (
                <div key={item.lvl} className="flex items-start gap-3">
                  <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 mt-0.5 flex-shrink-0"
                    style={{ backgroundColor: st.bg, color: st.labelColor }}>{item.lvl}</span>
                  <p className="text-xs" style={{ color: '#F7F5F0', opacity: 0.55 }}>{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 lg:py-24 px-6 lg:px-10 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#111418' }}>
              Find the Right Member Service Faster.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
              Search by category, chapter, service area, and membership placement to connect with members who may be able to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/directory">Explore Directory <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                <Link to="/contact">Submit an Inquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                <Link to="/membership">Join The Link</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}