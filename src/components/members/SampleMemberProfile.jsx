import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Globe, Phone, Mail, ArrowRight } from 'lucide-react';

const profile = {
  name: 'Marcus T.',
  business: 'Summit Plumbing & HVAC',
  category: 'Plumbing & HVAC',
  tier: 'Category Member',
  location: 'The Woodlands, TX',
  area: 'Montgomery County · Greater Houston',
  since: 'Member since 2024',
  tagline: 'Residential and commercial plumbing, water heaters, and HVAC service for homeowners and property managers.',
  about: 'Summit Plumbing & HVAC serves homeowners and property managers across Montgomery County and the Greater Houston area. With over 12 years in the trades, Marcus specializes in full-service plumbing repairs, water heater installation and replacement, and basic HVAC maintenance.',
  services: ['Residential Plumbing Repairs', 'Water Heater Installation & Replacement', 'Drain Cleaning', 'HVAC Maintenance', 'Commercial Light Plumbing'],
  ideal: 'Homeowners, property managers, and small commercial property owners in Montgomery County and surrounding areas.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
};

const tierColors = { 'Community Member': '#888', 'Visibility Member': '#2C3238', 'Category Member': '#00606B', 'Exclusive Category Partner': '#B8862B' };

export default function SampleMemberProfile() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Sample Layout</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            What a Member Profile Looks Like
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            Member profiles help other owners understand who you are, what you do, and how to reach you. A complete profile makes you easier to remember, contact, and refer.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white border" style={{ borderColor: '#E4E0D8' }}>
          {/* Header */}
          <div className="p-8 border-b flex flex-col sm:flex-row gap-6 items-start" style={{ borderColor: '#E4E0D8' }}>
            <img src={profile.image} alt={profile.name} className="w-20 h-20 object-cover rounded-full flex-shrink-0" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-heading font-bold text-xl" style={{ color: '#111418' }}>{profile.business}</h3>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5"
                  style={{ backgroundColor: '#E6F4F5', color: tierColors[profile.tier] || '#00606B' }}>
                  {profile.tier}
                </span>
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: '#00606B' }}>{profile.category}</p>
              <p className="text-sm leading-relaxed max-w-xl mb-3" style={{ color: '#2C3238', opacity: 0.65 }}>{profile.tagline}</p>
              <div className="flex flex-wrap gap-4 text-xs" style={{ color: '#2C3238', opacity: 0.5 }}>
                <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {profile.location}</span>
                <span>{profile.area}</span>
                <span>{profile.since}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* About */}
            <div className="p-7 border-r border-b" style={{ borderColor: '#E4E0D8' }}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: '#00606B' }}>About the Business</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{profile.about}</p>
            </div>

            {/* Services */}
            <div className="p-7 border-b" style={{ borderColor: '#E4E0D8' }}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: '#00606B' }}>Services</h4>
              <ul className="space-y-2">
                {profile.services.map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#00606B' }} />
                    <span style={{ color: '#111418' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Customer */}
            <div className="p-7 border-r" style={{ borderColor: '#E4E0D8' }}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: '#00606B' }}>Ideal Customer</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{profile.ideal}</p>
            </div>

            {/* Contact */}
            <div className="p-7">
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: '#00606B' }}>Contact</h4>
              <div className="space-y-2 text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" style={{ color: '#00606B' }} /> (example) 281-555-0100</p>
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" style={{ color: '#00606B' }} /> (example) info@summitplumbing.com</p>
                <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" style={{ color: '#00606B' }} /> summitplumbing.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-5 text-xs text-center" style={{ color: '#2C3238', opacity: 0.4 }}>
          This is a sample profile layout. Member details are fictional. Real profiles are created by members during onboarding.
        </p>

        <div className="mt-8 text-center">
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/membership">See Membership Options <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}