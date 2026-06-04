import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

const spotlight = {
  name: 'The Link Houston',
  tagline: 'One of the founding chapters of Link Business Alliance.',
  location: 'The Woodlands, TX',
  area: 'Greater Houston Region',
  members: 24,
  meetings: 'Every other Thursday · 7:30 AM',
  organizer: 'Chapter Organizer: Houston Team',
  about: 'The Link Houston brings together small business owners, service providers, and local entrepreneurs across the Greater Houston area. Members meet regularly to network, share resources, discuss challenges, and support each other\'s growth. The chapter has hosted education sessions, owner roundtables, and sponsor visibility events.',
  highlights: [
    '24+ active members across multiple industries',
    'Bi-weekly in-person meetings in The Woodlands area',
    'Monthly education segments and owner roundtables',
    'Active resource sharing and vendor introductions',
    'Open to new members — category availability varies',
  ],
  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
};

export default function ChapterSpotlight() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Chapter Spotlight</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Featured Chapter
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={spotlight.image} alt={spotlight.name} className="w-full object-cover" style={{ height: 380 }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <span className="inline-block text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5 w-fit" style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>Active Chapter</span>
            <h3 className="font-heading font-bold text-2xl mb-2" style={{ color: '#111418' }}>{spotlight.name}</h3>
            <p className="text-sm mb-5" style={{ color: '#00606B', fontStyle: 'italic' }}>{spotlight.tagline}</p>

            <div className="space-y-2 mb-6">
              <p className="flex items-center gap-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: '#00606B' }} /> {spotlight.location} · {spotlight.area}
              </p>
              <p className="flex items-center gap-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                <Calendar className="w-3.5 h-3.5" style={{ color: '#00606B' }} /> {spotlight.meetings}
              </p>
              <p className="flex items-center gap-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                <Users className="w-3.5 h-3.5" style={{ color: '#00606B' }} /> {spotlight.members}+ active members
              </p>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: '#2C3238', opacity: 0.65 }}>{spotlight.about}</p>

            <ul className="space-y-2 mb-8">
              {spotlight.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#00606B' }} />
                  <span style={{ color: '#111418' }}>{h}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              <Link to="/contact">Request to Attend <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}