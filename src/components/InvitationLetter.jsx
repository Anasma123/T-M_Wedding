import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function InvitationLetter() {
  return (
    <section id="invitation-letter-section" className="py-16 px-4 bg-white text-center">
      <div className="max-w-lg mx-auto">
        {/* Subtitle / Header */}
        <p className="text-[#b8845a] text-xs tracking-[0.3em] uppercase font-medium mb-2 font-sans">
          Wedding Invitation
        </p>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide mb-2">
          Invitation Letter
        </h2>

        {/* Ornament divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
          <span className="text-[#c8956e] text-sm">✦</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
        </div>

        {/* Luxury Invitation Card Frame */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-[#faf8f5] border-2 border-[#e8d5c4] shadow-sm text-center overflow-hidden">
          {/* Subtle Inner Corner Ornaments */}
          <div className="absolute top-3 left-3 text-[#c8956e]/40 text-xs">✤</div>
          <div className="absolute top-3 right-3 text-[#c8956e]/40 text-xs">✤</div>
          <div className="absolute bottom-3 left-3 text-[#c8956e]/40 text-xs">✤</div>
          <div className="absolute bottom-3 right-3 text-[#c8956e]/40 text-xs">✤</div>

          {/* Monogram / Header Crest */}
          <div className="mb-4">
            <span className="font-script text-3xl sm:text-4xl text-[#b8845a]">
              T & M
            </span>
          </div>

          <p className="text-stone-500 text-xs sm:text-sm tracking-wider uppercase font-light mb-6">
            Together with their families
          </p>

          <p className="text-stone-600 text-sm sm:text-base font-serif italic leading-relaxed max-w-sm mx-auto mb-8">
            we joyfully invite you to celebrate the wedding of
          </p>

          {/* Couple & Parents Box */}
          <div className="space-y-6 my-6">
            {/* Bride */}
            <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/60 shadow-xs">
              <h3 className="font-cinzel text-xl sm:text-2xl text-stone-800 font-semibold tracking-wide">
                Thasleena Nasrin
              </h3>
              <p className="text-xs sm:text-sm text-[#b8845a] font-medium mt-1 font-serif">
                D/O Sadik Muneer & Nadiya
              </p>
            </div>

            {/* Floral / Elegant separator */}
            <div className="flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8956e]/40"></span>
              <span className="font-serif italic text-[#c8956e] text-lg font-light">&</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8956e]/40"></span>
            </div>

            {/* Groom */}
            <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/60 shadow-xs">
              <h3 className="font-cinzel text-xl sm:text-2xl text-stone-800 font-semibold tracking-wide">
                Muhammed Murshid
              </h3>
              <p className="text-xs sm:text-sm text-[#b8845a] font-medium mt-1 font-serif">
                S/O Veeran Musthafa & Fathima
              </p>
            </div>
          </div>

          {/* Wedding Date, Time & Venue Highlight Card */}
          <div className="mt-8 pt-6 border-t border-[#e8d5c4] space-y-3 text-stone-700">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
              <Calendar className="w-4 h-4 text-[#b8845a]" />
              <span className="font-serif">Sunday, 13 December 2026</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-600">
              <Clock className="w-4 h-4 text-[#b8845a]" />
              <span>11:30 AM to 02:30 PM</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-800 font-semibold">
              <MapPin className="w-4 h-4 text-[#b8845a]" />
              <span className="font-cinzel tracking-wide">Regal Avenue Auditorium</span>
            </div>
          </div>

          <p className="text-xs text-stone-400 italic font-light mt-6">
            We request the pleasure of your presence and prayers on this special day
          </p>
        </div>
      </div>
    </section>
  );
}

