import React from 'react';

export default function IslamicBlessings() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-lg mx-auto">
        {/* Bismillah */}
        <p className="font-arabic text-[#b8845a] text-xl sm:text-2xl font-normal mb-4">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#c8956e]/40"></span>
          <span className="text-[#c8956e] text-xs">✦</span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#c8956e]/40"></span>
        </div>

        {/* Sunnah Marriage Dua */}
        <p className="font-arabic text-stone-700 text-lg sm:text-xl leading-loose mb-3">
          بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>

        <p className="text-stone-500 text-xs sm:text-sm italic font-light leading-relaxed max-w-md mx-auto mb-6 px-4">
          "May Allah bless you both, shower His blessings upon you, and unite you both in goodness."
        </p>

        {/* Quran Verse */}
        <div className="mt-8 p-6 rounded-2xl bg-[#faf8f5] border border-stone-100">
          <p className="font-arabic text-stone-600 text-base sm:text-lg leading-loose mb-3">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="text-stone-500 text-xs italic font-light leading-relaxed max-w-sm mx-auto">
            "And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
          </p>
          <p className="text-[#b8845a] text-[10px] tracking-[0.2em] uppercase mt-3 font-medium">
            — Surah Ar-Rum 30:21
          </p>
        </div>
      </div>
    </section>
  );
}

