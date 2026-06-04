import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Circle, RotateCcw } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const pc = pageContent.readinessQuiz;

const questions = [
  { id: 1, text: 'Can you clearly describe what your business does in one or two sentences?' },
  { id: 2, text: 'Do you know your main service category?' },
  { id: 3, text: 'Do you know who your ideal customer or best referral is?' },
  { id: 4, text: 'Do you have accurate contact information ready to share?' },
  { id: 5, text: 'Do you have a website, landing page, or basic online profile?' },
  { id: 6, text: 'Do you know your service area or market?' },
  { id: 7, text: 'Are you responsive when someone contacts you?' },
  { id: 8, text: 'Can another member easily explain when to refer or introduce you?' },
  { id: 9, text: 'Are your services, pricing, or next steps clear enough for a prospect to understand?' },
  { id: 10, text: 'Are you willing to participate in meetings, resources, or chapter activity?' },
];

const getResult = (score) => {
  if (score <= 3) return {
    label: 'Getting Started',
    desc: 'Your business has some groundwork to lay before membership will be most effective. Focus on clarifying your description, category, service area, and contact info first. The Link Community Membership is a great low-risk starting point.',
    color: '#888',
    bg: '#F7F5F0',
  };
  if (score <= 6) return {
    label: 'Almost Ready',
    desc: 'You have a solid foundation but a few clarity gaps that may limit how much value you get from visibility and introductions. Tighten your description, service area, and referral profile — then consider Visibility Membership.',
    color: '#B8862B',
    bg: '#FDF5E6',
  };
  if (score <= 8) return {
    label: 'Ready for Visibility',
    desc: 'Your business is clear and ready for member visibility. You are a good fit for Visibility or Category Membership. The Link can help you become easier to find, remember, and refer.',
    color: '#00606B',
    bg: '#E6F4F5',
  };
  return {
    label: 'Ready for Category Placement',
    desc: 'Your business is well-defined, easy to introduce, and ready for category positioning. Category Membership or Exclusive Category Partner placement may be right for you. Contact a chapter organizer to discuss availability.',
    color: '#00606B',
    bg: '#E6F4F5',
  };
};

export default function MemberReadinessQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const score = Object.values(answers).filter(Boolean).length;
  const result = getResult(score);
  const allAnswered = Object.keys(answers).length === questions.length;

  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div>
      <PageHero {...pc} />

      <section id="quiz" className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="quiz" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
                  Check every statement that applies to your business right now. Be honest — this is for your benefit, not a graded test.
                </p>

                <div className="space-y-3 mb-10">
                  {questions.map((q, i) => {
                    const checked = !!answers[q.id];
                    return (
                      <motion.button
                        key={q.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => toggle(q.id)}
                        className="w-full text-left p-5 border flex items-start gap-4 transition-all"
                        style={{
                          borderColor: checked ? '#00606B' : '#E4E0D8',
                          backgroundColor: checked ? '#E6F4F5' : '#fff',
                        }}
                      >
                        <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all"
                          style={{ borderColor: checked ? '#00606B' : '#E4E0D8', backgroundColor: checked ? '#00606B' : 'transparent' }}>
                          {checked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm font-medium" style={{ color: '#111418' }}>
                          <span className="font-heading mr-2" style={{ color: '#B8862B' }}>{i + 1}.</span>
                          {q.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Progress */}
                <div className="mb-8 p-5 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-semibold" style={{ color: '#111418' }}>Questions answered</span>
                    <span className="font-heading font-bold" style={{ color: '#B8862B' }}>{Object.keys(answers).length}/{questions.length}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#E4E0D8' }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%`, backgroundColor: '#00606B' }} />
                  </div>
                </div>

                <Button
                  onClick={() => setSubmitted(true)}
                  size="lg"
                  className="w-full font-semibold"
                  style={{ backgroundColor: '#00606B', color: '#fff', opacity: allAnswered ? 1 : 0.5 }}
                >
                  See My Readiness Result <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-center mt-3" style={{ color: '#2C3238', opacity: 0.4 }}>
                  You can answer all or some questions. Your result will reflect what you checked.
                </p>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="border p-8 mb-8" style={{ borderColor: result.color, borderTop: `3px solid ${result.color}`, backgroundColor: result.bg }}>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: result.color }}>Your Readiness Result</p>
                  <h2 className="font-heading font-bold text-2xl mb-2" style={{ color: '#111418' }}>{result.label}</h2>
                  <p className="text-sm font-semibold mb-1" style={{ color: result.color }}>{score} out of {questions.length} items checked</p>
                  <p className="text-sm leading-relaxed mt-4" style={{ color: '#2C3238', opacity: 0.75 }}>{result.desc}</p>
                </div>

                {/* Checked summary */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: '#2C3238', opacity: 0.5 }}>Your Responses</h3>
                  <div className="space-y-2">
                    {questions.map((q) => (
                      <div key={q.id} className="flex items-start gap-3 text-sm py-2 border-b" style={{ borderColor: '#F3EFE7' }}>
                        {answers[q.id]
                          ? <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                          : <Circle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E4E0D8' }} />
                        }
                        <span style={{ color: answers[q.id] ? '#111418' : '#2C3238', opacity: answers[q.id] ? 1 : 0.45 }}>{q.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                    <Link to="/ask-about-membership">Ask About Membership <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                    <Link to="/list-your-business">List Your Business</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                    <Link to="/contact">Talk to a Chapter Organizer</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                    <Link to="/resources">View Resources</Link>
                  </Button>
                </div>

                <button onClick={reset} className="flex items-center gap-2 text-xs mx-auto mt-2 hover:opacity-70 transition-opacity"
                  style={{ color: '#00606B' }}>
                  <RotateCcw className="w-3 h-3" /> Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs leading-relaxed text-center" style={{ color: '#2C3238', opacity: 0.45 }}>
            This quiz is a self-assessment tool only. Results are not a guarantee of membership eligibility, category availability, lead volume, referrals, or business outcomes. Final membership level is subject to availability, chapter approval, and organizer review.
          </p>
        </div>
      </section>
    </div>
  );
}