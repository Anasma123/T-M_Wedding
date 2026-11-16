import React from 'react';
import { Heart, Share2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    const inviteText = `*Wedding Invitation* 💍✨\n\nYou're cordially invited to the wedding of *Thasleena Nasrin & Muhammed Murshid* on *Sunday, 13 December 2026*.\n\nView invitation:\n${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(inviteText)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="py-12 px-4 bg-[#faf8f5] border-t border-stone-100 text-center">
      <div className="max-w-md mx-auto space-y-5">
        {/* Monogram */}
        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-[#c8956e] to-[#d4a574] p-0.5 shadow-sm">
          <div className="w-full h-full rounded-full bg-[#faf8f5] flex items-center justify-center">
            <span className="font-script text-lg text-[#b8845a]">T&M</span>
          </div>
        </div>

        <div>
          <h3 className="font-cinzel text-base text-stone-700 font-semibold tracking-wider">
            Thasleena Nasrin & Muhammed Murshid
          </h3>
          <p className="text-xs text-stone-400 italic mt-1">
            "And He created you in pairs." — Quran 78:8
          </p>
        </div>

        {/* Share Button */}
        <button onClick={handleShare}
          className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#b8845a] hover:bg-[#a6754d] text-white text-xs font-medium shadow-sm transition-colors">
          <Share2 className="w-3.5 h-3.5" />
          <span>Share on WhatsApp</span>
        </button>

        {/* Back to top */}
        <button onClick={scrollToTop}
          className="flex items-center justify-center gap-1 mx-auto text-[11px] text-stone-400 hover:text-[#b8845a] transition-colors pt-2">
          <ArrowUp className="w-3 h-3" />
          <span>Back to Top</span>
        </button>

        <p className="text-[10px] text-stone-400 pt-3">
          13 December 2026 &middot; Made with love
        </p>
      </div>
    </footer>
  );
}
