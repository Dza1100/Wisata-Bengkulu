'use client';

import { MapPin, Compass } from 'lucide-react';
import styles from './PetaSection.module.css';
import { useFadeUp } from './useFadeUp';

export default function PetaSection() {
  const ref = useFadeUp();
  return (
    <section className={styles.section} id="peta" aria-labelledby="peta-title">
      <div ref={ref as any} className="fade-up w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 w-full max-w-[1600px] mx-auto">
        <span className="text-[#b87333] font-bold uppercase tracking-widest text-sm">
          Peta Interaktif
        </span>
        <h2 id="peta-title" className="text-3xl md:text-5xl font-black text-[#1c2b3a] uppercase font-[family-name:var(--font-heading)]">
          Jelajahi Peta Bengkulu
        </h2>
        <p className="text-[#3a5060] max-w-2xl text-base md:text-lg">
          Temukan keajaiban alam dan surga tersembunyi di sepanjang garis pantai barat Sumatera melalui pandangan satelit interaktif kami.
        </p>
      </div>

      <div className={styles.mapWrapper}>
        {/* Inner wrapper to match image size exactly for perfect % positioning */}
        <div className={styles.mapInner}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/17.00.00_Bengkulu.svg"
            alt="Bengkulu Province Silhouette"
            className={styles.mapImage}
          />
          {/* Region Labels */}
          <span className={styles.regionLabel} style={{ top: '18%', left: '35%' }}>Mukomuko</span>
          <span className={styles.regionLabel} style={{ top: '24%', left: '50%' }}>Lebong</span>
          <span className={styles.regionLabel} style={{ top: '40%', left: '37%' }}>Bengkulu Utara</span>
          <span className={styles.regionLabel} style={{ top: '37%', left: '64%' }}>Rejang Lebong</span>
          <span className={styles.regionLabel} style={{ top: '45%', left: '58%' }}>Kepahiang</span>
          <span className={styles.regionLabel} style={{ top: '45%', left: '41%' }}>Bengkulu Tengah</span>
          <span className={styles.regionLabel} style={{ top: '49%', left: '42%' }}>Bengkulu</span>
          <span className={styles.regionLabel} style={{ top: '55%', left: '52%' }}>Seluma</span>
          <span className={styles.regionLabel} style={{ top: '57%', left: '65%' }}>Bengkulu Selatan</span>
          <span className={styles.regionLabel} style={{ top: '72%', left: '65%' }}>Kaur</span>
        </div>
      </div>
      </div>
    </section>
  );
}
