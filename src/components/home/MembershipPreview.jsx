import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const plans = [
  { name: 'Community', price: '$10', period: '/mo', tagline: 'Start here. Stop operating alone.', gold: false, featured: false },
  { name: 'Visibility', price: '$25', period: '/mo', tagline: 'Be seen. Be understood. Be findable.', gold: false, featured: false },
  { name: 'Category', price: '$50', period: '/mo', tagline: 'Get positioned. Get recognized.', gold: false, featured: true },
  { name: 'Exclusive Category Partner', price: 'From $150', period: '/mo', tagline: 'Primary category positioning.', gold: true, featured: false },
  { name: 'Chapter / Founding Partner', price: 'Custom', period: '', tagline: 'Help build a local chapter.', gold: true, featured: false },
];

export default function MembershipPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Membership</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15]" style={{ color: '#111418' }}>
              Membership for Every Stage of Business
            </h2>
            <Button asChild size="lg" className="flex-shrink-0 font-semibold text-sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              <Link to="/membership">Compare All Options <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 border bg-white flex flex-col relative"
              style={{
                borderColor: plan.featured ? '#00606B' : plan.gold ? '#B8862B66' : '#E4E0D8',
                borderTopWidth: plan.featured || plan.gold ? 3 : 1,
                borderTopColor: plan.featured ? '#00606B' : plan.gold ? '#B8862B' : '#E4E0D8',
              }}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-5 text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 text-white" style={{ backgroundColor: '#00606B' }}>
                  Recommended
                </span>
              )}
              {plan.gold && (
                <span className="absolute -top-3.5 left-5 text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 text-white" style={{ backgroundColor: '#B8862B' }}>
                  Partner
                </span>
              )}
              <div className="mb-3">
                <span className="font-heading font-bold text-xl" style={{ color: plan.gold ? '#B8862B' : '#111418' }}>{plan.price}</span>
                {plan.period && <span className="text-xs ml-1" style={{ color: '#2C3238', opacity: 0.45 }}>{plan.period}</span>}
              </div>
              <h3 className="font-semibold text-sm mb-2" style={{ color: plan.gold ? '#B8862B' : '#111418' }}>{plan.name}</h3>
              <p className="text-xs leading-relaxed flex-1" style={{ color: '#2C3238', opacity: 0.6 }}>{plan.tagline}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center text-xs"
          style={{ color: '#111418', opacity: 0.4 }}
        >
          Membership does not guarantee leads, referrals, or business outcomes.{' '}
          <Link to="/membership" className="underline hover:opacity-80">View full membership details</Link>
        </motion.p>
      </div>
    </section>
  );
}