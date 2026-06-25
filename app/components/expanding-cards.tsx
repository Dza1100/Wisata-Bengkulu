'use client';

import { useState } from 'react';

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
}

interface ExpandingCardsProps {
  items: CardItem[];
}

export default function ExpandingCards({ items }: ExpandingCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const gridColsDesktop = items.map((_, i) => (i === activeIndex ? '5fr' : '1fr')).join(' ');
  const gridRowsMobile = items.map((_, i) => (i === activeIndex ? '5fr' : '1fr')).join(' ');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .expanding-grid {
          display: grid;
          gap: 1rem;
          transition: grid-template-columns 700ms ease-in-out, grid-template-rows 700ms ease-in-out;
        }
        @media (min-width: 768px) {
          .expanding-grid {
            grid-template-columns: ${gridColsDesktop};
            grid-template-rows: 1fr;
          }
        }
        @media (max-width: 767px) {
          .expanding-grid {
            grid-template-columns: 1fr;
            grid-template-rows: ${gridRowsMobile};
          }
        }
      `}} />
      <ul className="expanding-grid w-full h-[600px] md:h-[500px] lg:h-[600px]">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative rounded-3xl overflow-hidden cursor-pointer w-full h-full"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imgSrc}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  isActive ? 'grayscale-0 scale-105' : 'grayscale scale-100'
                }`}
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              {/* Inactive State - Vertical Text on Desktop, Horizontal on Mobile */}
              <div
                className={`absolute inset-0 flex items-end justify-center md:justify-start pb-6 md:pb-8 md:pl-6 transition-opacity duration-500 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <h3 className="text-white font-bold text-lg md:text-xl whitespace-nowrap md:-rotate-90 md:origin-bottom-left transition-transform duration-700 drop-shadow-md">
                  {item.title}
                </h3>
              </div>

              {/* Active State */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-700 ease-in-out delay-75 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 md:p-4 bg-orange-500 rounded-full text-white shadow-xl">
                    {item.icon}
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl font-black leading-tight drop-shadow-lg">
                    {item.title}
                  </h2>
                </div>
                <p className="text-zinc-200 text-sm md:text-base leading-relaxed max-w-lg drop-shadow-md">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
