import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnswerRecord } from '../types';
import { fadeInUp, staggerContainer } from '../motion/variants';

interface AnswerReviewProps {
  history: AnswerRecord[];
  visible: boolean;
  onToggle: () => void;
}

export const AnswerReview: FC<AnswerReviewProps> = ({ history, visible, onToggle }) => {
  const correctCount = history.filter(record => record.isCorrect).length;

  return (
    <div className="mb-8 rounded-2xl border border-glass-border bg-black/30 p-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={visible}
      >
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amazon-orange/15 text-amazon-orange">
            <i className="fa-solid fa-clipboard-check"></i>
          </span>
          <span>
            <span className="block text-sm font-bold uppercase tracking-widest text-amazon-orange">
              Review Answer Breakdown
            </span>
            <span className="text-xs text-gray-400">
              {correctCount}/{history.length} Correct
            </span>
          </span>
        </span>
        <i className={`fa-solid fa-chevron-down text-gray-400 transition-transform ${visible ? 'rotate-180' : ''}`}></i>
      </button>

      {visible && (
        <motion.div
          className="mt-5 flex flex-col gap-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
        >
          {history.map((record, index) => (
            <motion.article
              key={`${record.question}-${index}`}
              variants={fadeInUp}
              className="rounded-xl border border-white/10 bg-glass-bg p-4"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                    Case {index + 1}
                  </p>
                  <h4 className="font-outfit text-lg font-bold leading-snug text-white">{record.question}</h4>
                </div>
                <span className={`shrink-0 rounded px-2.5 py-1 text-[10px] font-black uppercase tracking-widest ${record.isCorrect ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                  {record.isCorrect ? 'Correct' : 'Missed'}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-gray-400">{record.context}</p>

              <div className="mb-4 flex flex-col gap-2">
                {record.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === record.correctAnswerIndex;
                  const isUserWrong = optionIndex === record.userAnswerIndex && !record.isCorrect;
                  const optionClass = isCorrect
                    ? 'border-green-500/60 bg-green-500/10 text-green-100'
                    : isUserWrong
                      ? 'border-red-500/60 bg-red-500/10 text-red-100'
                      : 'border-white/10 bg-black/20 text-gray-300';

                  return (
                    <div key={`${option.title}-${optionIndex}`} className={`rounded-lg border p-3 ${optionClass}`}>
                      <div className="flex items-start gap-3">
                        <i className={`fa-solid mt-1 ${isCorrect ? 'fa-circle-check text-green-400' : isUserWrong ? 'fa-circle-xmark text-red-400' : 'fa-circle text-gray-600 text-[8px]'}`}></i>
                        <div className={isUserWrong ? 'line-through decoration-red-400 decoration-2' : ''}>
                          <strong className="font-outfit">{option.title}</strong>
                          <p className="text-xs opacity-80">{option.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-lg border border-amazon-orange/20 bg-amazon-orange/5 p-3 text-sm leading-relaxed text-gray-300">
                <i className="fa-solid fa-lightbulb mr-2 text-amazon-orange"></i>
                {record.explanation}
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </div>
  );
};
