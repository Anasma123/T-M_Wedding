// Web Audio API ambient wedding melody generator
// Generates a soft, romantic, peaceful harp/flute ambient background music
// Requires no external audio file, runs 100% offline and in all modern browsers!

let audioCtx = null;
let isPlaying = false;
let timeoutIds = [];

const NOTES = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  G4: 392.00,
  A4: 440.00,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  G5: 783.99,
  A5: 880.00
};

// Soothing pentatonic melody reminiscent of soft acoustic strings & oriental flute
const MELODY = [
  { note: NOTES.C4, dur: 1.2, delay: 0 },
  { note: NOTES.E4, dur: 1.2, delay: 0.6 },
  { note: NOTES.G4, dur: 1.6, delay: 1.2 },
  { note: NOTES.C5, dur: 2.0, delay: 1.8 },
  
  { note: NOTES.A4, dur: 1.4, delay: 3.2 },
  { note: NOTES.G4, dur: 1.2, delay: 3.8 },
  { note: NOTES.E4, dur: 1.6, delay: 4.4 },
  { note: NOTES.D4, dur: 2.2, delay: 5.0 },
  
  { note: NOTES.E4, dur: 1.2, delay: 6.4 },
  { note: NOTES.G4, dur: 1.2, delay: 7.0 },
  { note: NOTES.A4, dur: 1.5, delay: 7.6 },
  { note: NOTES.C5, dur: 2.2, delay: 8.2 },
  
  { note: NOTES.D5, dur: 1.4, delay: 9.6 },
  { note: NOTES.C5, dur: 1.6, delay: 10.2 },
  { note: NOTES.A4, dur: 1.8, delay: 10.8 },
  { note: NOTES.G4, dur: 2.5, delay: 11.4 },
];

function playTone(freq, duration, timeOffset, gainNode) {
  if (!audioCtx || !isPlaying) return;
  
  try {
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();
    
    // Sine + lowpass filter for gentle wooden flute / harp sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + timeOffset);
    
    // Smooth bell-like envelope
    const startTime = audioCtx.currentTime + timeOffset;
    noteGain.gain.setValueAtTime(0, startTime);
    noteGain.gain.linearRampToValueAtTime(0.08, startTime + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    
    osc.connect(noteGain);
    noteGain.connect(gainNode);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  } catch {
    // Ignore audio context errors
  }
}

export function startBackgroundMusic() {
  if (isPlaying) return;
  
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    isPlaying = true;
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.7, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
    
    const loopDuration = 13000; // 13 seconds loop
    
    const scheduleLoop = () => {
      if (!isPlaying) return;
      
      MELODY.forEach(({ note, dur, delay }) => {
        playTone(note, dur, delay, masterGain);
      });
      
      const tid = setTimeout(scheduleLoop, loopDuration);
      timeoutIds.push(tid);
    };
    
    scheduleLoop();
  } catch (err) {
    console.warn("Audio playback notice:", err);
  }
}

export function stopBackgroundMusic() {
  isPlaying = false;
  timeoutIds.forEach(id => clearTimeout(id));
  timeoutIds = [];
  
  if (audioCtx && audioCtx.state !== 'closed') {
    try {
      audioCtx.suspend();
    } catch {
      // Ignored
    }
  }
}

export function toggleBackgroundMusic(callback) {
  if (isPlaying) {
    stopBackgroundMusic();
    if (callback) callback(false);
  } else {
    startBackgroundMusic();
    if (callback) callback(true);
  }
}

