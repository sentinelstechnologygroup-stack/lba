import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Minus } from 'lucide-react';

const compare = [
  { label: 'Traditional Chambers', items: ['Broad focus, not owner-growth specific', 'Mostly civic/political networking', 'Limited peer-to-peer support', 'Minimal practical resources'] },
  { label: 'Referral-Only Groups', items: ['Single seat per profession model', 'Referral count as primary metric', 'Little education or mentorship', 'No strategic partner access'] },
  { label: 'Casual Meetups', items: ['No structured follow-up', 'No accountability', 'No curated membership', 'No resource library'] },
];

const linkStrengths = [
  'Owner-to-owner relationships and introductions',
  'Member directory and local visibility',
  'Practical business education sessions',
  'Mentorship from experienced operators',
  'Referral participation when appropriate',
  'Resource library and operational tools',
  'Accountability and peer roundtables',
  'Strategic partner access',
];

export default function TheLinkDifference() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>The Link Difference</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15] max-w-3xl" style={{ color: '#111418' }}>
            One Alliance. Many Ways to Support Your Business.
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            The Link combines relationship-building, resource access, member visibility, mentorship, and local opportunity awareness in one structured business-owner alliance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Comparisons */}
          <div className="space-y-5">
            {compare.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="border bg-white p-7"
                style={{ borderColor: '#E4E0D8' }}
              >
                <h3 className="font-semibold text-sm mb-5" style={{ color: '#111418', opacity: 0.5 }}>{c.label}</h3>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                      <Minus className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#E4E0D8' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Link strengths */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border p-8 lg:p-10"
            style={{ borderColor: '#00606B33', backgroundColor: '#fff' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 flex-1" style={{ backgroundColor: '#00606B22' }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#00606B' }}>Link Business Alliance</span>
              <div className="h-0.5 flex-1" style={{ backgroundColor: '#00606B22' }} />
            </div>
            <ul className="space-y-4">
              {linkStrengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm font-medium" style={{ color: '#111418' }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}