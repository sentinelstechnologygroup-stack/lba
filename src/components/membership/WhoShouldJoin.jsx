import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const groups = [
  { title: 'New & Early-Stage Business Owners', desc: 'If you are just starting out and need direction, affordable community, and access to experienced owners — Community Membership gives you a low-risk starting point.' },
  { title: 'Solo Operators & Side Businesses', desc: 'If you run a business on your own and want peer connections, resources, and a community that understands the solo-operator experience.' },
  { title: 'Service Providers & Trades', desc: 'If you are a contractor, consultant, professional, or trade business that wants category visibility and to become easier to find and refer.' },
  { title: 'Local Retail & Brick-and-Mortar', desc: 'If you own a local business and want to be more embedded in the local business community through member relationships and events.' },
  { title: 'Established Businesses Ready to Grow', desc: 'If you already have a working business and are ready to invest in category positioning, local presence, or a leadership role in the chapter.' },
  { title: 'Business Builders & Chapter Leaders', desc: 'If you want to help create a local business-owner community — not just attend one. Chapter and founding partner opportunities are available for qualified leaders.' },
];

const notFor = [
  'Businesses looking for guaranteed leads or referrals',
  'Owners who are not willing to participate or engage',
  'Businesses that do not meet responsiveness and quality standards',
  'Anyone expecting passive results from passive membership',
];

export default function WhoShouldJoin() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Is The Link Right for You?</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Who Should Join The Link?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 border"
              style={{ borderColor: '#E4E0D8', borderLeft: '3px solid #00606B' }}
            >
              <h3 className="font-semibold text-sm mb-3" style={{ color: '#111418' }}>{g.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="border p-8" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
          <h3 className="font-semibold text-base mb-5" style={{ color: '#111418' }}>The Link may not be the right fit if you are looking for:</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {notFor.map((n, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B8862B' }} />
                {n}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/contact">Talk to a Chapter Organizer <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}