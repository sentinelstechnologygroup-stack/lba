import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const topics = [
  { num: '01', title: 'Business Basics', desc: 'Business structure, licensing, legal fundamentals, and how to set up your business to operate and grow effectively.' },
  { num: '02', title: 'Sales & Client Development', desc: 'How to find, qualify, pitch, and close clients. Practical frameworks from business owners who have built service books from scratch.' },
  { num: '03', title: 'Operations & Process', desc: 'Building repeatable systems so your business can run without you carrying everything. SOPs, workflows, and operational structure.' },
  { num: '04', title: 'Finance & Cash Flow', desc: 'Understanding your numbers — profit margins, cash flow management, pricing, and when to bring in a bookkeeper or CPA.' },
  { num: '05', title: 'Hiring & Team Building', desc: 'When and how to hire. What to look for, how to onboard, how to manage expectations, and when to let go.' },
  { num: '06', title: 'Customer Experience', desc: 'How clients experience your business beyond the transaction — and why it drives repeat business and word-of-mouth more than anything else.' },
  { num: '07', title: 'Owner Leadership', desc: 'Working on your business, not just in it. Time management, decision-making, leadership identity, and avoiding burnout.' },
  { num: '08', title: 'Technology Readiness', desc: 'Practical tools and software that can help small businesses operate more efficiently. Not a deep tech dive — a practical readiness check.' },
];

export default function Education() {
  return (
    <div>
      <PageHero {...pageContent.education} />

      <section id="curriculum" className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border p-7 hover:border-teal transition-colors group cursor-pointer"
                style={{ borderColor: '#E4E0D8' }}
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-bold pt-0.5 flex-shrink-0" style={{ color: '#B8862B' }}>{topic.num}</span>
                  <div>
                    <h3 className="font-semibold text-base mb-2 group-hover:text-teal transition-colors" style={{ color: '#111418' }}>{topic.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{topic.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 text-center" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-2xl mx-auto">
          <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#111418' }}>
            Education Is a Member Benefit
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
            All education sessions are available to Link members. Sessions are hosted by chapter and open to members across the network. Join to access the full education calendar.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/membership">Become a Member <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}