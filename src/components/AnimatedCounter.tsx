import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ end, decimals = 0, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
  });

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [count, end]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
