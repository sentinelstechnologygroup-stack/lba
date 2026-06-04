import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, CalendarCheck } from 'lucide-react';

const events = [
  { date: 'Jun 12', day: 'THU', title: 'The Link Houston – Chapter Meeting', location: 'The Woodlands, TX', type: 'Chapter Meeting' },
  { date: 'Jun 18', day: 'WED', title: 'Owner Roundtable: Hiring Your First Employee', location: 'Virtual', type: 'Roundtable' },
  { date: 'Jun 25', day: 'WED', title: 'Lunch & Learn: Understanding Your Numbers', location: 'Magnolia, TX', type: 'Education' },
  { date: 'Jul 10', day: 'THU', title: 'The Link Gulf Coast – Chapter Meeting', location: 'Houston, TX', type: 'Chapter Meeting' },
];

export default function UpcomingEvents() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Upcoming</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>Events & Chapter Meetings</h2>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button asChild size="sm" className="text-xs font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              <Link to="/event-rsvp">RSVP for an Event <CalendarCheck className="w-3 h-3 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="text-xs tracking-wide uppercase font-medium" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
              <Link to="/events">View All Events <ArrowRight className="w-3 h-3 ml-2" /></Link>
            </Button>
          </div>
        </div>

        <div>
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-t last:border-b py-5 lg:py-6 flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 items-start sm:items-center group cursor-pointer"
              style={{ borderColor: '#E4E0D8' }}
            >
              <div className="w-20 flex-shrink-0">
                <p className="text-[10px] tracking-wider uppercase" style={{ color: '#B8862B', opacity: 0.8 }}>{e.day}</p>
                <p className="font-heading font-bold text-lg" style={{ color: '#111418' }}>{e.date}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-base group-hover:text-teal transition-colors" style={{ color: '#111418' }}>{e.title}</h3>
                <p className="flex items-center gap-1.5 mt-1.5 text-sm" style={{ color: '#2C3238', opacity: 0.55 }}>
                  <MapPin className="w-3 h-3" /> {e.location}
                </p>
              </div>
              <span
                className="text-[9px] tracking-[0.15em] uppercase font-semibold px-3 py-1.5 flex-shrink-0"
                style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}
              >
                {e.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}