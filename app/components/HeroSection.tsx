'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './HeroSection.module.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  watermark_text: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Pantai Panjang Bengkulu',
    subtitle:
      'Hamparan pasir putih sepanjang 7 kilometer membelah samudra — surga tersembunyi di ujung Sumatera yang menanti jejakmu.',
    image_url:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&fit=crop',
    watermark_text: 'BENGKULU',
  },
  {
    id: 2,
    title: 'Bunga Rafflesia Arnoldii',
    subtitle:
      'Saksikan keajaiban alam terbesar di dunia mekar di hutan tropis Bengkulu — pengalaman langka yang tak terlupakan.',
    image_url:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85&fit=crop',
    watermark_text: 'RAFFLESIA',
  },
  {
    id: 3,
    title: 'Benteng Marlborough',
    subtitle:
      'Berdiri tegak sejak abad ke-18, benteng megah peninggalan Inggris ini menyimpan cerita panjang dan panorama laut yang memukau.',
    image_url:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=85&fit=crop',
    watermark_text: 'MARLBOROUGH',
  },
  {
    id: 4,
    title: 'Danau Dendam Tak Sudah',
    subtitle:
      'Danau eksotis dengan legenda yang tak berujung, dikelilingi cagar alam dan flora endemik yang memanjakan mata.',
    image_url:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=85&fit=crop',
    watermark_text: 'DENDAM',
  },
  {
    id: 5,
    title: 'Pulau Tikus',
    subtitle:
      'Surga kecil dengan terumbu karang indah, tempat sempurna untuk melepas penat dan bersatu dengan alam.',
    image_url:
      'https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=1920&q=85&fit=crop',
    watermark_text: 'PULAU',
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === activeIndex) return;
    setPrevIndex(activeIndex);
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
      setPrevIndex(null);
    }, 700);
  }, [activeIndex]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = (activeIndex + 1) % slides.length;
      goToSlide(next);
    }, AUTO_PLAY_INTERVAL);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startTimer]);

  const handleThumbnailClick = (index: number) => {
    goToSlide(index);
  };

  const active = slides[activeIndex];
  const prev = prevIndex !== null ? slides[prevIndex] : null;

  // Orbital positions for 5 thumbnails — forming a semi-circle `(` on the right
  const orbitalPositions = [
    { top: '15%', right: '18%' },
    { top: '30%', right: '48%' },
    { top: '50%', right: '60%' },
    { top: '70%', right: '48%' },
    { top: '85%', right: '18%' },
  ];

  return (
    <section className={`${styles.hero} relative z-10`} aria-label="Hero Section Wisata Bengkulu">
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)'
        }}
      />
      {/* ── Background layers ── */}
      {/* Previous slide (fades out) */}
      {prev && (
        <div
          className={`${styles.bgLayer} ${styles.bgLayerPrev}`}
          style={{ backgroundImage: `url(${prev.image_url})` }}
          aria-hidden="true"
        />
      )}
      {/* Active slide (fades in) */}
      <div
        key={activeIndex}
        className={`${styles.bgLayer} ${styles.bgLayerActive} ${fading ? styles.bgFadingIn : styles.bgVisible}`}
        style={{ backgroundImage: `url(${active.image_url})` }}
        aria-hidden="true"
      />

      {/* ── Overlays ── */}
      {/* Dark vignette overlay */}
      <div className={styles.overlay} aria-hidden="true" />
      {/* Bottom fog / cloud effect */}
      <div className={styles.fogBottom} aria-hidden="true" />
      {/* Left gradient for text readability */}
      <div className={styles.gradientLeft} aria-hidden="true" />

      {/* ── Main Content (Left) ── */}
      <div className={styles.contentWrapper}>
        <div key={`content-${activeIndex}`} className={styles.content}>
          <div className={styles.slideCounter}>
            <span className={styles.slideCounterActive}>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className={styles.slideCounterSep}>/</span>
            <span className={styles.slideCounterTotal}>
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          <div className={styles.titleWrapper}>
            <div className={styles.accentBar} aria-hidden="true" />
            <div>
              <h1 className={`${styles.title} font-[family-name:var(--font-heading)]`}>{active.title}</h1>
            </div>
          </div>
          
          <p className={styles.subtitle}>{active.subtitle}</p>
          
          <button className={styles.ctaButton} type="button">
            Jelajahi Sekarang
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Orbital Navigation (right) ── */}
      <nav
        className={styles.orbitalNav}
        aria-label="Navigasi slide"
      >
        {/* SVG arcs */}
        <svg
          className={styles.orbitalSvg}
          viewBox="0 0 300 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
        </svg>

        {/* Thumbnails */}
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          const pos = orbitalPositions[idx];
          return (
            <button
              key={slide.id}
              className={`${styles.orbitItem} ${isActive ? styles.orbitItemActive : ''}`}
              style={{ top: pos.top, right: pos.right }}
              onClick={() => handleThumbnailClick(idx)}
              aria-label={`Lihat slide ${slide.title}`}
              aria-pressed={isActive}
              type="button"
            >
              {/* Rotating dashed ring (active only) */}
              {isActive && (
                <span className={styles.orbitRing} aria-hidden="true" />
              )}

              {/* Static outer ring (only for active) */}
              {isActive && <span className={styles.orbitOuterRing} aria-hidden="true" />}

              {/* Thumbnail image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image_url}
                alt={slide.title}
                className={styles.orbitThumb}
              />
            </button>
          );
        })}
      </nav>

      {/* ── Bottom progress bar ── */}
      <div className={styles.progressBar} aria-hidden="true">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.progressDot} ${idx === activeIndex ? styles.progressDotActive : ''}`}
            onClick={() => handleThumbnailClick(idx)}
            aria-label={`Slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #f5f0e8 100%)'
        }}
      />
    </section>
  );
}
