import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const mentors = [
  { name: 'Robert Caldwell', role: 'Owner, Caldwell Construction', experience: '22 years in business', areas: ['Operations', 'Hiring', 'Cash Flow'], bio: 'Built a residential construction company from 2 employees to 40. Happy to share what worked and what didn\'t.' },
  { name: 'Sandra Morales', role: 'Founder, Morales & Co. CPA', experience: '16 years in business', areas: ['Finance', 'Tax Planning', 'Business Structure'], bio: 'Started her CPA firm out of her home. Knows what it takes to build a professional services business the right way.' },
  { name: 'James T. Harper', role: 'CEO, Harper Logistics Group', experience: '18 years in business', areas: ['Scaling', 'Ops Systems', 'Team Building'], bio: 'Grew a small delivery operation into a regional logistics company. Understands the gap between hustle and infrastructure.' },
  { name: 'Angela Kim', role: 'Owner, Bespoke Events Co.', experience: '11 years in business', areas: ['Marketing', 'Client Experience', 'Pricing'], bio: 'Built a premium events business entirely on referrals and reputation. Focuses on how you treat clients, not just how you find them.' },
  { name: 'David Okonkwo', role: 'Principal, Vantage Consulting', experience: '14 years in business', areas: ['Sales', 'B2B Development', 'Leadership'], bio: 'Spent years in corporate before going out on his own. Mentors owners who want to make the transition or level up their sales approach.' },
  { name: 'Patricia Nguyen', role: 'Owner, Bloom Health Studio', experience: '9 years in business', areas: ['Retail/Service Hybrid', 'Hiring', 'Systems'], bio: 'Opened a wellness studio from scratch and navigated the hardest parts of building a local service business.' },
];

const topics = [
  'Things we wish someone had told us earlier',
  'Common mistakes to avoid in your first 3 years',
  'How to think through a pricing decision',
  'When to hire and when to wait',
  'How to have hard conversations with clients',
  'How to stop doing everything yourself',
  'Understanding your actual profit margin',
  'What accountability really looks like for business owners',
];

export default function Mentorship() {
  return (
    <div>
      <PageHero {...pageContent.mentorship} />

      {/* What mentors talk about */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6" style={{ color: '#111418' }}>
                What Mentorship Looks Like in The Link
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
                Mentorship at The Link is owner-to-owner guidance. It's experienced operators sharing what they've learned — the mistakes, the pivots, and the practical decisions that shaped their businesses.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
                This is not a formal consulting program. It's structured opportunity to learn from people who have actually been through what you're facing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-6" style={{ color: '#00606B' }}>Topics Mentors Cover</h3>
              <ul className="space-y-3">
                {topics.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm pb-3 border-b last:border-0" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#B8862B' }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor directory */}
      <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl" style={{ color: '#111418' }}>Member Mentors</h2>
            <p className="mt-3 text-sm" style={{ color: '#2C3238', opacity: 0.55 }}>Sample mentor directory preview — actual mentors vary by chapter.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border p-7"
                style={{ borderColor: '#E4E0D8' }}
              >
                <h3 className="font-semibold text-base mb-1" style={{ color: '#111418' }}>{m.name}</h3>
                <p className="text-xs mb-1" style={{ color: '#00606B' }}>{m.role}</p>
                <p className="text-xs mb-4" style={{ color: '#2C3238', opacity: 0.5 }}>{m.experience}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#2C3238', opacity: 0.65 }}>{m.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {m.areas.map(area => (
                    <span key={area} className="text-[10px] font-medium px-2.5 py-1" style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>{area}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-5" style={{ color: '#111418' }}>Interested in Mentorship Access?</h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: '#2C3238', opacity: 0.65 }}>
            Mentorship access is available to eligible Link members. Join the alliance and let us know you're looking for guidance.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/membership">Become a Member <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}