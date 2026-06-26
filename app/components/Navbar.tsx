'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Wisata', href: '#' },
  { name: 'Budaya', href: '#' },
  { name: 'Kuliner', href: '#' },
  { name: 'Sejarah', href: '#' },
  { name: 'Teknologi', href: '#' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen ? 'bg-[#f5f0e8]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative h-14">
        {/* Bagian Kiri: Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className={`text-xl font-bold tracking-wide font-[family-name:var(--font-heading)] transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-[#1c2b3a]' : 'text-[#f5f0e8]'
            }`}
            style={!(isScrolled || isMobileMenuOpen) ? { textShadow: '0 1px 6px rgba(0,0,0,0.4)' } : undefined}
          >
            PesonaBengkulu
          </Link>
        </div>

        {/* Bagian Tengah: Menu Navigasi (Sembunyi di Mobile) */}
        <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, idx) => {
            const isActive = idx === 0;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  isActive
                    ? 'text-[#b87333] border-b-2 border-[#b87333] pb-1'
                    : isScrolled
                      ? 'text-[#1c2b3a] hover:text-[#b87333]'
                      : 'text-[#f5f0e8] hover:text-white'
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
              isScrolled || isMobileMenuOpen ? 'text-[#1c2b3a]' : 'text-[#f5f0e8]'
            }`}
            style={!(isScrolled || isMobileMenuOpen) ? { filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))' } : undefined}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#f5f0e8] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 border-t border-[#e5e0d8] py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1c2b3a] font-semibold uppercase tracking-widest text-sm hover:text-[#b87333] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
