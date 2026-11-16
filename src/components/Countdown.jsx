import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-12-13T10:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown-section" className="py-16 px-4 bg-[#faf8f5] text-center">
      <div className="max-w-md mx-auto">
        {/* Section Title */}
        <p className="text-[#b8845a] text-xs tracking-[0.3em] uppercase font-medium mb-2">
          Save The Date
        </p>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide mb-2">
          Counting The Days
        </h2>

        {/* Ornament divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
          <span className="text-[#c8956e] text-sm">✦</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
        </div>

        {timeLeft.isCompleted ? (
          <div className="py-6 text-[#b8845a] font-cinzel text-lg font-semibold">
            The Blessed Wedding Day is Here! Alhamdu Lillah! 🎉
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl bg-white border border-stone-200/80 shadow-sm"
              >
                <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#b8845a] font-semibold">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-stone-400 mt-6 italic">
          13 December 2026 &middot; Sunday
        </p>
      </div>
    </section>
  );
}
