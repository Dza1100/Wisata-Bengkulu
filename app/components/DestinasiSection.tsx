import { Waves, Castle, Mountain, Trees, Sunset, Home, Palmtree } from 'lucide-react';
import ExpandingCards, { CardItem } from './expanding-cards';

const destinasiData: CardItem[] = [
  {
    id: 'pantai-panjang',
    title: 'Pantai Panjang',
    description: 'Garis pantai 7 km dengan pasir putih dan cemara laut.',
    imgSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&fit=crop',
    icon: <Waves className="w-6 h-6" />,
  },
  {
    id: 'benteng-marlborough',
    title: 'Benteng Marlborough',
    description: 'Benteng Inggris abad ke-18 yang menghadap Samudra Hindia.',
    imgSrc: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=85&fit=crop',
    icon: <Castle className="w-6 h-6" />,
  },
  {
    id: 'bukit-kaba',
    title: 'Bukit Kaba',
    description: 'Gunung berapi dengan kawah ganda hijau toska.',
    imgSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85&fit=crop',
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    id: 'danau-dendam',
    title: 'Danau Dendam Tak Sudah',
    description: 'Danau ekologi habitat anggrek pensil langka.',
    imgSrc: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=85&fit=crop',
    icon: <Trees className="w-6 h-6" />,
  },
  {
    id: 'pulau-enggano',
    title: 'Pulau Enggano',
    description: 'Surga tersembunyi dengan taman laut tropis.',
    imgSrc: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=1920&q=85&fit=crop',
    icon: <Sunset className="w-6 h-6" />,
  },
  {
    id: 'rumah-bung-karno',
    title: 'Rumah Bung Karno',
    description: 'Saksi bisu perjuangan dan pengasingan Sang Proklamator.',
    imgSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85&fit=crop',
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 'pantai-tapak-paderi',
    title: 'Pantai Tapak Paderi',
    description: 'Spot klasik untuk menikmati keindahan senja tepi laut.',
    imgSrc: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=85&fit=crop',
    icon: <Palmtree className="w-6 h-6" />,
  },
];

export default function DestinasiSection() {
  return (
    <section className="bg-[#09090b] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Text */}
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Eksplorasi Alam
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Jelajahi Pesona <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">Bengkulu</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
            Temukan keindahan alam yang belum tersentuh, kekayaan sejarah yang mendalam, dan keajaiban ekologi yang menanti untuk dijelajahi.
          </p>
        </div>

        {/* Expanding Cards Component */}
        <ExpandingCards items={destinasiData} />
      </div>
    </section>
  );
}
