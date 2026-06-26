'use client';

import React from 'react';
import { useFadeUp } from './useFadeUp';

export default function TecnoSection() {
  const ref = useFadeUp();
  return (
    <section className="bg-[#1c2b3a] py-24 px-4 md:px-8 w-full">
      <div ref={ref as any} className="fade-up w-full h-full flex flex-col items-center">
      
      {/* Header Text */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16 w-full max-w-[1600px] mx-auto">
        <span className="text-[#b87333] font-bold uppercase tracking-widest text-sm">
          Masa Depan
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#f5f0e8] uppercase font-[family-name:var(--font-heading)]">
          Potensi Bengkulu
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-[1600px] mx-auto h-[400px] md:h-[450px]">
        
        {/* Card 1: Plan */}
        <div className="relative group overflow-hidden rounded-md h-full w-full cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop")' }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            {/* Top Right Arrow */}
            <div className="flex justify-end w-full">
              <svg 
                className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            {/* Bottom Text */}
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide font-[family-name:var(--font-heading)]">
                Plan
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Play */}
        <div className="relative group overflow-hidden rounded-md h-full w-full cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80&fit=crop")' }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            {/* Top Right Arrow */}
            <div className="flex justify-end w-full">
              <svg 
                className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            {/* Bottom Text */}
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide font-[family-name:var(--font-heading)]">
                Play
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Explore */}
        <div className="relative group overflow-hidden rounded-md h-full w-full cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&fit=crop")' }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            {/* Top Right Arrow */}
            <div className="flex justify-end w-full">
              <svg 
                className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            {/* Bottom Text */}
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide font-[family-name:var(--font-heading)]">
                Explore
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
