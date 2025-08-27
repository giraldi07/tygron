'use client';

import { Instagram, MessageCircle, Gamepad2 } from 'lucide-react';
import Image from 'next/image';



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <a href="#home" className="block w-32 mb-6">
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

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Gaming lounge terbesar di Bogor dengan fasilitas premium PlayStation, Nintendo Switch, 
              dan VIP rooms. Tempat berkumpulnya komunitas gamer terbaik di Indonesia.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tygron.playground/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/6285122999729"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Pricelist', href: '#pricelist' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Events', href: '#events' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p className="text-sm">
                Jl. DR. Sumeru, RT.03/RW.01,<br />
                Menteng, Kec. Bogor Bar.,<br />
                Kota Bogor, Jawa Barat
              </p>
              <p className="text-sm">
                <strong className="text-white">Phone:</strong><br />
                +62 851-2299-9729
              </p>
              <p className="text-sm">
                <strong className="text-white">Hours:</strong><br />
                Mon-Thu: 10:00-23:00<br />
                Fri-Sun: 10:00-01:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tygron Playground & Lounge. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                Tournament Rules
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}