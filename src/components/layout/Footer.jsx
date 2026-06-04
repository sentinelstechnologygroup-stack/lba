import { Link } from 'react-router-dom';
// Footer — Link Business Alliance

const footerLinks = [
  {
    title: 'Organization',
    links: [
      { label: 'About The Link', path: '/about' },
      { label: 'Success Stories', path: '/success-stories' },
      { label: 'Blog', path: '/blog' },
      { label: 'Partners', path: '/partners' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Membership Plans', path: '/membership' },
      { label: 'Join The Link', path: '/join' },
      { label: 'Ask About Membership', path: '/ask-about-membership' },
      { label: 'Member Readiness Quiz', path: '/member-readiness-quiz' },
      { label: 'List Your Business', path: '/list-your-business' },
    ],
  },
  {
    title: 'Chapters & Events',
    links: [
      { label: 'Find a Chapter', path: '/find-chapter' },
      { label: 'Start a Chapter', path: '/start-chapter' },
      { label: 'Chapter Inquiry', path: '/chapter-inquiry' },
      { label: 'Events', path: '/events' },
      { label: 'Sponsor a Chapter', path: '/sponsor-inquiry' },
    ],
  },
  {
    title: 'Resources & Connect',
    links: [
      { label: 'Resource Library', path: '/resources' },
      { label: 'Education', path: '/education' },
      { label: 'Mentorship', path: '/mentorship' },
      { label: 'Marketplace', path: '/marketplace' },
      { label: 'Member Directory', path: '/directory' },
      { label: 'Request Introduction', path: '/request-introduction' },
      { label: 'Event RSVP', path: '/event-rsvp' },
      { label: 'Member Dashboard', path: '/member-dashboard' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Growth Case Studies', path: '/growth-case-studies' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111418', color: '#F7F5F0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">

        {/* Brand block */}
        <div className="mb-14 pb-10 border-b" style={{ borderColor: '#B8862B44' }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-start gap-5">
               {/* Logo on white pill so it reads on dark background */}
               <div className="bg-white rounded px-3 py-2 flex-shrink-0">
                 <img
                   src="/assets/link-business-alliance-logo.png"
                   alt="Link Business Alliance"
                   className="h-16 w-auto"
                 />
               </div>
               <div className="pt-1">
                 <p className="font-semibold text-sm tracking-wide" style={{ color: '#F7F5F0' }}>Link Business Alliance</p>
                 <p className="text-xs mt-0.5" style={{ color: '#B8862B' }}>The Link</p>
                 <p className="text-xs mt-2 max-w-xs leading-relaxed" style={{ color: '#F7F5F0', opacity: 0.45 }}>
                   Business owners should not have to build alone.
                 </p>
               </div>
             </div>
            <div className="flex flex-col gap-1 text-xs" style={{ color: '#F7F5F0', opacity: 0.4 }}>
              <span>info@linkbusinessalliance.com</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase mb-5 font-semibold" style={{ color: '#B8862B' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm transition-colors"
                      style={{ color: '#F7F5F0', opacity: 0.5 }}
                      onMouseEnter={e => e.target.style.opacity = 1}
                      onMouseLeave={e => e.target.style.opacity = 0.5}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#ffffff10' }}>
          <p className="text-xs" style={{ color: '#F7F5F0', opacity: 0.3 }}>
            © {new Date().getFullYear()} Link Business Alliance. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#F7F5F0', opacity: 0.25 }}>
            Membership does not guarantee leads, referrals, or business outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}