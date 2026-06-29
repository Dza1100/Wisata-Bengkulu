'use client';

import React from 'react';
import { useFadeUp } from './useFadeUp';

export default function SejarahSection() {
  const ref = useFadeUp();
  return (
    <section id="sejarah" className="bg-[#f5f0e8] pb-24 pt-0 px-6 md:px-16 min-h-[100vh] flex flex-col justify-center font-sans relative z-0 overflow-hidden">
      <div ref={ref as any} className="fade-up w-full h-full flex flex-col justify-center items-center">
      
      {/* Header Text */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16 w-full max-w-[1400px] mx-auto z-20">
        <span className="text-[#b87333] font-bold uppercase tracking-widest text-sm">
          Jejak Waktu
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#1c2b3a] font-[family-name:var(--font-heading)] uppercase">
          Sejarah Bengkulu
        </h2>
      </div>

      <p className="block md:hidden text-sm text-center text-[#3a5060] mb-6 px-4 leading-relaxed">
        Tiga era yang membentuk identitas Bengkulu — dari masa Kolonial Inggris, 
        Pengasingan Bung Karno, hingga semangat Kemerdekaan.
      </p>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-0 h-full min-h-[900px] relative z-10">
        
        {/* Left Column - Text */}
        <div className="hidden md:flex flex-col justify-between py-12 md:py-24 z-30 relative order-2 md:order-1">
          <div className="max-w-[420px]">
            <p className="text-[#3a5060] text-xl lg:text-[22px] leading-[1.6] font-light tracking-wide">
              Kami telah merangkum perjalanan sejarah yang kaya di Bengkulu untuk Anda.<br />
              Anda akan melintasi tiga era utama:<br />
              <span className="text-[#2c6e8a] font-normal">Masa Inggris, Pengasingan, dan Kemerdekaan.</span>
            </p>
          </div>
          
          <div className="max-w-[420px] mt-16 lg:mt-0">
            <p className="text-[#3a5060] text-xl lg:text-[22px] leading-[1.6] font-light tracking-wide">
              Tidak perlu repot mencari banyak literatur — semua peristiwa kunci telah terorganisir. Kami akan menunjukkan lokasinya, peninggalannya, dan tokohnya, agar Anda dapat sekadar <span className="text-[#2c6e8a] font-normal">menikmati jejak sejarahnya.</span>
            </p>
          </div>
        </div>

        {/* Right Column - Timeline (Desktop) */}
        <div className="relative mt-16 md:mt-0 hidden md:block h-[900px] z-20 order-1 md:order-2">
          {/* Vertical Line */}
          <div className="absolute top-8 bottom-8 left-[50%] w-[1px] bg-[#2c6e8a]/25" />

          {/* --- POINT 1 --- */}
          <div className="absolute top-[120px] left-[50%] w-0 h-0 z-30">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#b87333]" />
            <div className="absolute top-0 right-8 -translate-y-1/2 text-right whitespace-nowrap">
              <p className="text-[#b87333] text-lg mb-1 tracking-wider">1685 - 1824</p>
              <h3 className="text-[#1c2b3a] font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-wide">Masa Inggris</h3>
            </div>
          </div>
          {/* Images Point 1 */}
          {/* Image 1: Back Left */}
          <img 
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80&fit=crop" 
            alt="Pesisir Bengkulu" 
            className="absolute top-[150px] left-[2%] w-44 h-32 object-cover rounded-md shadow-xl z-10 transition-transform hover:scale-105 duration-500" 
          />
          {/* Image 2: Front Left (overlapping bottom right of Image 1) */}
          <img 
            src="https://images.unsplash.com/photo-1464316325666-63beaf639dbb?w=600&q=80&fit=crop" 
            alt="Benteng Marlborough" 
            className="absolute top-[200px] left-[12%] w-48 h-40 object-cover rounded-md shadow-2xl z-20 transition-transform hover:scale-105 duration-500" 
          />
          {/* Image 3: Top Right */}
          <img 
            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80&fit=crop" 
            alt="Arsitektur Lama" 
            className="absolute top-[50px] left-[65%] w-36 h-32 object-cover rounded-md shadow-xl z-10 transition-transform hover:scale-105 duration-500" 
          />

          {/* --- POINT 2 --- */}
          <div className="absolute top-[400px] left-[50%] w-0 h-0 z-30">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#b87333]" />
            <div className="absolute top-0 left-8 -translate-y-1/2 text-left whitespace-nowrap">
              <p className="text-[#b87333] text-lg mb-1 tracking-wider">1938 - 1942</p>
              <h3 className="text-[#1c2b3a] font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-wide">Pengasingan</h3>
            </div>
          </div>
          {/* Images Point 2 */}
          {/* Image 1: Back Right */}
          <img 
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&q=80&fit=crop" 
            alt="Rumah Pengasingan" 
            className="absolute top-[450px] left-[65%] w-48 h-40 object-cover rounded-md shadow-2xl z-10 transition-transform hover:scale-105 duration-500" 
          />
          {/* Image 2: Front Right (overlapping bottom left of Image 1) */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop" 
            alt="Sejarah" 
            className="absolute top-[520px] left-[55%] w-40 h-32 object-cover rounded-md shadow-xl z-20 transition-transform hover:scale-105 duration-500" 
          />

          {/* --- POINT 3 --- */}
          <div className="absolute top-[680px] left-[50%] w-0 h-0 z-30">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#b87333]" />
            <div className="absolute top-0 right-8 -translate-y-1/2 text-right whitespace-nowrap">
              <p className="text-[#b87333] text-lg mb-1 tracking-wider">1945</p>
              <h3 className="text-[#1c2b3a] font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-wide">Kemerdekaan</h3>
            </div>
          </div>
          {/* Images Point 3 */}
          {/* Image 1: Bottom Left */}
          <img 
            src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&q=80&fit=crop" 
            alt="Sang Saka Merah Putih" 
            className="absolute top-[720px] left-[10%] w-32 h-36 object-cover rounded-md shadow-2xl z-20 transition-transform hover:scale-105 duration-500" 
          />
        </div>

        {/* Mobile View (Fallback) */}
        <div className="lg:hidden col-span-1 mt-12 mb-12 flex flex-col gap-16 relative z-20 order-1">
            <div className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-[#2c6e8a]/25 z-0" />
            
            {/* Point 1 */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-[15px] h-[15px] rounded-full bg-[#b87333] shrink-0" />
                <div>
                  <p className="text-[#b87333] text-sm tracking-wider mb-1">1685 - 1824</p>
                  <h3 className="text-[#1c2b3a] font-[family-name:var(--font-heading)] text-2xl font-semibold">Masa Inggris</h3>
                </div>
              </div>
              <div className="pl-[39px] grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1464316325666-63beaf639dbb?w=600&q=80&fit=crop" alt="Benteng Marlborough" className="w-full h-40 object-cover rounded-md shadow-lg" />
                <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80&fit=crop" alt="Pesisir" className="w-full h-40 object-cover rounded-md shadow-lg" />
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-[15px] h-[15px] rounded-full bg-[#b87333] shrink-0" />
                <div>
                  <p className="text-[#b87333] text-sm tracking-wider mb-1">1938 - 1942</p>
                  <h3 className="text-[#1c2b3a] font-[family-name:var(--font-heading)] text-2xl font-semibold">Pengasingan</h3>
                </div>
              </div>
              <div className="pl-[39px]">
                <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&q=80&fit=crop" alt="Pengasingan" className="w-full h-48 object-cover rounded-md shadow-lg" />
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-[15px] h-[15px] rounded-full bg-[#b87333] shrink-0" />
                <div>
                  <p className="text-[#b87333] text-sm tracking-wider mb-1">1945</p>
                  <h3 className="text-[#1c2b3a] font-[family-name:var(--font-heading)] text-2xl font-semibold">Kemerdekaan</h3>
                </div>
              </div>
              <div className="pl-[39px] grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&q=80&fit=crop" alt="Kemerdekaan" className="w-full h-48 object-cover rounded-md shadow-lg" />
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop" alt="Perjuangan" className="w-full h-48 object-cover rounded-md shadow-lg" />
              </div>
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}
