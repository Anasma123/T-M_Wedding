import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, Users } from 'lucide-react';

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'attending',
    wishes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 }, colors: ['#d4a574', '#c8956e', '#ffffff', '#f5e6d3'] });
    } catch {}

    const attendanceText = formData.attendance === 'attending'
      ? '✅ Yes, Insha Allah attending!'
      : '💐 Sending prayers from afar';

    const message = `*Assalamu Alaikum!* ✨
*Wedding RSVP — Thasleena Nasrin & Muhammed Murshid*
━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
👥 *Attendees:* ${formData.guests}
🎉 *Status:* ${attendanceText}
${formData.wishes ? `💌 *Wishes:* ${formData.wishes.trim()}\n` : ''}
📅 *Date:* 13 December 2026
━━━━━━━━━━━━━━━━
Barakallahu Lakuma! 🤍`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    setTimeout(() => window.open(whatsappUrl, '_blank'), 700);
  };

  return (
    <section id="rsvp-section" className="py-16 px-4 bg-[#faf8f5]">
      <div className="max-w-lg mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-100 shadow-sm">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-[#b8845a] text-xs tracking-[0.3em] uppercase font-medium mb-2">
              Kindly Respond
            </p>
            <h2 className="font-cinzel text-2xl sm:text-3xl text-stone-800 font-semibold tracking-wide">
              RSVP
            </h2>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8956e]/50"></span>
              <span className="text-[#c8956e] text-sm">✦</span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8956e]/50"></span>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-lg text-stone-800 font-semibold mb-1">
                Jazakallahu Khairan!
              </h3>
              <p className="text-sm text-stone-500 max-w-xs mx-auto">
                Thank you for your response. We look forward to celebrating with you!
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-xs text-[#b8845a] hover:underline">
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text" required placeholder="e.g. Irfan & Family"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-stone-200 text-stone-800 placeholder-stone-400 text-sm outline-none focus:border-[#c8956e] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">
                  Will you attend?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${formData.attendance === 'attending' ? 'bg-[#b8845a]/10 border-[#c8956e] text-[#b8845a]' : 'bg-white border-stone-200 text-stone-400 hover:text-stone-600'}`}>
                    🎉 Yes, Insha Allah
                  </button>
                  <button type="button" onClick={() => setFormData({ ...formData, attendance: 'not_attending' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${formData.attendance === 'not_attending' ? 'bg-[#b8845a]/10 border-[#c8956e] text-[#b8845a]' : 'bg-white border-stone-200 text-stone-400 hover:text-stone-600'}`}>
                    💐 Regretfully No
                  </button>
                </div>
              </div>

              {formData.attendance === 'attending' && (
                <div>
                  <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-stone-200 text-stone-800 text-sm outline-none appearance-none cursor-pointer focus:border-[#c8956e]">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Family</option>
                    </select>
                    <Users className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">
                  Wishes (Optional)
                </label>
                <textarea rows="2" placeholder="Write a dua or blessing..." value={formData.wishes}
                  onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-stone-200 text-stone-800 placeholder-stone-400 text-sm outline-none focus:border-[#c8956e] resize-none"
                ></textarea>
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#b8845a] hover:bg-[#a6754d] text-white text-sm font-medium tracking-wide shadow-sm transition-colors">
                <Send className="w-4 h-4" />
                <span>Send RSVP via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
