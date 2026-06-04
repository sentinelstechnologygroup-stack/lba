import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Minus } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const comparisons = [
  { org: 'Traditional Chambers', issues: ['Broad civic focus, not owner-growth specific', 'Limited peer-to-peer mentorship', 'Minimal operational resources', 'Rarely owner-led discussions'] },
  { org: 'Referral-Only Groups', issues: ['Referral count as primary success metric', 'Little education or mentorship offered', 'Single-seat profession model limits collaboration', 'No strategic partner or vendor access'] },
  { org: 'Online-Only Directories', issues: ['Superficial connections with no follow-through', 'No structured accountability', 'No local community building', 'No resource library or education'] },
];

const linkStrengths = [
  'Owner-to-owner relationships and structured introductions',
  'Member directory and local visibility tools',
  'Practical business education sessions led by operators',
  'Mentorship access from experienced business owners',
  'Referral participation when appropriate and available',
  'Curated resource library and operational guidance',
  'Peer accountability roundtables',
  'Strategic partner and vendor access',
];

export default function About() {
  const missionRef = useRef(null);
  const whyRef = useRef(null);
  const diffRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const whyInView = useInView(whyRef, { once: true, margin: '-100px' });
  const diffInView = useInView(diffRef, { once: true, margin: '-100px' });

  return (
    <div>
      <PageHero {...pageContent.about} />

      {/* Mission */}
      <section ref={missionRef} className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={missionInView ? { opacity: 1, y: 0 } : {}} className="mb-14">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Our Mission</p>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl leading-[1.15]" style={{ color: '#111418' }}>
              What The Link Is For
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
              Our mission is to help business owners stop operating alone by giving them access to relationships, resources, practical knowledge, visibility, and local opportunities through a structured business-owner alliance.
            </p>
            <p className="mt-4 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
              We believe many business owners do not fail because they lack effort. They struggle because they lack the right relationships, the right information, the right support, or the right visibility at the right time. The Link exists to help close that gap.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { word: 'Connect', desc: 'Build meaningful owner-to-owner relationships and access a curated network of aligned business professionals.' },
              { word: 'Learn', desc: 'Practical business education, peer-led discussions, and mentorship from experienced operators who have been through it.' },
              { word: 'Find Resources', desc: 'Access trusted vendors, operational tools, funding references, and strategic partners — recommended by fellow members.' },
              { word: 'Grow Together', desc: 'Accountability, visibility, and structured support that helps you build a stronger, more sustainable business.' },
            ].map((m, i) => (
              <motion.div
                key={m.word}
                initial={{ opacity: 0, y: 25 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-6"
                style={{ borderColor: '#00606B' }}
              >
                <span className="font-heading font-bold text-xl" style={{ color: '#00606B' }}>{m.word}</span>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.7 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are not */}
      <section ref={whyRef} className="py-24 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} className="mb-14">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>What We Are Not</p>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl leading-[1.15] max-w-3xl" style={{ color: '#111418' }}>
              A Different Kind of Business Organization
            </h2>
            <p className="mt-5 text-base max-w-2xl leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
              Many business owners have tried groups that didn't deliver. Here's how The Link is positioned differently — not to replace what works, but to offer something more comprehensive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {comparisons.map((c, i) => (
              <motion.div
                key={c.org}
                initial={{ opacity: 0, y: 25 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white p-7 border"
                style={{ borderColor: '#E4E0D8' }}
              >
                <h3 className="font-semibold text-sm mb-5" style={{ color: '#111418', opacity: 0.55 }}>{c.org}</h3>
                <ul className="space-y-3">
                  {c.issues.map((issue) => (
                    <li key={issue} className="flex items-start gap-3 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                      <Minus className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#E4E0D8' }} />
                      {issue}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Link Difference */}
      <section ref={diffRef} className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -25 }} animate={diffInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>The Link Difference</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15] mb-5" style={{ color: '#111418' }}>
              One Alliance. Many Ways to Support Your Business.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
              The Link combines relationship-building, resource access, member visibility, mentorship, and local opportunity awareness in one structured business-owner alliance.
            </p>
            <ul className="space-y-3 mb-10">
              {linkStrengths.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm" style={{ color: '#111418' }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                  {d}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="font-semibold text-sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              <Link to="/membership">Become a Member <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} animate={diffInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Business owners in a meeting"
              className="w-full object-cover"
              style={{ height: 500 }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}