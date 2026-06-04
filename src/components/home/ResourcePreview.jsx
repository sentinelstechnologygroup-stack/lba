import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

const tags = ['All', 'Starting Out', 'New Business', 'Growing Business', 'Established Business', 'Chapter Leader'];

const resources = [
  {
    title: 'Starting Your Business',
    desc: 'Basic steps, early decisions, common mistakes, and useful questions before spending money.',
    tags: ['Starting Out', 'New Business'],
  },
  {
    title: 'Getting Found and Understood',
    desc: 'Make sure people can understand what you do, where you serve, and how to contact you.',
    tags: ['New Business', 'Growing Business'],
  },
  {
    title: 'Building Referral Readiness',
    desc: 'Clarify your category, ideal customer, best introduction, and service area so others can confidently remember and refer you.',
    tags: ['New Business', 'Growing Business'],
  },
  {
    title: 'Operations and Vendor Decisions',
    desc: 'Avoid costly mistakes when choosing vendors, tools, contracts, systems, and service providers.',
    tags: ['Growing Business', 'Established Business'],
  },
  {
    title: 'Owner Roundtable Topics',
    desc: 'Practical discussion guides based on real questions business owners face — hiring, pricing, cash flow, and more.',
    tags: ['Growing Business', 'Established Business'],
  },
  {
    title: 'Chapter Leader Resources',
    desc: 'Tools for local organizers, founding members, sponsors, and chapter partners.',
    tags: ['Chapter Leader'],
  },
];

export default function ResourcePreview() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? resources : resources.filter(r => r.tags.includes(activeTag));

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Practical Resources</p>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
                Practical Resources for Business Owners
              </h2>
            </div>
            <Button asChild variant="outline" size="sm" className="flex-shrink-0" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
              <Link to="/resources">View Full Library <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
            </Button>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            Find checklists, guides, templates, and owner-focused resources based on your stage of business and the problem you are trying to solve.
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(t => (
            <button key={t} onClick={() => setActiveTag(t)}
              className="text-xs font-semibold px-3 py-1.5 transition-all"
              style={activeTag === t
                ? { backgroundColor: '#00606B', color: '#fff' }
                : { backgroundColor: '#fff', color: '#111418', border: '1px solid #E4E0D8' }
              }>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filtered.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white border p-7 flex flex-col" style={{ borderColor: '#E4E0D8' }}>
              <FileText className="w-5 h-5 mb-4" strokeWidth={1.5} style={{ color: '#00606B' }} />
              <h3 className="font-semibold text-base mb-2" style={{ color: '#111418' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#2C3238', opacity: 0.65 }}>{r.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t" style={{ borderColor: '#F3EFE7' }}>
                {r.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold tracking-wide uppercase px-2 py-0.5"
                    style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/resources">Browse Resource Library <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
            <Link to="/member-readiness-quiz">Take Member Readiness Quiz</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}