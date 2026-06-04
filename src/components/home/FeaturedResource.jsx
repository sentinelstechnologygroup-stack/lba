import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

const featured = [
  { title: 'New Owner Startup Checklist', desc: 'A practical checklist covering the first 90 days — legal setup, banking, insurance, pricing, and first client steps.', tag: 'Guide', color: '#E6F4F5', textColor: '#00606B' },
  { title: 'How to Price Your Services', desc: 'A straightforward framework for calculating cost, adding margin, and pricing confidently in a competitive local market.', tag: 'Template', color: '#FDF5E6', textColor: '#B8862B' },
  { title: 'Client Contract Template', desc: 'A plain-language service agreement template built for small businesses. Covers scope, payment, timeline, and dispute resolution basics.', tag: 'Template', color: '#E6F4F5', textColor: '#00606B' },
];

export default function FeaturedResource() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Member Resources</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
              Featured Resources
            </h2>
          </div>
          <Button asChild variant="outline" size="sm" className="flex-shrink-0" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
            <Link to="/resources">View All Resources <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border p-7 flex flex-col"
              style={{ borderColor: '#E4E0D8' }}
            >
              <div className="flex items-center justify-between mb-5">
                <FileText className="w-5 h-5" strokeWidth={1.5} style={{ color: '#00606B' }} />
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5" style={{ backgroundColor: r.color, color: r.textColor }}>{r.tag}</span>
              </div>
              <h3 className="font-semibold text-base mb-3" style={{ color: '#111418' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#2C3238', opacity: 0.65 }}>{r.desc}</p>
              <p className="text-xs mt-5 pt-4 border-t" style={{ color: '#2C3238', opacity: 0.4, borderColor: '#E4E0D8' }}>
                Available to all active members
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}