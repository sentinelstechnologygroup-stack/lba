import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', path: '/about' },
  {
    label: 'Membership', path: '/membership',
    children: [
      { label: 'Membership Plans', path: '/membership' },
      { label: 'Join The Link', path: '/join' },
      { label: 'Member Readiness Quiz', path: '/member-readiness-quiz' },
      { label: 'Success Stories', path: '/success-stories' },
    ]
  },
  {
    label: 'Chapters', path: '/find-chapter',
    children: [
      { label: 'Find a Chapter', path: '/find-chapter' },
      { label: 'Start a Chapter', path: '/start-chapter' },
    ]
  },
  {
    label: 'Events', path: '/events',
    children: [
      { label: 'View All Events', path: '/events' },
      { label: 'RSVP for an Event', path: '/event-rsvp' },
    ]
  },
  { label: 'Directory', path: '/directory' },
  { label: 'Marketplace', path: '/marketplace' },
  {
    label: 'Resources', path: '/resources',
    children: [
      { label: 'Resource Library', path: '/resources' },
      { label: 'Education', path: '/education' },
      { label: 'Mentorship', path: '/mentorship' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Growth Case Studies', path: '/growth-case-studies' },
    ]
  },
  { label: 'Dashboard', path: '/member-dashboard' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E4E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/assets/link-business-alliance-logo.png" alt="Link Business Alliance" className="h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-[11px] font-medium tracking-wide uppercase transition-colors flex items-center gap-1 ${
                    location.pathname === link.path
                      ? 'text-teal'
                      : 'text-charcoal hover:text-teal'
                  }`}
                  style={{ color: location.pathname === link.path ? '#00606B' : undefined }}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                <AnimatePresence>
                  {link.children && hoveredMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 bg-white border border-[#E4E0D8] shadow-lg py-2 min-w-[210px]"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-[11px] font-medium tracking-wide text-charcoal/70 hover:text-teal hover:bg-offwhite transition-colors"
                          style={{ '--tw-text-opacity': 1 }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="text-[11px] font-medium tracking-wide uppercase hover:text-teal transition-colors"
              style={{ color: '#111418', opacity: 0.55 }}
            >
              Login
            </Link>
            <Link
              to="/find-chapter"
              className="text-[11px] font-medium tracking-wide uppercase hover:text-teal transition-colors"
              style={{ color: '#111418', opacity: 0.65 }}
            >
              Find a Chapter
            </Link>
            <Button
              asChild
              size="sm"
              className="text-[11px] tracking-wide uppercase font-semibold px-5"
              style={{ backgroundColor: '#00606B', color: '#fff' }}
            >
              <Link to="/join">Join The Link</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-[#E4E0D8] bg-white overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm font-medium tracking-wide text-charcoal"
                    style={{ color: '#111418' }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 border-l-2 ml-1 mb-2" style={{ borderColor: '#E4E0D8' }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs text-charcoal/60 hover:text-teal transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2 border-t border-[#E4E0D8]">
                <Link
                  to="/find-chapter"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium text-center border border-[#E4E0D8] rounded"
                  style={{ color: '#111418' }}
                >
                  Find a Chapter
                </Link>
                <Button
                  asChild
                  className="w-full text-xs tracking-wide uppercase"
                  style={{ backgroundColor: '#00606B', color: '#fff' }}
                >
                  <Link to="/join" onClick={() => setMobileOpen(false)}>Join The Link</Link>
                </Button>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-xs font-medium text-center"
                  style={{ color: '#111418', opacity: 0.5 }}
                >
                  Member Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}