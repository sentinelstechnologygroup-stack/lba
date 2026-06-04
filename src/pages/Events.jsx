import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';
import RoundtableTopics from '@/components/events/RoundtableTopics';
import { sampleEvents, EVENT_TYPES } from '@/data/sampleEvents';

const locationTypeStyle = {
  'In-Person': { bg: '#E6F4F5', color: '#00606B' },
  'Virtual': { bg: '#FDF5E6', color: '#B8862B' },
  'Hybrid': { bg: '#F3EFE7', color: '#2C3238' },
};

export default function Events() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? sampleEvents : sampleEvents.filter(e => e.type === filter);

  return (
    <div>
      <PageHero {...pageContent.events} />

      {/* Filter + Events */}
      <section id="events-list" className="py-16 lg:py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-4">
              <div>
                <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: '#B8862B' }} />
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Upcoming Events</p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
                  Events Across Link Chapters
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <Button asChild size="sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/event-rsvp">RSVP for an Event <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
                </Button>
                <Button asChild size="sm" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  <Link to="/sponsor-inquiry">Sponsor an Event</Link>
                </Button>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#B8862B', fontStyle: 'italic' }}>
              ★ Sample event preview — dates are illustrative. Contact your local chapter for confirmed schedules.
            </p>
          </motion.div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {EVENT_TYPES.map(t => (
              <Button key={t} size="sm" onClick={() => setFilter(t)} className="text-xs font-semibold"
                style={filter === t
                  ? { backgroundColor: '#00606B', color: '#fff' }
                  : { backgroundColor: 'transparent', color: '#111418', border: '1px solid #E4E0D8' }
                }>
                {t}
              </Button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {filtered.map((ev, i) => {
              const locStyle = locationTypeStyle[ev.locationType] || locationTypeStyle['In-Person'];
              return (
                <motion.div key={ev.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="bg-white border flex flex-col" style={{ borderColor: '#E4E0D8' }}>

                  {/* Card top */}
                  <div className="flex items-start justify-between gap-3 px-6 pt-5 pb-3 border-b" style={{ borderColor: '#F3EFE7' }}>
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1" style={{ backgroundColor: '#E6F4F5', color: '#00606B' }}>
                      {ev.type}
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1" style={{ backgroundColor: locStyle.bg, color: locStyle.color }}>
                      {ev.locationType}
                    </span>
                  </div>

                  <div className="px-6 py-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-base mb-1 leading-snug" style={{ color: '#111418' }}>{ev.title}</h3>
                    <p className="text-xs mb-3" style={{ color: '#00606B' }}>{ev.chapter} · {ev.market}</p>

                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4 text-xs" style={{ color: '#2C3238', opacity: 0.55 }}>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {ev.dateLabel} — {ev.timeLabel}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {ev.locationDetail}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3 h-3" /> {ev.audience}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#2C3238', opacity: 0.65 }}>{ev.shortDescription}</p>

                    <div className="mt-5 flex gap-2">
                      <Button asChild size="sm" className="flex-1 text-xs font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                        <Link to="/event-rsvp">RSVP <ArrowRight className="w-3 h-3 ml-1" /></Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="flex-1 text-xs" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                        <Link to="/contact">Ask About This Event</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 border" style={{ borderColor: '#E4E0D8' }}>
              <p className="font-semibold text-base mb-2" style={{ color: '#111418' }}>No events found for this type.</p>
              <p className="text-sm mb-6" style={{ color: '#2C3238', opacity: 0.55 }}>Try selecting All or a different event type.</p>
              <Button size="sm" onClick={() => setFilter('All')} style={{ backgroundColor: '#00606B', color: '#fff' }}>Show All Events</Button>
            </div>
          )}

          {/* RSVP CTA */}
          <div className="border p-7 text-center" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
            <p className="font-heading font-bold text-lg mb-2" style={{ color: '#111418' }}>Ready to Attend an Event?</p>
            <p className="text-sm mb-5" style={{ color: '#2C3238', opacity: 0.65 }}>Submit an RSVP and we will follow up with event details and confirmation.</p>
            <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              <Link to="/event-rsvp">RSVP for a Link Event <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <RoundtableTopics />

      {/* Event Type Descriptions */}
      <section className="py-16 lg:py-20 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#111418' }}>Types of Link Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { type: 'Owner Roundtable', desc: 'Small-group discussions on real business topics — hiring, pricing, client issues, operations, and cash flow. Owner-led, practical, and honest.' },
              { type: 'Chapter Meeting', desc: 'Regular structured meeting for chapter members. Includes introductions, updates, an education segment, and open networking.' },
              { type: 'Lunch-and-Learn', desc: 'Focused education session held over lunch. Practical content from owners who have real experience in the topic.' },
              { type: 'Resource Session', desc: 'Structured sessions walking members through a specific resource, tool, or guide — referral readiness, profile setup, vendor selection, and more.' },
              { type: 'Member Introduction Event', desc: 'Structured event where members meet in small groups to learn about each other\'s businesses and build genuine connections.' },
              { type: 'Sponsor Event', desc: 'Events featuring strategic partners and sponsors where members can explore vendor relationships and local business partnerships.' },
              { type: 'Start a Chapter Info Session', desc: 'Informational sessions for local leaders interested in starting a Link chapter in their market.' },
              { type: 'Education Session', desc: 'Member-focused education on a specific business topic — led by an owner or operator with direct experience in the subject.' },
            ].map((item, i) => (
              <motion.div key={item.type} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white border p-5" style={{ borderColor: '#E4E0D8' }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#111418' }}>{item.type}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-10 text-center" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#F7F5F0' }}>
              Come to a Link Event.
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              The best way to understand The Link is to attend an event. Chapter meetings, roundtables, and education sessions are open to members and guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/event-rsvp">RSVP for an Event <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/find-chapter">Find a Chapter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}