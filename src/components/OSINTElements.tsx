import { FC } from 'react';

const formatElapsedTime = (milliseconds: number) => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
};

interface ResearchPromptProps {
  question: string;
}

export const ResearchPrompt: FC<ResearchPromptProps> = ({ question }) => {
  const institutionName = question.match(/'([^']+)'/)?.[1] ?? question;
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(institutionName)}`;

  return (
    <div className="mb-6 rounded-xl border border-osint-border bg-osint-bg p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-osint-accent/15 text-osint-accent">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-osint-accent">Research Prompt</p>
            <p className="text-sm text-gray-300">Open a new tab to verify: {institutionName}</p>
          </div>
        </div>
        <a
          href={searchUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-osint-border bg-osint-accent/10 px-4 py-2 text-sm font-bold text-osint-accent transition-colors hover:bg-osint-accent hover:text-amazon-darker"
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          Search Google
        </a>
      </div>
    </div>
  );
};

interface GameTimerProps {
  elapsedTime: number;
  label?: string;
}

export const GameTimer: FC<GameTimerProps> = ({ elapsedTime, label = 'Research Time' }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-osint-border bg-osint-bg px-3 py-1.5 text-osint-accent">
      <i className="fa-solid fa-stopwatch"></i>
      <span className="text-xs font-black uppercase tracking-widest">{label}</span>
      <span className="font-mono text-sm font-bold">{formatElapsedTime(elapsedTime)}</span>
    </div>
  );
};
