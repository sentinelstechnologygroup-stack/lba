import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const perks = [
  'Founding member recognition in chapter materials',
  'Priority category consideration before chapter opens publicly',
  'Locked-in introductory membership rate',
  'Direct access to chapter organizer during setup',
  'First-to-know on chapter events, partnerships, and opportunities',
  'Founding member badge on your member profile',
];

export default function FoundingMemberCallout() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5" style={{ color: '#B8862B' }} />
              <p className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: '#B8862B' }}>Limited Opportunity</p>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15] mb-5" style={{ color: '#F7F5F0' }}>
              Become a Founding Member of Your Local Chapter
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#F7F5F0', opacity: 0.6 }}>
              When a new Link chapter forms in your area, a small number of founding member spots are made available before the chapter opens publicly. Founding members help shape the chapter, get first access to category positions, and are recognized as original contributors to the local business-owner community.
            </p>
            <Button asChild size="lg" style={{ backgroundColor: '#B8862B', color: '#fff' }}>
              <Link to="/contact">Inquire About Founding Membership <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <p className="mt-4 text-xs" style={{ color: '#F7F5F0', opacity: 0.3 }}>
              Founding member spots are limited, subject to approval, and vary by chapter and market.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="border p-8" style={{ borderColor: '#B8862B44', borderTop: '3px solid #B8862B' }}>
              <h3 className="font-semibold text-base mb-6" style={{ color: '#B8862B' }}>Founding Member Advantages</h3>
              <ul className="space-y-4">
                {perks.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Star className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#B8862B' }} />
                    <span style={{ color: '#F7F5F0', opacity: 0.75 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}