import React from 'react';
import confetti from 'canvas-confetti';
import { MailOpen, Heart, Sparkles } from 'lucide-react';
import { startBackgroundMusic } from '../utils/audioSynth';

export default function InvitationModal({ isOpen, onClose, setIsPlaying }) {
  if (!isOpen) return null;

  const handleOpen = () => {
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#10b981', '#ffffff', '#fbbf24']
      });
    } catch {
      // Ignored
    }

    // Start soft background melody
    startBackgroundMusic();
    setIsPlaying(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Royal Card Container */}
      <div className="relative w-full max-w-md p-8 md:p-10 rounded-3xl bg-gradient-to-b from-emerald-950 via-stone-900 to-emerald-950 border-2 border-amber-400/50 shadow-2xl text-center overflow-hidden">
        {/* Decorative corner patterns */}
        <div className="absolute top-2 left-2 text-amber-400/40 text-xs">✦</div>
        <div className="absolute top-2 right-2 text-amber-400/40 text-xs">✦</div>
        <div className="absolute bottom-2 left-2 text-amber-400/40 text-xs">✦</div>
        <div className="absolute bottom-2 right-2 text-amber-400/40 text-xs">✦</div>

        {/* Top Islamic Arch & Crescent */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/60"></span>
          <span className="text-xl text-amber-300">🌙</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/60"></span>
        </div>

        {/* Bismillah */}
        <p className="font-arabic text-xl md:text-2xl text-amber-200/90 mb-2 leading-relaxed">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <p className="text-xs uppercase tracking-widest text-amber-400/80 font-medium mb-4">
          The Wedding Celebration Of
        </p>

        {/* Names */}
        <div className="my-5">
          <h2 className="font-serif-title text-2xl md:text-3xl text-stone-100 font-bold tracking-wide">
            Thasleena Nasrin
          </h2>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="w-8 h-px bg-amber-400/40"></span>
            <span className="font-script text-2xl text-amber-300">weds</span>
            <span className="w-8 h-px bg-amber-400/40"></span>
          </div>
          <h2 className="font-serif-title text-2xl md:text-3xl text-stone-100 font-bold tracking-wide">
            Muhammed Murshid
          </h2>
        </div>

        <p className="text-sm text-stone-300/90 font-light mb-6">
          Cordially invite you and your family to grace the blessed wedding celebration and share our joyous moments.
        </p>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-semibold tracking-wider uppercase text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <MailOpen className="w-5 h-5 text-stone-950 group-hover:rotate-12 transition-transform" />
          <span>Open Invitation 💌</span>
          <Sparkles className="w-4 h-4 text-stone-950 animate-pulse" />
        </button>

        <p className="text-[11px] text-amber-300/60 mt-4 italic">
          (Tap anywhere to enter with ambient music)
        </p>
      </div>
    </div>
  );
}

