import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const levelConfig = {
  'Exclusive Category Partner': {
    badgeBg: '#FDF5E6', badgeColor: '#B8862B',
    borderTop: '3px solid #B8862B', border: '1px solid #B8862B55',
    accentColor: '#B8862B',
  },
  'Category Member': {
    badgeBg: '#E6F4F5', badgeColor: '#00606B',
    borderTop: '3px solid #00606B', border: '1px solid #E4E0D8',
    accentColor: '#00606B',
  },
  'Visibility Member': {
    badgeBg: '#F3EFE7', badgeColor: '#2C3238',
    borderTop: '2px solid #2C3238', border: '1px solid #E4E0D8',
    accentColor: '#2C3238',
  },
  'Community Member': {
    badgeBg: '#F7F5F0', badgeColor: '#888',
    borderTop: '1px solid #E4E0D8', border: '1px solid #E4E0D8',
    accentColor: '#888',
  },
};

export default function MarketplaceCard({ member, index = 0 }) {
  const cfg = levelConfig[member.membershipLevel] || levelConfig['Community Member'];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: Math.min(index * 0.05, 0.3) }}
      className="bg-white flex flex-col"
      style={{ borderTop: cfg.borderTop, border: cfg.border }}>

      {/* Header */}
      <div className="p-6 border-b" style={{ borderColor: '#F3EFE7' }}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading font-bold text-base leading-snug" style={{ color: '#111418' }}>
            {member.businessName}
          </h3>
          <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 flex-shrink-0 whitespace-nowrap"
            style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeColor }}>
            {member.membershipLevel === 'Exclusive Category Partner' ? 'Exclusive Partner' : member.membershipLevel}
          </span>
        </div>
        <p className="text-xs mb-3" style={{ color: cfg.accentColor, fontWeight: 600 }}>{member.category}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: '#2C3238', opacity: 0.6 }}>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {member.city}</span>
          <span>{member.chapter}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 space-y-4">
        <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.75 }}>
          {member.shortDescription}
        </p>
        <div className="space-y-2.5">
          {member.whoTheyHelp && (
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: cfg.accentColor }}>Who We Help</p>
              <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{member.whoTheyHelp}</p>
            </div>
          )}
          {member.bestIntroduction && (
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: cfg.accentColor }}>Best Introduction</p>
              <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{member.bestIntroduction}</p>
            </div>
          )}
          <div>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: cfg.accentColor }}>Service Area</p>
            <p className="text-xs" style={{ color: '#2C3238', opacity: 0.65 }}>{member.serviceArea}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-3 border-t space-y-1.5" style={{ borderColor: '#F3EFE7' }}>
          <p className="flex items-center gap-2 text-xs" style={{ color: '#2C3238', opacity: 0.55 }}>
            <Phone className="w-3 h-3 flex-shrink-0" style={{ color: cfg.accentColor }} /> {member.phone}
          </p>
          <p className="flex items-center gap-2 text-xs" style={{ color: '#2C3238', opacity: 0.55 }}>
            <Mail className="w-3 h-3 flex-shrink-0" style={{ color: cfg.accentColor }} /> {member.email}
          </p>
          <p className="flex items-center gap-2 text-xs" style={{ color: '#2C3238', opacity: 0.55 }}>
            <Globe className="w-3 h-3 flex-shrink-0" style={{ color: cfg.accentColor }} /> {member.website}
          </p>
          <p className="flex items-center gap-2 text-xs" style={{ color: '#2C3238', opacity: 0.55 }}>
            <Users className="w-3 h-3 flex-shrink-0" style={{ color: cfg.accentColor }} /> {member.ownerName}
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="p-5 border-t grid grid-cols-2 gap-2" style={{ borderColor: '#F3EFE7' }}>
        <Button asChild size="sm" className="text-[10px] font-semibold"
          style={{ backgroundColor: cfg.accentColor, color: '#fff' }}>
          <Link to="/request-introduction">Request Intro</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="text-[10px] font-semibold"
          style={{ borderColor: '#E4E0D8', color: '#2C3238' }}>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </motion.div>
  );
}