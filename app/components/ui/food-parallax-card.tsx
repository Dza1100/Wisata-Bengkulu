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
      className="relative w-full h-[400px] flex items-center justify-center mt-10 md:mt-0"
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
        className="relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl cursor-pointer hover:border-zinc-700 transition-colors"
      >
        {/* Floating "Plate" Image */}
        <motion.div
          className="absolute -top-12 -right-8 w-40 h-40 md:w-44 md:h-44 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border-4 border-zinc-900 pointer-events-none z-10"
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
        <div style={{ transform: 'translateZ(50px)' }} className="mt-6 pr-14 md:pr-16 relative z-0">
          <span className="inline-block px-3 py-1 bg-zinc-800/80 text-orange-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            {item.label}
          </span>
          <h3 className="text-3xl font-black text-white mb-3 leading-tight drop-shadow-md">{item.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
            {item.description}
          </p>
        </div>

        {/* Actions */}
        <div style={{ transform: 'translateZ(40px)' }} className="mt-4 pb-2">
          <button className="px-6 py-2.5 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors font-medium text-sm shadow-lg">
            Temukan Restoran
          </button>
        </div>
      </motion.div>
    </div>
  );
}
