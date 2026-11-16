import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send } from 'lucide-react';

const INITIAL_WISHES = [
  {
    id: 1,
    name: 'Fathima & Rafeeq',
    message: 'Barakallahu lakuma! Wishing you both an eternal life of happiness and divine peace.',
    date: 'Just now',
    likes: 12,
  },
  {
    id: 2,
    name: 'Shammas & Family',
    message: 'Masha Allah! Heartiest congratulations! May your journey be blessed.',
    date: '1 hour ago',
    likes: 19,
  },
];

export default function DuaWishesWall() {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('thasleena_murshid_wishes');
      return saved ? JSON.parse(saved) : INITIAL_WISHES;
    } catch { return INITIAL_WISHES; }
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    try { localStorage.setItem('thasleena_murshid_wishes', JSON.stringify(wishes)); } catch {}
  }, [wishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    try { confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } }); } catch {}

    setWishes([{
      id: Date.now(), name: name.trim(), message: message.trim(), date: 'Just now', likes: 1,
    }, ...wishes]);
    setName('');
    setMessage('');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-lg mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[#b8845a] text-xs tracking-[0.3em] uppercase font-medium mb-2">
            Blessings
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide">
            Wishes & Dua
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
            <span className="text-[#c8956e] text-sm">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-100 mb-6">
          <div className="space-y-3">
            <input type="text" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 text-sm outline-none focus:border-[#c8956e]" />
            <textarea rows="2" required placeholder="Write a dua or blessing..." value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 text-sm outline-none focus:border-[#c8956e] resize-none" />
            <button type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#b8845a] hover:bg-[#a6754d] text-white text-xs font-medium tracking-wide transition-colors">
              <Send className="w-3.5 h-3.5" />
              <span>Post Wish</span>
            </button>
          </div>
        </form>

        {/* Wishes List */}
        <div className="space-y-3">
          {wishes.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-[#faf8f5] border border-stone-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#c8956e] to-[#d4a574] text-white text-xs font-bold flex items-center justify-center">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-stone-700">{item.name}</span>
                </div>
                <span className="text-[10px] text-stone-400">{item.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed pl-9">
                "{item.message}"
              </p>
              <div className="flex justify-end mt-2">
                <button onClick={() => setWishes(wishes.map(w => w.id === item.id ? { ...w, likes: w.likes + 1 } : w))}
                  className="flex items-center gap-1 text-[11px] text-stone-400 hover:text-pink-500 py-1 px-2 rounded-lg transition-colors">
                  <Heart className="w-3 h-3 text-pink-400" />
                  <span>{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
