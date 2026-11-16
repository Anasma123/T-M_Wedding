import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventsTimeline() {
  const events = [
    {
      id: 1,
      title: 'Nikah Ceremony',
      subtitle: 'വിശുദ്ധ നിക്കാഹ്',
      date: 'Sunday, 13 December 2026',
      time: '11:00 AM',
      venue: 'Grand Convention Centre',
      description: 'The sacred nuptial bond according to the blessed Sunnah, followed by special prayers.',
      icon: '💍',
    },
    {
      id: 2,
      title: 'Wedding Reception',
      subtitle: 'വലീമ സൽക്കാരം',
      date: 'Sunday, 13 December 2026',
      time: '12:30 PM – 04:00 PM',
      venue: 'Royal Banquet Hall',
      description: 'Join us for the traditional feast, blessings, and celebrations.',
      icon: '🍽️',
    },
    {
      id: 3,
      title: 'Mehendi Night',
      subtitle: 'മൈലാഞ്ചി രാവ്',
      date: 'Saturday, 12 December 2026',
      time: '07:00 PM Onwards',
      venue: "Bride's Residence",
      description: 'An enchanting evening of henna, warmth, and cherished memories.',
      icon: '🌿',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#faf8f5]">
      <div className="max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-[#b8845a] text-xs tracking-[0.3em] uppercase font-medium mb-2">
            Programs
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide">
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
            <span className="text-[#c8956e] text-sm">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
          </div>
        </div>

        {/* Events */}
        <div className="space-y-5">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{evt.icon}</span>
                <div className="flex-1">
                  <h3 className="font-cinzel text-base sm:text-lg font-semibold text-stone-800">
                    {evt.title}
                  </h3>
                  <p className="text-[#b8845a] text-xs font-medium mb-2">
                    {evt.subtitle}
                  </p>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed mb-3">
                    {evt.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-[11px] text-stone-500">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#faf8f5] border border-stone-100">
                      <Calendar className="w-3 h-3 text-[#c8956e]" />
                      {evt.date}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#faf8f5] border border-stone-100">
                      <Clock className="w-3 h-3 text-[#c8956e]" />
                      {evt.time}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#faf8f5] border border-stone-100">
                      <MapPin className="w-3 h-3 text-[#c8956e]" />
                      {evt.venue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
