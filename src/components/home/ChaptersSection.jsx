import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

const chapters = [
  { name: 'The Link Houston', area: 'Greater Houston, TX', status: 'Active', members: '24+' },
  { name: 'The Link Texas', area: 'Statewide Network', status: 'Active', members: '60+' },
  { name: 'The Link Gulf Coast', area: 'Gulf Coast Region', status: 'Active', members: '18+' },
  { name: 'The Link Montgomery County', area: 'Montgomery County, TX', status: 'Active', members: '16+' },
  { name: 'The Link The Woodlands', area: 'The Woodlands, TX', status: 'Growing', members: '12+' },
  { name: 'The Link Magnolia', area: 'Magnolia, TX', status: 'Growing', members: '10+' },
];

export default function ChaptersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Chapters</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15]" style={{ color: '#111418' }}>
              Local Chapters
            </h2>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm" className="text-xs tracking-wide uppercase" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                <Link to="/find-chapter">Find a Chapter <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
              </Button>
              <Button asChild size="sm" className="text-xs tracking-wide uppercase" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/start-chapter">Start a Chapter</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="border p-7 hover:border-teal transition-colors group"
              style={{ borderColor: '#E4E0D8', backgroundColor: '#fff' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1"
                  style={{
                    backgroundColor: ch.status === 'Active' ? '#E6F4F5' : '#FAF8F3',
                    color: ch.status === 'Active' ? '#00606B' : '#B8862B'
                  }}
                >
                  {ch.status}
                </span>
                <span className="text-xs" style={{ color: '#111418', opacity: 0.35 }}>{ch.members} members</span>
              </div>
              <h3 className="font-semibold text-base mb-2 group-hover:text-teal transition-colors" style={{ color: '#111418' }}>{ch.name}</h3>
              <p className="flex items-center gap-1.5 text-sm" style={{ color: '#2C3238', opacity: 0.55 }}>
                <MapPin className="w-3 h-3" /> {ch.area}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}