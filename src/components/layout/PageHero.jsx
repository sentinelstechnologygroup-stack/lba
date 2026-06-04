import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * PageHero — reusable hero for all non-home pages.
 * Driven by pageContent.js entries.
 *
 * Props:
 *   eyebrow, h1, subtext, heroImage, heroAlt,
 *   primaryCta, secondaryCta, tertiaryCta,
 *   overlayStrength ('default' | 'light' | 'strong')
 */
export default function PageHero({
  eyebrow,
  h1,
  subtext,
  heroImage,
  heroAlt = '',
  primaryCta,
  secondaryCta,
  tertiaryCta,
  overlayStrength = 'default',
}) {
  const overlayMap = {
    light: 'linear-gradient(135deg, #111418dd 30%, #11141899 65%, #11141866 100%)',
    default: 'linear-gradient(135deg, #111418ee 40%, #111418bb 70%, #11141888 100%)',
    strong: 'linear-gradient(135deg, #111418 50%, #111418ee 80%, #111418cc 100%)',
  };
  const overlay = overlayMap[overlayStrength] || overlayMap.default;
  const imgOpacity = overlayStrength === 'light' ? 'opacity-50' : overlayStrength === 'strong' ? 'opacity-25' : 'opacity-35';

  return (
    <section className="relative py-28 lg:py-36 flex items-center overflow-hidden" style={{ backgroundColor: '#111418', minHeight: '440px' }}>
      {/* Hero image */}
      {heroImage && (
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={heroAlt}
            className={`w-full h-full object-cover ${imgOpacity}`}
          />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="h-0.5 w-10 mb-8" style={{ backgroundColor: '#B8862B' }} />
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-4xl" style={{ color: '#F7F5F0' }}>
            {h1}
          </h1>
          {subtext && (
            <p className="mt-6 text-base lg:text-lg leading-relaxed max-w-2xl" style={{ color: '#F7F5F0', opacity: 0.65 }}>
              {subtext}
            </p>
          )}

          {(primaryCta || secondaryCta || tertiaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-3 flex-wrap">
              {primaryCta && (
                <Button asChild size="lg" className="font-semibold text-sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to={primaryCta.route}>
                    {primaryCta.label} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="outline" className="font-medium text-sm"
                  style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                  <Link to={secondaryCta.route}>{secondaryCta.label}</Link>
                </Button>
              )}
              {tertiaryCta && (
                <Button asChild size="lg" variant="ghost" className="font-medium text-sm"
                  style={{ color: '#B8862B' }}>
                  <Link to={tertiaryCta.route}>{tertiaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}