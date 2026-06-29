'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Sejarah', href: '#sejarah' },
  { name: 'Budaya', href: '#budaya' },
  { name: 'Kuliner', href: '#kuliner' },
  { name: 'Destinasi', href: '#destinasi' },
  { name: 'Teknologi', href: '#teknologi' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Determine if section is roughly in the top third of the viewport
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled && !isMobileMenuOpen ? 'bg-[#f5f0e8]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative h-14">
        {/* Bagian Kiri: Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className={`text-xl font-bold tracking-wide font-[family-name:var(--font-heading)] transition-colors duration-300 ${
              (isScrolled && !isMobileMenuOpen) ? 'text-[#1c2b3a]' : 'text-[#f5f0e8]'
            }`}
            style={!(isScrolled && !isMobileMenuOpen) ? { textShadow: '0 1px 6px rgba(0,0,0,0.4)' } : undefined}
          >
            PesonaBengkulu
          </Link>
        </div>

        {/* Bagian Tengah: Menu Navigasi (Sembunyi di Mobile) */}
        <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-widest border-b-2 pb-1 transition-all duration-300 ${
                  isActive
                    ? 'text-[#b87333] border-[#b87333]'
                    : isScrolled
                      ? 'text-[#1c2b3a] border-transparent hover:text-[#b87333] hover:border-[#b87333]'
                      : 'text-[#f5f0e8] border-transparent hover:text-[#f0c060] hover:border-[#f0c060]'
                }`}
                style={(!isScrolled && !isActive) ? { textShadow: '0 1px 6px rgba(0,0,0,0.5)' } : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Bagian Kanan: Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 focus:outline-none transition-colors duration-300 ${
              (isScrolled && !isMobileMenuOpen) ? 'text-[#1c2b3a]' : 'text-[#f5f0e8]'
            }`}
            style={!(isScrolled && !isMobileMenuOpen) ? { filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))' } : undefined}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[65%] sm:w-[50%] z-40 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-white/10`}
      >
        <div className="flex flex-col items-center w-full px-4 space-y-6 overflow-y-auto max-h-screen pt-20 pb-10">
          
          <div className="flex flex-col items-center mb-1">
            <span className="text-2xl font-bold tracking-widest font-[family-name:var(--font-heading)] text-white">
              PESONA
            </span>
            <span className="text-[9px] tracking-[0.2em] text-white/70 uppercase mt-0.5">
              Bengkulu
            </span>
          </div>

          <h2 className="text-white text-sm font-light tracking-wide text-center">
            Jelajahi <span className="font-bold">Keindahan</span>
          </h2>
          
          <div className="w-16 h-[1px] bg-white/30"></div>
          
          <div className="flex flex-col items-center w-full space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-300 px-6 py-2.5 rounded-full ${
                    isActive
                      ? 'text-white border border-white bg-white/10 font-bold'
                      : 'text-white/80 border border-transparent hover:text-white hover:border-white/30 font-medium'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="w-16 h-[1px] bg-white/30 mt-3 mb-1"></div>
          
          <Link
            href="#destinasi"
            onClick={() => setIsMobileMenuOpen(false)}
            className="uppercase tracking-widest text-[10px] sm:text-xs text-white border border-white/60 rounded-full px-6 py-2.5 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 text-center"
          >
            Mulai<br className="sm:hidden" /> Perjalanan
          </Link>
        </div>
      </div>
    </nav>
  );
}
