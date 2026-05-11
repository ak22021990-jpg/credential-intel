import { FC, useEffect, useState } from 'react';
import { Rank } from '../types';

interface RankUpToastProps {
  rank: Rank;
  onClose: () => void;
}

export const RankUpToast: FC<RankUpToastProps> = ({ rank, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 1000); // Wait for fade out
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const rankIcons = {
    'Trainee': 'fa-user',
    'Specialist': 'fa-user-shield',
    'Lead Analyst': 'fa-user-tie',
    'Master Screener': 'fa-user-secret'
  };

  return (
    <div className={`
      fixed top-24 left-1/2 -translate-x-1/2 z-[200]
      transition-all duration-1000 ease-out
      ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-12 scale-95'}
    `}>
      <div className="bg-amazon-orange text-amazon-darker px-8 py-4 rounded-2xl shadow-[0_0_50px_rgba(255,153,0,0.4)] flex items-center gap-6 border-2 border-white/20">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl animate-pulse">
          <i className={`fa-solid ${rankIcons[rank]}`}></i>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-black opacity-70">Promotion Secured</h4>
          <p className="text-2xl font-outfit font-bold">New Rank: {rank}</p>
        </div>
      </div>
    </div>
  );
};
