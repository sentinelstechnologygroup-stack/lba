import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  User, BookOpen, Calendar, MapPin, ArrowRight,
  LayoutDashboard, Star, FileText, Users
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

const placeholderTiles = [
  {
    icon: User,
    label: 'My Profile',
    desc: 'View and update your member profile, business description, service area, and contact information.',
    cta: 'Edit Profile',
    route: '/contact',
    color: '#00606B',
    bg: '#E6F4F5',
  },
  {
    icon: Star,
    label: 'My Membership',
    desc: 'View your current membership level, category status, and chapter assignment.',
    cta: 'View Membership',
    route: '/membership',
    color: '#B8862B',
    bg: '#FDF5E6',
  },
  {
    icon: Calendar,
    label: 'Upcoming Events',
    desc: 'View events for your chapter, RSVP, and keep track of meetings and sessions.',
    cta: 'View Events',
    route: '/events',
    color: '#00606B',
    bg: '#E6F4F5',
  },
  {
    icon: MapPin,
    label: 'My Chapter',
    desc: 'Access your chapter details, chapter contacts, and local meeting information.',
    cta: 'Find Chapter',
    route: '/find-chapter',
    color: '#B8862B',
    bg: '#FDF5E6',
  },
  {
    icon: BookOpen,
    label: 'Resources',
    desc: 'Browse checklists, guides, worksheets, and tools available for your membership level.',
    cta: 'Browse Resources',
    route: '/resources',
    color: '#00606B',
    bg: '#E6F4F5',
  },
  {
    icon: FileText,
    label: 'My Directory Listing',
    desc: 'View and manage how your business appears in the Link directory and marketplace.',
    cta: 'View Directory',
    route: '/directory',
    color: '#2C3238',
    bg: '#F3EFE7',
  },
  {
    icon: Users,
    label: 'Member Directory',
    desc: 'Search and connect with other Link members by category, chapter, and service area.',
    cta: 'Search Members',
    route: '/directory',
    color: '#00606B',
    bg: '#E6F4F5',
  },
  {
    icon: LayoutDashboard,
    label: 'Marketplace',
    desc: 'Explore the member services marketplace to find providers and business support.',
    cta: 'Browse Marketplace',
    route: '/marketplace',
    color: '#B8862B',
    bg: '#FDF5E6',
  },
];

export default function MemberDashboard() {
  return (
    <div>
      <PageHero
        eyebrow="Member Dashboard"
        h1="Welcome to Your Link Dashboard."
        subtext="Access your profile, chapter events, resources, directory listing, and member tools from one place."
        heroImage="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1920&q=80"
        heroAlt="Business owner at a professional workstation reviewing member resources"
        primaryCta={{ label: 'Browse Resources', route: '/resources' }}
        secondaryCta={{ label: 'View Events', route: '/events' }}
      />

      {/* Placeholder Notice */}
      <section className="py-6 px-6 lg:px-10 border-b" style={{ backgroundColor: '#FDF5E6', borderColor: '#E4E0D8' }}>
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Star className="w-4 h-4 flex-shrink-0" style={{ color: '#B8862B' }} />
          <p className="text-xs leading-relaxed" style={{ color: '#2C3238' }}>
            <strong style={{ color: '#111418' }}>Placeholder Page:</strong> The member dashboard is a planned feature. This page is a structural placeholder for export and development. Dashboard functionality will be connected when the member portal is built.
          </p>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Member Tools</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
              Quick Access to Member Resources
            </h2>
            <p className="text-sm leading-relaxed max-w-2xl mt-3" style={{ color: '#2C3238', opacity: 0.65 }}>
              The full dashboard will provide personalized access to your profile, events, chapter tools, and resources. For now, use the links below to navigate to each section.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {placeholderTiles.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <motion.div key={tile.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-white border p-6 flex flex-col" style={{ borderColor: '#E4E0D8', borderTop: `2px solid ${tile.color}` }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ backgroundColor: tile.bg }}>
                    <Icon className="w-4 h-4" style={{ color: tile.color }} />
                  </div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: '#111418' }}>{tile.label}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#2C3238', opacity: 0.65 }}>{tile.desc}</p>
                  <Button asChild size="sm" variant="outline" className="mt-5 text-xs font-semibold w-full"
                    style={{ borderColor: '#E4E0D8', color: tile.color }}>
                    <Link to={tile.route}>{tile.cta} <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 text-center" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#F7F5F0' }}>
              Need Help Getting Started?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Contact your chapter organizer, attend an event, or browse resources to get the most from your Link membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/contact">Contact The Link <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}