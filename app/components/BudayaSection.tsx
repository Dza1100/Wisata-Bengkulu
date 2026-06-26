'use client';

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
  return (
    <section className="bg-[#dce8f0] py-24 px-6 md:px-12 relative overflow-hidden">
      <div ref={ref} className="fade-up max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
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

        {/* Tumpukan Kartu (Card Stack) */}
        <div className="w-full max-w-2xl mx-auto flex justify-center">
          <CardStack 
            items={budayaBengkulu} 
            initialIndex={0}
            autoAdvance={true} 
            intervalMs={3000}
            pauseOnHover={true}
            showDots={true} 
          />
        </div>

      </div>
    </section>
  );
}
