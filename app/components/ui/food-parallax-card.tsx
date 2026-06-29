'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

export interface FoodItem {
  id: string;
  title: string;
  description: string;
  label: string;
  imageSrc: string;
}

interface FoodParallaxCardProps {
  item: FoodItem;
}

export default function FoodParallaxCard({ item }: FoodParallaxCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] flex items-center justify-center mt-6 md:mt-0"
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full bg-[#f5f0e8] border border-[#2c6e8a]/15 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm cursor-pointer transition-colors"
      >
        {/* Floating "Plate" Image */}
        <motion.div
          className="absolute -top-6 -right-3 sm:-top-8 sm:-right-4 md:-top-12 md:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border-2 md:border-4 border-[#f5f0e8] pointer-events-none z-10"
          style={{ transform: 'translateZ(80px)' }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageSrc}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div style={{ transform: 'translateZ(50px)' }} className="mt-4 md:mt-6 pr-10 sm:pr-12 md:pr-16 relative z-0">
          <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-[#dce8f0] text-[#b87333] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full mb-2 md:mb-4 shadow-sm">
            {item.label}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1c2b3a] mb-1.5 md:mb-3 leading-tight font-[family-name:var(--font-heading)]">{item.title}</h3>
          <p className="text-[#3a5060] text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
            {item.description}
          </p>
        </div>

        {/* Actions */}
        <div style={{ transform: 'translateZ(40px)' }} className="mt-2 md:mt-4 pb-1 md:pb-2">
          <button className="px-3 py-1.5 md:px-6 md:py-2.5 rounded-full bg-[#2c6e8a] text-white hover:bg-[#1e5470] transition-colors font-semibold tracking-wide text-[10px] md:text-sm shadow-sm w-full md:w-auto">
            Temukan
          </button>
        </div>
      </motion.div>
    </div>
  );
}
