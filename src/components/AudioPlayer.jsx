import React, { useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { toggleBackgroundMusic } from '../utils/audioSynth';

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const handleToggle = () => {
    toggleBackgroundMusic((playing) => {
      setIsPlaying(playing);
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={handleToggle}
        className={`group relative flex items-center gap-2 px-3 py-2 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
          isPlaying
            ? 'bg-amber-500/20 border-amber-400/60 text-amber-200 shadow-amber-500/20'
            : 'bg-stone-900/80 border-stone-700/60 text-stone-400 hover:text-stone-200'
        }`}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        aria-label="Toggle Background Music"
      >
        <div className={`relative ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
          <Music className="w-4 h-4 text-amber-300" />
        </div>

        <span className="text-xs font-medium tracking-wider uppercase font-sans pr-1">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>

        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3.5">
            <span className="w-0.5 bg-amber-400 animate-pulse h-2"></span>
            <span className="w-0.5 bg-amber-400 animate-pulse h-3.5" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-0.5 bg-amber-400 animate-pulse h-1.5" style={{ animationDelay: '0.4s' }}></span>
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 opacity-60" />
        )}
      </button>
    </div>
  );
}

