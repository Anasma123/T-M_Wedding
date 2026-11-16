import React from 'react';

export default function ChildhoodPhoto() {
  return (
    <section className="py-20 px-4 bg-[#faf8f5] text-center">
      <div className="max-w-lg mx-auto">
        {/* Section Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide mb-1">
          Destined Together
        </h2>
        <div className="flex items-center justify-center gap-3 mt-2 mb-10">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
          <span className="text-[#c8956e] text-xs">✦</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
        </div>

        {/* Clean, Executive Fine-Art Photo Frame (No emojis) */}
        <div className="relative inline-block mx-auto max-w-[340px] w-full">
          {/* Executive Double-Border Art Mount */}
          <div className="p-3 sm:p-4 rounded-3xl bg-white border border-[#e8d5c4] shadow-[0_15px_35px_-10px_rgba(184,132,90,0.18)]">
            <div className="p-1 rounded-2xl border border-[#c8956e]/30">
              <div className="rounded-[0.9rem] overflow-hidden bg-stone-100 relative">
                <img
                  src="/childhood_clean.jpeg"
                  alt="Thasleena & Murshid childhood memories"
                  className="w-full h-auto max-h-[500px] object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-8 space-y-2">
          <p className="font-serif italic text-lg sm:text-xl text-stone-800 font-medium">
            "Two Little Hearts, One Beautiful Destiny"
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-8 h-px bg-[#c8956e]/30"></span>
            <span className="text-[11px] text-[#b8845a] tracking-[0.25em] font-sans uppercase font-medium">
              Thasleena &amp; Murshid
            </span>
            <span className="w-8 h-px bg-[#c8956e]/30"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
