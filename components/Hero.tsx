'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToEvents = () => {
    const element = document.querySelector('#events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-float text-center">
          <div className="w-32 h-auto mx-auto mb-6">
            <Image
              src="/images/tygron-logo.png"
              alt="Tygron Logo"
              width={128}
              height={128}
              className="object-contain"
              priority
            />
          </div>

        </div>


        {/* Tagline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          <span className="text-orange-500">Playground & Lounge</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Experience premium gaming with PS4, PS5, Nintendo Switch, and VIP rooms. 
          Join tournaments and unleash your gaming potential!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="https://wa.me/6285122999729?text=Hi, saya ingin booking gaming session di Tygron!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 min-w-[200px]"
          >
            Book Now
          </a>
          <button
            onClick={scrollToEvents}
            className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
          >
            Join Tournament
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-orange-500 mx-auto" />
          <p className="text-gray-400 mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Gaming Elements */}
      <div className="absolute bottom-10 left-10 text-6xl opacity-20 animate-float">
        🕹️
      </div>
      <div className="absolute top-1/4 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        🎯
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        👾
      </div>
    </section>
  );
}