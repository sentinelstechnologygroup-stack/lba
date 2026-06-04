import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const items = [
  { id: 1, label: 'I have a clear, one-sentence description of what my business does', tip: 'Example: "I help homeowners in Montgomery County with full-service plumbing repairs and installations."' },
  { id: 2, label: 'My contact information is accurate and easy to find', tip: 'Phone, email, and address (if applicable) should be current and working.' },
  { id: 3, label: 'I have a basic online presence — website, profile, or landing page', tip: 'Even a simple Google Business Profile or social page counts. Members and referrers will look you up.' },
  { id: 4, label: 'I know what service category my business belongs in', tip: 'e.g., "Residential Plumbing," "Business Coaching," "Commercial Cleaning," "Digital Marketing."' },
  { id: 5, label: 'I can define my service area clearly', tip: 'Be specific: city, county, region, or radius. Helps the alliance route opportunities correctly.' },
  { id: 6, label: 'I respond to calls, emails, and messages within 24 hours', tip: 'Unresponsive businesses damage everyone\'s reputation. Responsiveness is a basic expectation of Link members.' },
  { id: 7, label: 'My work meets a professional quality standard', tip: 'The Link is not a guaranteed leads program. It is a community of businesses that hold each other to a reasonable standard.' },
  { id: 8, label: 'I am willing to attend meetings, engage with members, and participate', tip: 'The Link works for active participants. Passive members rarely see meaningful results.' },
];

export default function MemberReadinessChecklist() {
  const [checked, setChecked] = useState([]);

  const toggle = (id) => setChecked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const score = checked.length;
  const pct = Math.round((score / items.length) * 100);

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Self-Assessment</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Member Readiness Checklist
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
            Before joining, check off where your business stands. The more items you can check, the more prepared you are to benefit from membership.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mb-8 p-5 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold" style={{ color: '#111418' }}>Readiness Score</span>
            <span className="font-heading font-bold text-lg" style={{ color: score === items.length ? '#00606B' : '#B8862B' }}>{score}/{items.length}</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#E4E0D8' }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: score === items.length ? '#00606B' : '#B8862B' }} />
          </div>
          {score === items.length && (
            <p className="mt-3 text-xs font-semibold" style={{ color: '#00606B' }}>You are ready. The Link is a great fit for where your business is right now.</p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isChecked = checked.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => toggle(item.id)}
                className="p-5 border cursor-pointer transition-all"
                style={{ borderColor: isChecked ? '#00606B' : '#E4E0D8', backgroundColor: isChecked ? '#E6F4F5' : '#fff' }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all"
                    style={{ borderColor: isChecked ? '#00606B' : '#E4E0D8', backgroundColor: isChecked ? '#00606B' : 'transparent' }}>
                    {isChecked && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#111418' }}>{item.label}</p>
                    <p className="text-xs mt-1.5 leading-relaxed" style={{ color: '#2C3238', opacity: 0.55 }}>{item.tip}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/contact">I'm Ready — Talk to an Organizer <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}