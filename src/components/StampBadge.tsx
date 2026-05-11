import { FC } from 'react';

interface StampBadgeProps {
  text: string;
  color: 'green' | 'red' | 'orange' | 'gray';
  className?: string;
}

export const StampBadge: FC<StampBadgeProps> = ({ text, color, className = "" }) => {
  const colorMap = {
    green: 'border-green-500 text-green-500 bg-green-500/10',
    red: 'border-red-500 text-red-500 bg-red-500/10',
    orange: 'border-amazon-orange text-amazon-orange bg-amazon-orange/10',
    gray: 'border-gray-500 text-gray-500 bg-gray-500/10'
  };

  return (
    <div className={`
      inline-block px-3 py-1 border-2 font-black uppercase tracking-tighter text-sm
      transform -rotate-12 select-none pointer-events-none opacity-80
      ${colorMap[color]}
      ${className}
      animate__animated animate__bounceIn
    `} style={{ 
      fontFamily: '"Courier New", Courier, monospace',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)'
    }}>
      {text}
    </div>
  );
};
