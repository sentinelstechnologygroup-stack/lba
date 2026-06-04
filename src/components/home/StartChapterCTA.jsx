import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function StartChapterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="h-0.5 w-10 mb-8" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>
              Find Your Link
            </p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15] mb-6" style={{ color: '#F7F5F0' }}>
              Connect with owners, resources, and opportunities in your local business community.
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="font-semibold text-sm px-7"
                style={{ backgroundColor: '#00606B', color: '#fff' }}
              >
                <Link to="/membership">Join The Link <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-medium text-sm"
                style={{ borderColor: '#F7F5F055', color: '#F7F5F0', backgroundColor: 'transparent' }}
              >
                <Link to="/find-chapter">Find a Chapter</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="border p-8 lg:p-10" style={{ borderColor: '#B8862B44' }}>
              <p className="text-sm font-semibold mb-6" style={{ color: '#B8862B' }}>Start a Chapter in Your City</p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#F7F5F0', opacity: 0.6 }}>
                Chapter leaders help organize meetings, recruit members, coordinate local partnerships, and represent The Link in their local market. This is a chapter opportunity — not a franchise. Contact us to learn about availability in your area.
              </p>
              <Button
                asChild
                variant="outline"
                className="text-xs tracking-wide uppercase font-medium"
                style={{ borderColor: '#B8862B', color: '#B8862B', backgroundColor: 'transparent' }}
              >
                <Link to="/start-chapter">Explore the Chapter Opportunity <ArrowRight className="w-3 h-3 ml-2" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}