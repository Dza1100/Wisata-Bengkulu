'use client';

import { useState, useEffect } from 'react';
import { Menu, User } from 'lucide-react';
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
        isScrolled ? 'bg-[#f5f0e8]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center relative h-14">
        {/* Bagian Kiri: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-[#1c2b3a] tracking-wide font-[family-name:var(--font-heading)]">
            PesonaBengkulu
          </Link>
        </div>

        {/* Bagian Tengah: Menu Navigasi (Sembunyi di Mobile) */}
        <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                idx === 0 
                  ? 'text-[#2c6e8a] border-b-2 border-[#2c6e8a] pb-1' 
                  : 'text-[#1c2b3a]/80 hover:text-[#2c6e8a]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
