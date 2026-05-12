import { FC } from 'react';
import { motion } from 'framer-motion';
import { MiniGame } from '../types';
import { StampBadge } from './StampBadge';
import { fadeIn, fadeInUp, staggerContainer } from '../motion/variants';

interface MissionBriefingProps {
  game: MiniGame;
  onBegin: () => void;
  onBack: () => void;
}

const flagMap: Record<string, { code: string; label: string }> = {
  IN: { code: 'in', label: 'India' },
  CA: { code: 'ca', label: 'Canada' },
  US: { code: 'us', label: 'United States' }
};

const renderLessonText = (text: string) => {
  const match = text.match(/^\[(IN|CA|US)\]\s*(.*)$/);
  if (!match) return text;

  const country = flagMap[match[1]];
  return (
    <>
      <img
        src={`https://flagcdn.com/w40/${country.code}.png`}
        alt={country.label}
        className="mr-2 inline-block h-3.5 w-5 rounded-[1px] border border-black/40 object-cover align-[-2px] shadow-sm"
      />
      {match[2]}
    </>
  );
};

export const MissionBriefing: FC<MissionBriefingProps> = ({ game, onBegin, onBack }) => {
  const isVerificationLab = game.id === 'verification-lab';

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative flex-1 overflow-hidden rounded-xl border border-amazon-orange/20 bg-black/20 p-5 shadow-[inset_0_0_40px_rgba(255,153,0,0.04)]"
    >
      <div className="pointer-events-none absolute right-4 top-5 opacity-20 sm:right-8 sm:top-8">
        <StampBadge text="CLASSIFIED" color="orange" className="scale-125 sm:scale-150" />
      </div>

      <div className="relative z-10 flex min-h-full flex-col">
        <div className="mb-6">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amazon-orange px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-amazon-darker">
            <i className="fa-solid fa-lock" aria-hidden="true"></i>
            Mission Briefing
          </span>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            {game.title}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-amazon-orange">
            {game.badge}
          </p>
          <p className="mt-5 max-w-3xl text-base italic leading-relaxed text-gray-400 md:text-lg">
            "{game.description}"
          </p>
        </div>

        <div className="mb-6 border-t border-dashed border-amazon-orange/40"></div>

        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
            <i
              className={`fa-solid ${isVerificationLab ? 'fa-clipboard-check' : 'fa-key'} text-amazon-orange`}
              aria-hidden="true"
            ></i>
            {isVerificationLab ? 'Verification Checklist' : 'Key Intelligence'}
          </h3>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-3"
          >
            {game.lessons.map((lesson, index) => (
              <motion.article
                key={`${game.id}-lesson-${index}`}
                variants={fadeInUp}
                className={`${
                  isVerificationLab
                    ? 'flex gap-4 rounded-lg border border-white/10 bg-black/35 p-4'
                    : 'rounded-lg border border-white/10 border-l-4 border-l-amazon-orange bg-black/40 p-4'
                }`}
              >
                {isVerificationLab ? (
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-amazon-orange/70 bg-amazon-orange/10 text-amazon-orange">
                    <i className={lesson.icon} aria-hidden="true"></i>
                  </div>
                ) : (
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amazon-orange/10 text-amazon-orange">
                    <i className={lesson.icon} aria-hidden="true"></i>
                  </div>
                )}

                <p className="font-mono text-xs leading-relaxed text-gray-300 md:text-sm">
                  {renderLessonText(lesson.text)}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <div className="mt-auto flex flex-col gap-3 border-t border-glass-border pt-6 sm:flex-row">
          <button onClick={onBegin} className="btn-primary text-base sm:text-lg">
            <i className="fa-solid fa-crosshairs" aria-hidden="true"></i>
            Begin Operation
          </button>
          <button onClick={onBack} className="btn-secondary text-base sm:text-lg">
            <i className="fa-solid fa-map" aria-hidden="true"></i>
            Return to Map
          </button>
        </div>
      </div>
    </motion.div>
  );
};
