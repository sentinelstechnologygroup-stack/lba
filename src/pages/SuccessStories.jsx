import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';
import MemberTestimonials from '@/components/shared/MemberTestimonials';

const stories = [
  {
    name: 'Robert Caldwell',
    company: 'Caldwell Construction Group',
    result: 'Three key vendor partnerships formed',
    quote: 'I joined The Link because I wanted real relationships, not just a list of names. Within six months I had three ongoing partnerships with other members — a real estate agent, an insurance broker, and a property manager. No cold calls. No awkward pitches. Just built through consistent meetings and follow-through.',
    type: 'Partnerships',
  },
  {
    name: 'Sandra Morales',
    company: 'Morales & Co. CPA',
    result: 'Consistent client referrals from chapter network',
    quote: 'Referrals in The Link work because people actually know you. Clients they send me already trust the person who referred them. That\'s worth more than any advertising I\'ve ever done.',
    type: 'Referral Participation',
  },
  {
    name: 'David Okonkwo',
    company: 'Vantage Consulting',
    result: 'Operational pivot guided by mentor',
    quote: 'My mentor through The Link helped me see I was positioning my services wrong. Three conversations changed how I packaged my offer. It wasn\'t magic — it was clarity from someone who\'d already figured it out.',
    type: 'Mentorship',
  },
  {
    name: 'Angela Kim',
    company: 'Bespoke Events Co.',
    result: 'Hired first employee after education session',
    quote: 'The education session on hiring was the most practical thing I\'d ever heard on the topic. No theory — just real talk about what to look for, what to avoid, and how to onboard someone without losing your mind. I hired my first employee six weeks later.',
    type: 'Education',
  },
  {
    name: 'Patricia Nguyen',
    company: 'Bloom Health Studio',
    result: 'Found trusted accountant and attorney through members',
    quote: 'The member directory and chapter network helped me find a CPA and a business attorney I actually trust. Both were referred by members I already knew. That saved me a lot of time and a lot of stress.',
    type: 'Resource Access',
  },
  {
    name: 'James Harper',
    company: 'Harper Logistics Group',
    result: 'Accountability group helped close 4 target accounts',
    quote: 'My accountability group held me to the outreach numbers I\'d set for myself. It sounds simple. It worked. Four of those outreach targets became clients. I don\'t think I would have stayed consistent without the group.',
    type: 'Accountability',
  },
];

export default function SuccessStories() {
  return (
    <div>
      <PageHero {...pageContent.successStories} />

      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border p-8"
              style={{ borderColor: '#E4E0D8' }}
            >
              <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 mb-5 inline-block" style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>
                {s.type}
              </span>
              <Quote className="w-5 h-5 mb-4 mt-2" style={{ color: '#E4E0D8' }} />
              <p className="text-sm leading-relaxed italic mb-7" style={{ color: '#2C3238', opacity: 0.75 }}>{s.quote}</p>
              <div className="border-t pt-5 flex items-end justify-between" style={{ borderColor: '#E4E0D8' }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#111418' }}>{s.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#2C3238', opacity: 0.55 }}>{s.company}</p>
                </div>
                <p className="text-xs font-semibold text-right max-w-[180px]" style={{ color: '#00606B' }}>{s.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <MemberTestimonials
        bgColor="#FAF8F3"
        title="More Member Experiences"
        subtext="Outcomes depend on participation, market, and business readiness. All content below is sample/demo data."
      />

      {/* Case Studies CTA */}
      <section className="py-12 px-6 lg:px-10 bg-white border-t" style={{ borderColor: '#E4E0D8' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-2" style={{ color: '#00606B' }}>Go Deeper</p>
            <h3 className="font-heading font-bold text-xl" style={{ color: '#111418' }}>
              See Structured Growth Case Studies
            </h3>
            <p className="text-sm mt-1" style={{ color: '#2C3238', opacity: 0.6 }}>
              Read detailed examples showing challenge, approach, and outcome.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              <Link to="/growth-case-studies">View Case Studies <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
              <Link to="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}