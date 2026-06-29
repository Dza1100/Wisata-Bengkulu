'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CardStack, CardStackItem } from './ui/card-stack';

const budayaBengkulu: CardStackItem[] = [
  {
    id: 'tabot',
    title: 'Festival Tabot',
    description: 'Upacara tradisional tahunan masyarakat Bengkulu untuk mengenang kepahlawanan Husein bin Ali. Dimeriahkan dengan arak-arakan bangunan megah.',
    imageSrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1080&q=85&fit=crop',
  },
  {
    id: 'kain-besurek',
    title: 'Kain Besurek',
    description: 'Batik khas Bengkulu yang memadukan motif bunga Rafflesia dengan kaligrafi huruf Arab gundul yang sarat makna filosofis.',
    imageSrc: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1080&q=85&fit=crop',
  },
  {
    id: 'alat-musik-dol',
    title: 'Alat Musik Dol',
    description: 'Bedug tradisional bersuara menggelegar yang terbuat dari bonggol kelapa. Dulunya dimainkan khusus saat perayaan Tabot.',
    imageSrc: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1080&q=85&fit=crop',
  },
  {
    id: 'rumah-bubungan-lima',
    title: 'Rumah Bubungan Lima',
    description: 'Rumah adat berbentuk panggung dengan atap menyerupai piramida terpotong, dirancang tahan gempa dan ramah lingkungan.',
    imageSrc: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1080&q=85&fit=crop',
  },
  {
    id: 'tari-persembahan',
    title: 'Tari Persembahan',
    description: 'Tarian adat untuk menyambut tamu kehormatan, diiringi tabuhan musik tradisional dan diakhiri dengan pemberian sekapur sirih.',
    imageSrc: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1080&q=85&fit=crop',
  },
];

import { useFadeUp } from './useFadeUp';

export default function BudayaSection() {
  const ref = useFadeUp();
  const [mobileActive, setMobileActive] = useState(0);
  const [cardW, setCardW] = useState(320);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (cardContainerRef.current) {
        setCardW(cardContainerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handlePrev = useCallback(() => {
    setMobileActive((a) => (a - 1 + budayaBengkulu.length) % budayaBengkulu.length);
  }, []);

  const handleNext = useCallback(() => {
    setMobileActive((a) => (a + 1) % budayaBengkulu.length);
  }, []);

  return (
    <section id="budaya" className="bg-[#dce8f0] py-10 md:py-24 px-6 md:px-12 relative overflow-hidden">
      <div ref={ref} className="fade-up max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8 md:mb-16">
          <span className="text-[#b87333] font-bold uppercase tracking-widest text-sm">
            Warisan Leluhur
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1c2b3a] font-[family-name:var(--font-heading)]">
            Budaya & Tradisi
          </h2>
          <p className="text-[#3a5060] max-w-2xl text-base md:text-lg">
            Selami kekayaan kearifan lokal Bengkulu yang diwariskan dari generasi ke generasi, memadukan pesona seni, harmoni, dan filosofi kehidupan.
          </p>
        </div>

        {/* Desktop: original card stack — untouched */}
        <div className="hidden md:flex w-full max-w-2xl mx-auto justify-center">
          <CardStack 
            items={budayaBengkulu} 
            initialIndex={0}
            autoAdvance={true} 
            intervalMs={3000}
            pauseOnHover={true}
            showDots={true} 
          />
        </div>

        {/* Mobile: full-width card with overlay arrows */}
        <div className="flex md:hidden w-full flex-col items-center gap-4">
          {/* Card with overlay arrows inside — measured container */}
          <div ref={cardContainerRef} className="relative w-full rounded-2xl overflow-hidden" style={{ height: 400 }}>
            {/* CardStack with measured numeric width */}
            <CardStack
              key={`mobile-${mobileActive}-${cardW}`}
              items={budayaBengkulu}
              initialIndex={mobileActive}
              cardWidth={cardW}
              cardHeight={400}
              maxVisible={1}
              overlap={0}
              spreadDeg={0}
              depthPx={0}
              tiltXDeg={0}
              activeLiftPx={0}
              activeScale={1}
              inactiveScale={1}
              autoAdvance={false}
              showDots={false}
              loop={true}
            />

            {/* Prev arrow — centered on left edge */}
            <button
              id="budaya-prev-btn"
              onClick={handlePrev}
              aria-label="Sebelumnya"
              className="absolute left-3 z-20 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 active:scale-95 border border-white/30"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronLeft className="w-5 h-5 drop-shadow" />
            </button>

            {/* Next arrow — centered on right edge */}
            <button
              id="budaya-next-btn"
              onClick={handleNext}
              aria-label="Selanjutnya"
              className="absolute right-3 z-20 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 active:scale-95 border border-white/30"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronRight className="w-5 h-5 drop-shadow" />
            </button>
          </div>


          {/* Dots indicator for mobile */}
          <div className="flex items-center gap-2">
            {budayaBengkulu.map((item, idx) => (
              <button
                key={item.id}
                id={`budaya-dot-${idx}`}
                onClick={() => setMobileActive(idx)}
                aria-label={`Lihat ${item.title}`}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  idx === mobileActive
                    ? 'bg-[#b87333] w-4'
                    : 'bg-[#1c2b3a]/30 hover:bg-[#1c2b3a]/50'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
