'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricelist', href: '#pricelist' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}

          <div className="flex items-center">
            <a href="#home" className="block w-32">
              <Image
                src="/images/tygron-logo.png"
                alt="Tygron Logo"
                width={50} // ukuran default desktop
                height={50} // biar ratio logo tetap bagus
                priority // preload untuk logo
                className="object-contain"
              />
            </a>
          </div>

          {/* <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bebas text-2xl text-white tracking-wider">TYGRON</h1>
              <p className="text-xs text-orange-500 -mt-1">PLAYGROUND & LOUNGE</p>
            </div>
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/6285122999729?text=Hi, saya ingin booking gaming session di Tygron!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left text-white hover:text-orange-500 transition-colors duration-300 py-2"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/6285122999729?text=Hi, saya ingin booking gaming session di Tygron!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}