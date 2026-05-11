import { FC, useEffect, useState } from 'react';
import { Rank } from '../types';
import { miniGames } from '../data';

interface RollingNumberProps {
  value: number;
}

const RollingNumber: FC<RollingNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{displayValue}</span>;
};

interface HUDProps {
  score: number;
  streak: number;
  totalCleared: number;
  rank: Rank;
  badges: string[];
}

export const HUD: FC<HUDProps> = ({ score, streak, totalCleared, rank, badges }) => {
  const [prevRank, setPrevRank] = useState<Rank>(rank);
  const [rankUp, setRankUp] = useState(false);

  useEffect(() => {
    if (rank !== prevRank) {
      setRankUp(true);
      const timer = setTimeout(() => {
        setRankUp(false);
        setPrevRank(rank);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [rank, prevRank]);

  const progressPercentage = (totalCleared / miniGames.length) * 100;

  return (
    <header className="sticky top-0 z-50 p-4 md:px-8">
      <div className="max-w-[1600px] mx-auto glassmorphism p-4 flex flex-col md:flex-row justify-between items-center gap-4 border-amazon-orange/30">
        
        {/* Left: Branding & Rank */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 text-2xl font-extrabold font-outfit">
            <div className="relative">
              <i className="fa-solid fa-shield-halved text-amazon-orange text-3xl"></i>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amazon-orange rounded-full animate-pulse shadow-[0_0_8px_rgba(255,153,0,1)]"></div>
            </div>
            <span className="tracking-tighter uppercase">Credential <span className="text-amazon-orange">Intel</span></span>
          </div>

          <div className={`h-10 w-[2px] bg-glass-border hidden md:block`}></div>

          <div className={`flex flex-col items-start ${rankUp ? 'animate__animated animate__bounce' : ''}`}>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Operative Rank</span>
            <div className="flex items-center gap-2">
              <i className={`fa-solid ${rankUp ? 'fa-circle-up text-green-400' : 'fa-medal text-amazon-orange'}`}></i>
              <span className={`font-outfit font-bold ${rankUp ? 'text-green-400' : 'text-white'}`}>{rank}</span>
            </div>
          </div>
        </div>

        {/* Middle: Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          
          {/* Score */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Mission Score</span>
            <div className="flex items-center gap-2 text-xl font-mono font-bold text-amazon-orange bg-black/40 px-4 py-1 rounded-md border border-white/5">
              <i className="fa-solid fa-microchip text-xs opacity-50"></i>
              <RollingNumber value={score} />
            </div>
          </div>

          {/* Streak */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Multiplier / Streak</span>
            <div className={`flex items-center gap-2 text-xl font-mono font-bold px-4 py-1 rounded-md border transition-all duration-300 ${streak >= 3 ? 'text-orange-500 border-orange-500/50 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : 'text-gray-400 border-white/5 bg-black/40'}`}>
              <i className={`fa-solid fa-fire ${streak >= 3 ? 'animate-bounce' : ''}`}></i>
              <span>{streak}</span>
              {streak >= 3 && <span className="text-xs bg-orange-500 text-white px-1 rounded ml-1">x{Math.floor(streak/3) + 1}</span>}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Commendations</span>
            <div className="flex items-center gap-2 text-xl font-mono font-bold text-blue-400 bg-black/40 px-4 py-1 rounded-md border border-white/5">
              <i className="fa-solid fa-award text-sm"></i>
              <span>{badges.length}</span>
            </div>
          </div>

        </div>

        {/* Right: Progress */}
        <div className="flex flex-col items-end w-full md:w-64">
          <div className="flex justify-between w-full mb-1">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Ops Progression</span>
            <span className="text-[10px] font-bold text-amazon-orange">{totalCleared} / {miniGames.length} Cleared</span>
          </div>
          <div className="w-full h-2 bg-black/40 rounded-full border border-white/5 overflow-hidden">
            <div 
              className="h-full bg-amazon-orange shadow-[0_0_10px_rgba(255,153,0,0.5)] transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

      </div>
    </header>
  );
};
