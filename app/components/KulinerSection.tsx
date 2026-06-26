'use client';

import FoodParallaxCard, { FoodItem } from './ui/food-parallax-card';

const kulinerData: FoodItem[] = [
  {
    id: 'pendap',
    title: 'Pendap',
    description: 'Masakan khas berbahan dasar ikan yang dibumbui rempah pedas, kelapa parut, lalu dibungkus dan direbus lama dalam daun talas.',
    label: 'Pedas & Gurih',
    imageSrc: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80&fit=crop',
  },
  {
    id: 'lempuk-durian',
    title: 'Lempuk Durian',
    description: 'Kudapan manis legit sejenis dodol yang terbuat dari 100% daging durian asli Bengkulu.',
    label: 'Manis Legit',
    imageSrc: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80&fit=crop',
  },
  {
    id: 'bagar-hiu',
    title: 'Bagar Hiu',
    description: 'Sajian langka dan eksotis berupa daging ikan hiu yang dimasak dengan kuah kental rempah tanpa santan.',
    label: 'Kaya Rempah',
    imageSrc: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80&fit=crop',
  },
  {
    id: 'tempoyak',
    title: 'Tempoyak Ikan Patin',
    description: 'Hidangan berkuah kuning yang menggunakan fermentasi durian (tempoyak) sebagai penambah rasa asam dan gurih yang unik.',
    label: 'Asam Gurih',
    imageSrc: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80&fit=crop',
  },
  {
    id: 'kue-bay-tat',
    title: 'Kue Bay Tat',
    description: 'Kue tart tradisional khas Bengkulu dengan tekstur lembut, biasanya diisi dengan selai nanas yang manis nan legit.',
    label: 'Manis Gurih',
    imageSrc: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&fit=crop',
  },
  {
    id: 'gulai-kembaang',
    title: 'Gulai Kemba\'ang',
    description: 'Gulai khas Bengkulu yang kaya bumbu dengan isian iga sapi dan daun pakis, menawarkan cita rasa rempah Nusantara yang kuat.',
    label: 'Gurih Rempah',
    imageSrc: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=800&q=80&fit=crop',
  }
];

import { useFadeUp } from './useFadeUp';

export default function KulinerSection() {
  const ref = useFadeUp();
  return (
    <section className="bg-[#f5f0e8] py-24 px-6 md:px-12 overflow-hidden">
      <div ref={ref} className="fade-up max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="text-[#b87333] font-bold uppercase tracking-widest text-sm">
            Cita Rasa
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1c2b3a] font-[family-name:var(--font-heading)]">
            Kuliner Khas Bengkulu
          </h2>
          <p className="text-[#3a5060] max-w-2xl text-base md:text-lg">
            Manjakan lidah Anda dengan perpaduan rempah otentik dan resep warisan leluhur yang tak akan Anda temukan di tempat lain.
          </p>
        </div>

        {/* Grid Layout Kuliner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full mt-6">
          {kulinerData.map((item) => (
            <FoodParallaxCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
