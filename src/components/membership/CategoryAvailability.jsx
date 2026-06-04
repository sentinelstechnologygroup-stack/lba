import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Accounting & Bookkeeping', status: 'open' },
  { name: 'Business Coaching', status: 'limited' },
  { name: 'Commercial Cleaning', status: 'open' },
  { name: 'Commercial Real Estate', status: 'open' },
  { name: 'Financial Planning', status: 'limited' },
  { name: 'General Contracting', status: 'open' },
  { name: 'Graphic Design & Branding', status: 'open' },
  { name: 'Health & Wellness Services', status: 'open' },
  { name: 'HR & Staffing', status: 'open' },
  { name: 'Insurance', status: 'limited' },
  { name: 'IT & Technology Services', status: 'open' },
  { name: 'Legal Services', status: 'open' },
  { name: 'Marketing & Advertising', status: 'open' },
  { name: 'Mortgage & Lending', status: 'limited' },
  { name: 'Photography & Video', status: 'open' },
  { name: 'Plumbing & HVAC', status: 'open' },
  { name: 'Printing & Signage', status: 'open' },
  { name: 'Residential Real Estate', status: 'limited' },
  { name: 'Restaurant & Food Service', status: 'open' },
  { name: 'Retail & E-Commerce', status: 'open' },
  { name: 'Roofing & Exterior', status: 'open' },
  { name: 'Security Services', status: 'open' },
  { name: 'Social Media Management', status: 'open' },
  { name: 'Web Design & Development', status: 'open' },
];

const statusConfig = {
  open: { label: 'Open', color: '#00606B', bg: '#E6F4F5' },
  limited: { label: 'Limited', color: '#B8862B', bg: '#FDF5E6' },
  closed: { label: 'Filled', color: '#888', bg: '#F3F3F3' },
};

export default function CategoryAvailability() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Category Positioning</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Category Availability Preview
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            Category availability varies by chapter and geography. This is a general overview only. Contact your local chapter organizer to confirm current availability in your area.
          </p>
        </motion.div>

        <div className="flex gap-5 flex-wrap mb-8">
          {Object.entries(statusConfig).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2 text-xs font-medium">
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase" style={{ backgroundColor: val.bg, color: val.color }}>{val.label}</span>
              <span style={{ color: '#2C3238', opacity: 0.6 }}>= {key === 'open' ? 'Category position available' : key === 'limited' ? 'One or more positions may be filled' : 'Category currently filled'}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((cat, i) => {
            const st = statusConfig[cat.status];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center justify-between p-4 border bg-white"
                style={{ borderColor: '#E4E0D8' }}
              >
                <span className="text-sm font-medium" style={{ color: '#111418' }}>{cat.name}</span>
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 ml-2 flex-shrink-0" style={{ backgroundColor: st.bg, color: st.color }}>{st.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 p-5 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#fff' }}>
          <p className="text-xs text-center" style={{ color: '#2C3238', opacity: 0.5 }}>
            Category availability is subject to chapter approval, geography, exclusivity agreements, quality standards, and current member status. Contact your chapter organizer to confirm availability in your specific market.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/contact">Check Category Availability <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}