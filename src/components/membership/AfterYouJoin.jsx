import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const steps = [
  { num: '01', title: 'Welcome & Onboarding', desc: 'You will receive a welcome from your chapter organizer with meeting details, community access, and next steps for setting up your member profile.' },
  { num: '02', title: 'Profile Setup', desc: 'Set up your member profile with your business name, description, service category, service area, contact info, and website. A complete profile helps other members understand who you are.' },
  { num: '03', title: 'Attend Your First Meeting', desc: 'Show up to your first chapter meeting prepared with a clear business introduction. Meetings are structured and include introductions, an education segment, and open time for member discussion.' },
  { num: '04', title: 'Participate in Roundtables & Sessions', desc: 'Join owner roundtables, education sessions, and resource discussions. These are where relationships are built and practical knowledge is shared.' },
  { num: '05', title: 'Build Relationships Over Time', desc: 'The Link works best when members consistently show up, engage, and build trust. Referrals, introductions, and opportunities tend to follow participation and genuine relationship building.' },
  { num: '06', title: 'Grow Your Involvement', desc: 'As your business grows or your goals change, you can upgrade your membership level, apply for category placement, or explore chapter partner and sponsor opportunities.' },
];

export default function AfterYouJoin() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>What to Expect</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            What Happens After You Join?
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            Joining The Link is the first step. Here is what typically happens as you get started.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: '#E4E0D8' }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-7 border-r border-b bg-white"
              style={{ borderColor: '#E4E0D8' }}
            >
              <span className="font-heading font-bold text-2xl block mb-4" style={{ color: '#B8862B' }}>{s.num}</span>
              <h3 className="font-semibold text-base mb-3" style={{ color: '#111418' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/membership">See Membership Options <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}