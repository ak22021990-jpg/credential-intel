import type { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2, ease: 'easeIn' } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, x: -18, transition: { duration: 0.2, ease: 'easeIn' } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, x: 18, transition: { duration: 0.2, ease: 'easeIn' } }
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2, ease: 'easeIn' } }
};

export const backInRight: Variants = {
  hidden: { opacity: 0, x: 90, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 18 }
  },
  exit: { opacity: 0, x: 40, scale: 0.96, transition: { duration: 0.2 } }
};

export const headShake: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  shake: {
    opacity: 1,
    y: 0,
    x: [0, -8, 7, -6, 5, -3, 0],
    transition: { duration: 0.55, ease: 'easeInOut' }
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } }
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 0.8,
    scale: 1,
    transition: { type: 'spring', stiffness: 420, damping: 14 }
  },
  exit: { opacity: 0, scale: 0.7, transition: { duration: 0.18 } }
};

export const pulse: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  pulse: {
    opacity: 1,
    scale: [1, 1.04, 1],
    transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
  }
};

export const staggerContainer = (delay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delay
    }
  },
  exit: {
    transition: {
      staggerChildren: delay / 2,
      staggerDirection: -1
    }
  }
});
