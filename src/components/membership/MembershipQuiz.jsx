import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, RotateCcw } from 'lucide-react';

const questions = [
  {
    id: 'stage',
    q: 'Which best describes where your business is right now?',
    options: [
      { label: 'Just starting out or planning to launch', value: 'new' },
      { label: 'Been operating 1–3 years, building momentum', value: 'growing' },
      { label: 'Established business, ready to expand', value: 'established' },
      { label: 'I want to help build or sponsor a chapter', value: 'partner' },
    ],
  },
  {
    id: 'goal',
    q: 'What is your most important goal right now?',
    options: [
      { label: 'Meet other local owners and learn from them', value: 'connect' },
      { label: 'Make sure people in the market know my business', value: 'visibility' },
      { label: 'Get positioned in my category and be findable', value: 'category' },
      { label: 'Take a leadership or sponsor position', value: 'lead' },
    ],
  },
  {
    id: 'budget',
    q: 'What is your monthly membership budget?',
    options: [
      { label: 'Under $25 — I want to start affordable', value: 'low' },
      { label: '$25–$75 — I can invest at the right level', value: 'mid' },
      { label: '$150+ — I am serious about positioning', value: 'high' },
      { label: 'Flexible — let\'s talk about the right fit', value: 'flex' },
    ],
  },
];

const results = {
  community: {
    tier: 'Community Member',
    price: '$10/month',
    why: 'Based on your answers, starting with Community Membership gives you affordable access to meetings, resources, and other local owners — without overcommitting. It is a low-risk way to see what The Link offers.',
    cta: 'Get Started',
  },
  visibility: {
    tier: 'Visibility Member',
    price: '$25/month',
    why: 'You are ready to be seen and understood. Visibility Membership improves your profile, adds your contact and service details, and gives other members a clear picture of what your business does.',
    cta: 'Apply or Inquire',
  },
  category: {
    tier: 'Category Member',
    price: '$50/month',
    why: 'You want clear category positioning and eligibility for relevant opportunities. Category Membership gets your business properly placed in the directory so members and organizers know where you fit.',
    cta: 'Apply Now',
  },
  partner: {
    tier: 'Exclusive Category Partner or Chapter Partner',
    price: 'Starting at $150/month or Custom',
    why: 'You are ready for a stronger role — primary category positioning, chapter partnership, or sponsorship. These tiers require approval and are built for businesses ready to invest in visibility and community leadership.',
    cta: 'Talk to a Chapter Organizer',
  },
};

function getResult(answers) {
  const { stage, goal, budget } = answers;
  if (stage === 'partner' || goal === 'lead' || budget === 'flex') return 'partner';
  if (budget === 'high' || (goal === 'category' && stage === 'established')) return 'partner';
  if (goal === 'category' || stage === 'established') return 'category';
  if (goal === 'visibility' || stage === 'growing' || budget === 'mid') return 'visibility';
  return 'community';
}

export default function MembershipQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const handleAnswer = (id, value) => {
    const updated = { ...answers, [id]: value };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setDone(false); };

  const result = done ? results[getResult(answers)] : null;
  const current = questions[step];

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Find Your Fit</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl" style={{ color: '#F7F5F0' }}>
            Which Membership Level Is Right for You?
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: '#F7F5F0', opacity: 0.5 }}>
            Answer 3 quick questions to get a starting recommendation. This does not create an account or obligation.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="mb-2 text-xs" style={{ color: '#F7F5F0', opacity: 0.35 }}>
                Question {step + 1} of {questions.length}
              </div>
              <div className="w-full h-1 mb-8 rounded-full overflow-hidden" style={{ backgroundColor: '#ffffff15' }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${((step) / questions.length) * 100}%`, backgroundColor: '#00606B' }} />
              </div>
              <h3 className="font-semibold text-lg mb-6" style={{ color: '#F7F5F0' }}>{current.q}</h3>
              <div className="space-y-3">
                {current.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(current.id, opt.value)}
                    className="w-full text-left px-5 py-4 border text-sm font-medium transition-all hover:border-teal-500"
                    style={{ borderColor: '#ffffff20', color: '#F7F5F0', backgroundColor: '#ffffff08' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#00606B'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#ffffff20'}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border p-8" style={{ borderColor: '#00606B', backgroundColor: '#ffffff08' }}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#00606B' }}>Suggested Starting Point</p>
              <h3 className="font-heading font-bold text-2xl mb-1" style={{ color: '#F7F5F0' }}>{result.tier}</h3>
              <p className="text-sm mb-6" style={{ color: '#B8862B' }}>{result.price}</p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#F7F5F0', opacity: 0.65 }}>{result.why}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/contact">{result.cta} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button size="sm" variant="ghost" onClick={reset} className="gap-2 text-xs" style={{ color: '#F7F5F0', opacity: 0.5 }}>
                  <RotateCcw className="w-3 h-3" /> Start Over
                </Button>
              </div>
              <p className="mt-5 text-xs" style={{ color: '#F7F5F0', opacity: 0.3 }}>
                This is a recommendation only. Final membership level is subject to availability, approval, and chapter requirements.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}