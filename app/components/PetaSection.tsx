'use client';

import { MapPin, Compass } from 'lucide-react';
import styles from './PetaSection.module.css';
export default function PetaSection() {

  return (
    <section className={styles.section} id="peta" aria-labelledby="peta-title">
      <div className={styles.header}>
        <h2 id="peta-title" className={styles.title}>Jelajahi Peta Bengkulu</h2>
        <p className={styles.subtitle}>
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
    </section>
  );
}
