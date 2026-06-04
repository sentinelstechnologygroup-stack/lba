import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';

const topics = [
  { title: 'What to focus on first', desc: 'New owners face dozens of decisions. The Link helps you prioritize — connecting you with experienced owners who can help you sort noise from necessity.' },
  { title: 'Avoiding costly early mistakes', desc: 'From pricing errors to bad vendor choices, experienced members can help you recognize common mistakes before you make them.' },
  { title: 'Building your first professional network', desc: 'The Link gives new owners an immediate community of local business owners, mentors, and resources they can actually talk to.' },
  { title: 'Understanding your business category', desc: 'Knowing how to describe your business, who you serve, and where you fit in the local market is essential. The Link helps you clarify this from day one.' },
  { title: 'Finding trusted local resources', desc: 'Accountants, legal basics, insurance, banking — new owners often need these but do not know who to trust. Member introductions can help shorten that search.' },
  { title: 'Building confidence before spending', desc: 'Many new owners overspend on marketing, software, or services they do not yet need. The Link helps you make better decisions with practical input from peers.' },
];

export default function NewOwnerHelp() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Starting Out</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15] max-w-2xl" style={{ color: '#111418' }}>
            Help for New Business Owners
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            New owners often do not need more noise. They need direction, people they can ask, and a place to learn what experienced owners wish they had known earlier. The Link Community Membership ($10/month) was built for exactly this stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 border"
              style={{ borderColor: '#E4E0D8' }}
            >
              <Lightbulb className="w-4 h-4 mb-4" style={{ color: '#B8862B' }} />
              <h3 className="font-semibold text-sm mb-3" style={{ color: '#111418' }}>{t.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-8 border text-center" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
          <p className="font-heading font-bold text-lg mb-2" style={{ color: '#111418' }}>Community Membership — $10/month</p>
          <p className="text-sm mb-6" style={{ color: '#2C3238', opacity: 0.65 }}>
            A low-cost starting point. Meetings, resources, community, and owner connections — without overcommitting.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}