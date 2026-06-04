import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { faqItems, FAQ_CATEGORIES } from '@/data/faqData';

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return faqItems.filter(item => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch = !search ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        h1="Frequently Asked Questions."
        subtext="Find answers about membership levels, directory placement, chapters, events, and joining The Link."
        heroImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1920&q=80"
        heroAlt="Business owner reviewing frequently asked questions about a professional network"
        primaryCta={{ label: 'Browse Questions', route: '#faq' }}
        secondaryCta={{ label: 'Contact Us', route: '/contact' }}
      />

      <section id="faq" className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15] mb-3" style={{ color: '#111418' }}>
              Common Questions About The Link
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.6 }}>
              Use the search or category filters below to find what you need.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <div className="bg-white border p-5 mb-8" style={{ borderColor: '#E4E0D8' }}>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#2C3238', opacity: 0.4 }} />
              <Input placeholder="Search questions..." value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 text-sm" style={{ borderColor: '#E4E0D8' }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="text-xs font-semibold px-3 py-1.5 transition-all"
                  style={activeCategory === cat
                    ? { backgroundColor: '#00606B', color: '#fff' }
                    : { backgroundColor: '#FAF8F3', color: '#111418', border: '1px solid #E4E0D8' }
                  }>
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-xs mt-4 pt-3 border-t" style={{ color: '#2C3238', opacity: 0.4, borderColor: '#F3EFE7' }}>
              {filtered.length} question{filtered.length !== 1 ? 's' : ''} shown
            </p>
          </div>

          {/* Accordion */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 border bg-white" style={{ borderColor: '#E4E0D8' }}>
              <p className="font-semibold text-base mb-2" style={{ color: '#111418' }}>No questions found.</p>
              <p className="text-sm mb-6" style={{ color: '#2C3238', opacity: 0.55 }}>Try a different search term or browse all categories.</p>
              <Button size="sm" onClick={() => { setSearch(''); setActiveCategory('All'); }} style={{ backgroundColor: '#00606B', color: '#fff' }}>
                Show All Questions
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                  className="bg-white border" style={{ borderColor: '#E4E0D8' }}>
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>
                        {item.category}
                      </span>
                      <span className="font-semibold text-sm leading-snug" style={{ color: '#111418' }}>
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200"
                      style={{ color: '#00606B', transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t" style={{ borderColor: '#F3EFE7' }}>
                          <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.75 }}>
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 text-center" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#F7F5F0' }}>
              Still Have Questions?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Contact The Link directly or take the Member Readiness Quiz to see if membership is a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/contact">Contact The Link <ArrowRight className="w-4 h-4 ml-2" /></Link>
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