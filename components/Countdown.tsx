
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      // Using a more robust date parsing: Year, Month (0-indexed), Day, Hour, Minute, Second
      const target = new Date(2026, 2, 2, 7, 40, 0).getTime(); // March 2nd, 2026
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label, delay }: { value: number, label: string, delay: number }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center glass px-3 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl min-w-[65px] md:min-w-[90px] neon-border border border-white/10 transition-all hover:border-[#FF6F00]/50 group"
    >
      <span className="text-2xl md:text-4xl font-black text-white tabular-nums leading-none group-hover:text-[#FF6F00] transition-colors">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-[#FF6F00] mt-1.5 opacity-80">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="flex gap-2 md:gap-3 justify-center items-center">
      <TimeBox value={timeLeft.days} label="Dias" delay={0.1} />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl font-bold text-white/10">:</motion.span>
      <TimeBox value={timeLeft.hours} label="Hrs" delay={0.2} />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl font-bold text-white/10">:</motion.span>
      <TimeBox value={timeLeft.minutes} label="Min" delay={0.3} />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl font-bold text-white/10">:</motion.span>
      <TimeBox value={timeLeft.seconds} label="Seg" delay={0.4} />
    </div>
  );
};

export default Countdown;
