import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  { num: '01', title: 'Local Chapter Access', desc: 'Attend regularly scheduled chapter meetings, owner roundtables, and local networking events with other member businesses.' },
  { num: '02', title: 'Member Directory Listing', desc: 'Your business is listed in the Link member directory, accessible to other members and visible within the local chapter network.' },
  { num: '03', title: 'Owner Roundtables', desc: 'Small-group discussions with fellow business owners on common challenges — run like a peer advisory, not a sales pitch session.' },
  { num: '04', title: 'Resource Library', desc: 'Access to templates, operational guides, funding resources, vendor lists, and practical business tools curated for small business owners.' },
  { num: '05', title: 'Business Education Sessions', desc: 'Regular workshops and sessions covering sales, operations, finance, hiring, customer service, and other practical business topics.' },
  { num: '06', title: 'Mentorship Access', desc: 'Connect with experienced business operators willing to share what they have learned — guidance, not guarantees.' },
  { num: '07', title: 'Referral Participation', desc: 'Eligible members may be included in member-to-member referral routing when appropriate and subject to quality, responsiveness, and compliance.' },
  { num: '08', title: 'Visibility Opportunities', desc: 'Chapter events, sponsor placements, and directory highlighting available at higher membership tiers to increase your business presence.' },
];

export default function PillarsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState(null);

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>
            Member Benefits
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15]" style={{ color: '#111418' }}>
            What Members Get
          </h2>
        </motion.div>

        <div className="space-y-0">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-t last:border-b cursor-pointer group"
              style={{ borderColor: '#E4E0D8' }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center gap-6 lg:gap-10 py-5 lg:py-6">
                <span className="text-xs font-semibold w-8 flex-shrink-0" style={{ color: '#B8862B' }}>{b.num}</span>
                <h3 className="font-semibold text-sm lg:text-base flex-1 group-hover:text-teal transition-colors" style={{ color: '#111418' }}>
                  {b.title}
                </h3>
                <motion.span
                  animate={{ rotate: expanded === i ? 45 : 0 }}
                  className="text-xl flex-shrink-0"
                  style={{ color: '#00606B' }}
                >
                  +
                </motion.span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pb-6 pl-[56px] lg:pl-[72px] pr-10">
                  <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.7 }}>{b.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}