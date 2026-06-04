import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Users, Calendar, ArrowRight, Search } from 'lucide-react';
import ChapterSpotlight from '@/components/chapters/ChapterSpotlight';

const chapters = [
  { name: 'The Link Houston', area: 'Greater Houston, TX', city: 'Houston', members: 24, meetings: 'Every other Thursday', time: '7:30 AM', location: 'The Woodlands, TX', contact: 'houston@linkbusinessalliance.com', status: 'Active' },
  { name: 'The Link Texas', area: 'Statewide Network', city: 'Texas', members: 60, meetings: 'Monthly Statewide', time: 'Various', location: 'Texas-wide', contact: 'texas@linkbusinessalliance.com', status: 'Active' },
  { name: 'The Link Gulf Coast', area: 'Gulf Coast Region', city: 'Gulf Coast', members: 18, meetings: 'Every other Wednesday', time: '8:00 AM', location: 'Houston, TX', contact: 'gulfcoast@linkbusinessalliance.com', status: 'Active' },
  { name: 'The Link Montgomery County', area: 'Montgomery County, TX', city: 'Montgomery', members: 16, meetings: 'Every other Tuesday', time: '7:30 AM', location: 'Conroe / The Woodlands, TX', contact: 'montgomery@linkbusinessalliance.com', status: 'Active' },
  { name: 'The Link The Woodlands', area: 'The Woodlands, TX', city: 'Woodlands', members: 12, meetings: 'Monthly', time: '7:30 AM', location: 'The Woodlands, TX', contact: 'thewoodlands@linkbusinessalliance.com', status: 'Growing' },
  { name: 'The Link Magnolia', area: 'Magnolia, TX', city: 'Magnolia', members: 10, meetings: 'Monthly', time: '8:00 AM', location: 'Magnolia, TX', contact: 'magnolia@linkbusinessalliance.com', status: 'Growing' },
];

export default function FindChapter() {
  const [search, setSearch] = useState('');
  const filtered = chapters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.city.toLowerCase().includes(search.toLowerCase()) ||
    c.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="py-24 lg:py-36 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-0.5 w-10 mb-8" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Local Chapters</p>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-[1.1] max-w-3xl" style={{ color: '#F7F5F0' }}>
              Local Chapter Directory
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-xl" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Link chapters meet regularly in local communities. Find the chapter closest to you and attend a meeting to see if The Link is a good fit for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-md mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#2C3238', opacity: 0.4 }} />
            <Input placeholder="Search by city or chapter name..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" style={{ borderColor: '#E4E0D8' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((ch, i) => (
              <motion.div key={ch.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="border bg-white p-7" style={{ borderColor: '#E4E0D8' }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg" style={{ color: '#111418' }}>{ch.name}</h3>
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 flex-shrink-0 ml-3"
                    style={{ backgroundColor: ch.status === 'Active' ? '#E6F4F5' : '#FAF8F3', color: ch.status === 'Active' ? '#00606B' : '#B8862B' }}>
                    {ch.status}
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="flex items-center gap-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#00606B' }} /> {ch.location}
                  </p>
                  <p className="flex items-center gap-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#00606B' }} /> {ch.meetings} · {ch.time}
                  </p>
                  <p className="flex items-center gap-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                    <Users className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#00606B' }} /> {ch.members}+ members
                  </p>
                </div>
                <Button asChild size="sm" className="text-xs font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/contact">Request to Attend <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
                </Button>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-16" style={{ color: '#2C3238', opacity: 0.5 }}>
                <p className="text-base mb-4">No chapters found matching your search.</p>
                <Link to="/start-chapter" className="text-sm underline" style={{ color: '#00606B' }}>
                  Don't see a chapter near you? Consider starting one.
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <ChapterSpotlight />

      <section className="py-20 px-6 lg:px-10 text-center" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#111418' }}>Don't See a Chapter Near You?</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
            Chapter leaders help organize meetings, recruit members, and represent The Link in their local market. If there isn't a chapter in your area, consider the chapter leader opportunity.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/start-chapter">Learn About Starting a Chapter <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}