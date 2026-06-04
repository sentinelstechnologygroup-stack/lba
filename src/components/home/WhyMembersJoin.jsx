import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, BookOpen, TrendingUp, Eye, Handshake, Building2 } from 'lucide-react';

const reasons = [
  { icon: Users, title: 'Meet the Right Business Owners', desc: 'Structured introductions and member-to-member connections with owners who share your mindset and goals.' },
  { icon: Building2, title: 'Find Trusted Local Resources', desc: 'Access vetted vendors, service providers, and strategic partners — recommended by fellow members.' },
  { icon: BookOpen, title: 'Learn from Experienced Operators', desc: 'Education sessions and roundtables led by people who have operated real businesses and can share what actually works.' },
  { icon: Eye, title: 'Become Known in the Community', desc: 'A directory listing, chapter visibility, and member-to-member referral participation when appropriate.' },
  { icon: Handshake, title: 'Understand Local Opportunities', desc: 'Stay informed on market activity, local business trends, and partnership opportunities through your chapter network.' },
  { icon: TrendingUp, title: 'Build with Support', desc: 'Accountability, resources, mentorship access, and a network of owners working through the same challenges you face.' },
];

export default function WhyMembersJoin() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>
            Why Owners Join
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15] max-w-2xl" style={{ color: '#F7F5F0' }}>
            What You Gain as a Link Member
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#1E2226' }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 lg:p-10 group hover:bg-charcoal-light transition-colors duration-300"
              style={{ backgroundColor: '#111418' }}
            >
              <r.icon className="w-5 h-5 mb-5" strokeWidth={1.5} style={{ color: '#B8862B' }} />
              <h3 className="font-semibold text-sm mb-3 leading-snug" style={{ color: '#F7F5F0' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#F7F5F0', opacity: 0.45 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}