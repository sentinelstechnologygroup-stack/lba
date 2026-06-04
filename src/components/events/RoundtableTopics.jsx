import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const topics = [
  { topic: 'Hiring Your First Employee', desc: 'Timing, compensation, job descriptions, onboarding, and the most common first-hire mistakes.' },
  { topic: 'Pricing Your Services', desc: 'How to price confidently, avoid undercharging, and communicate your value to clients.' },
  { topic: 'Getting Clients to Pay on Time', desc: 'Contracts, invoicing, payment terms, deposits, and how to handle late or non-paying clients.' },
  { topic: 'Understanding Your Numbers', desc: 'Profit margins, cash flow basics, the difference between revenue and profit, and knowing when your business is actually healthy.' },
  { topic: 'When to Say No to a Client', desc: 'Recognizing bad fits, problem clients, scope creep, and the cost of accepting the wrong work.' },
  { topic: 'Building a Referral-Ready Business', desc: 'What makes a business easy to refer — profile, responsiveness, quality, clarity, and trustworthiness.' },
  { topic: 'Marketing Without Wasting Money', desc: 'Practical, low-cost ways to be visible in your local market without paying for things that do not work.' },
  { topic: 'Systems That Actually Get Used', desc: 'Simple operating systems — scheduling, communication, follow-up — that work for small businesses.' },
  { topic: 'Sales for People Who Hate Selling', desc: 'Consultative selling, listening-first approaches, and how to close without feeling like you\'re pushing.' },
  { topic: 'Managing Vendors and Subcontractors', desc: 'How to vet, onboard, and manage third-party relationships without creating more problems than they solve.' },
  { topic: 'Business Owner Mental Health', desc: 'Stress, burnout, isolation, and practical ways business owners maintain energy, focus, and perspective.' },
  { topic: 'Preparing Your Business to Run Without You', desc: 'Delegation, documentation, and the transition from operator to owner.' },
];

export default function RoundtableTopics() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Owner Roundtables</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Topics We Cover in Owner Roundtables
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            Roundtables are small-group sessions where owners talk through real business challenges. Topics rotate based on member needs and chapter input. These are not presentations — they are practical discussions led by and for business owners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t, i) => (
            <motion.div
              key={t.topic}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="p-5 border bg-white"
              style={{ borderColor: '#E4E0D8' }}
            >
              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#111418' }}>{t.topic}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.6 }}>{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/events">View Upcoming Events <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}