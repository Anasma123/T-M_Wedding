import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen Couple Photo Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/couple.jpeg"
          alt="Thasleena Nasrin & Muhammed Murshid"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 w-full max-w-lg mx-auto">

        {/* Monogram - T&M */}
        <div className="animate-fade-in-up mb-8">
          <span className="font-script text-5xl sm:text-6xl md:text-7xl text-[#d4a574]"
                style={{ textShadow: '0 2px 20px rgba(212, 165, 116, 0.5)' }}>
            T&M
          </span>
        </div>

        {/* Invite Line */}
        <div className="animate-fade-in-up-delay-1 mb-8">
          <p className="text-white/80 text-xs sm:text-sm tracking-[0.25em] uppercase font-light leading-relaxed">
            We Cordially Invite You To<br />
            The Wedding Ceremony Of
          </p>
        </div>

        {/* Couple Names */}
        <div className="animate-fade-in-up-delay-2 mb-8 space-y-3">
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-[0.08em] leading-tight">
            THASLEENA NASRIN
          </h1>

          <div className="flex items-center justify-center gap-4 my-3">
            <span className="w-14 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#d4a574]/60"></span>
            <span className="font-serif-title text-2xl sm:text-3xl text-[#d4a574] italic font-light">
              &
            </span>
            <span className="w-14 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#d4a574]/60"></span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-[0.08em] leading-tight">
            MUHAMMED<br />MURSHID
          </h1>
        </div>

        {/* Date */}
        <div className="animate-fade-in-up-delay-3">
          <p className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
            Sunday &middot; 13 December 2026
          </p>
        </div>
      </div>
    </section>
  );
}
