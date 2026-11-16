import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Calendar, Clock, Compass, Copy, Check } from 'lucide-react';

export default function VenueLocation() {
  const venueName = "Regal Avenue Auditorium";
  const googleMapsUrl = "https://maps.app.goo.gl/ub638pSHNLNzrr1y9?g_st=ic";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(venueName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="venue-section" className="py-20 px-4 bg-white text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Category */}
        <p className="text-[#b8845a] text-[11px] tracking-[0.35em] uppercase font-medium mb-2 font-sans">
          Location &amp; Schedule
        </p>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide mb-1">
          Wedding Venue
        </h2>
        <div className="flex items-center justify-center gap-3 mt-2 mb-10">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
          <span className="text-[#c8956e] text-xs">✦</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
        </div>

        {/* Executive Luxury Card (Clean, Normal, No embedded map) */}
        <div className="relative p-7 sm:p-10 rounded-[2rem] bg-[#FAF8F5] border border-[#e8d5c4] shadow-[0_20px_45px_-15px_rgba(184,132,90,0.15)] text-center overflow-hidden">
          {/* Subtle Decorative Corner Accents */}
          <div className="absolute top-4 left-4 text-[#c8956e]/30 text-xs">✤</div>
          <div className="absolute top-4 right-4 text-[#c8956e]/30 text-xs">✤</div>
          <div className="absolute bottom-4 left-4 text-[#c8956e]/30 text-xs">✤</div>
          <div className="absolute bottom-4 right-4 text-[#c8956e]/30 text-xs">✤</div>

          {/* Luxury Crest Badge */}
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white border border-[#e8d5c4] shadow-sm flex items-center justify-center relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#faf4ee] to-[#f3e6d8] flex items-center justify-center text-[#b8845a]">
              <Compass className="w-6 h-6 animate-pulse" style={{ animationDuration: '4s' }} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#b8845a] text-white flex items-center justify-center text-[10px] shadow">
              <MapPin className="w-3 h-3" />
            </div>
          </div>

          {/* Venue Titles */}
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-800 tracking-wider">
            {venueName}
          </h3>

          {/* Elegant Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c8956e]/40 to-transparent mx-auto my-6"></div>

          {/* Date & Time Executive Dual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 text-left">
            {/* Date Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#e8d5c4]/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#faf4ee] border border-[#e8d5c4]/60 flex items-center justify-center text-[#b8845a] flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-sans font-medium">
                  Date
                </span>
                <span className="font-serif text-sm text-stone-800 font-semibold">
                  Sunday, 13 Dec 2026
                </span>
              </div>
            </div>

            {/* Time Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#e8d5c4]/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#faf4ee] border border-[#e8d5c4]/60 flex items-center justify-center text-[#b8845a] flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-sans font-medium">
                  Ceremony Hours
                </span>
                <span className="font-serif text-sm text-stone-800 font-semibold">
                  11:30 AM – 02:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            {/* Primary Action Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#b8845a] via-[#c9956d] to-[#a6754d] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md shadow-[#b8845a]/25 hover:shadow-lg hover:shadow-[#b8845a]/35 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Copy Address Button */}
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white border border-[#e8d5c4] text-stone-700 hover:text-[#b8845a] hover:border-[#b8845a] text-xs font-medium tracking-wide shadow-xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Copy Name</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
