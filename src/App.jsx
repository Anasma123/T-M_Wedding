import React from 'react';
import PetalsCanvas from './components/PetalsCanvas';
import Hero from './components/Hero';
import InvitationLetter from './components/InvitationLetter';
import Countdown from './components/Countdown';
import ChildhoodPhoto from './components/ChildhoodPhoto';
import VenueLocation from './components/VenueLocation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 relative selection:bg-amber-200 selection:text-stone-900 font-sans pb-16">
      {/* Falling rose petals */}
      <PetalsCanvas />

      {/* Full-screen Hero — Couple photo background + T&M + Names + Date */}
      <Hero />

      {/* Formal Invitation Letter with Parents & Details (Placed above Countdown) */}
      <InvitationLetter />

      {/* Countdown Timer */}
      <Countdown />

      {/* Childhood Photo — Two Little Hearts, One Beautiful Destiny */}
      <ChildhoodPhoto />

      {/* Venue & Directions to Regal Avenue Auditorium */}
      <VenueLocation />
    </div>
  );
}
