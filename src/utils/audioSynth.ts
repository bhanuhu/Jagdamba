// Web Audio API ambient pad synthesizer for a premium spatial luxury soundscape.
// Uses custom oscillators, low-pass filter modulation, and chord progressions.

class AmbientSynth {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private chordInterval: any = null;
  private isRunning: boolean = false;
  
  // Luxury chord progression frequencies (hz)
  // 1. Amaj9: A1(55), E2(82.4), C#3(138.6), G#3(207.7), B3(246.9)
  // 2. C#m9: C#2(65.4), G#2(103.8), E3(164.8), B3(246.9), D#4(311.1)
  // 3. F#m11: F#1(46.2), C#2(65.4), A2(110), E3(164.8), B3(246.9)
  // 4. Bsus9: B1(61.7), F#2(92.5), A2(110), C#3(138.6), E3(164.8)
  private chords = [
    [55.00, 82.41, 138.59, 207.65, 246.94], // Amaj9
    [65.41, 103.83, 164.81, 246.94, 311.13], // C#m9
    [46.25, 65.41, 110.00, 164.81, 246.94],  // F#m11
    [61.74, 92.50, 110.00, 138.59, 164.81]   // Bsus9
  ];
  private currentChordIndex = 0;

  public start() {
    if (this.isRunning) return;
    
    // Initialize AudioContext
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    this.ctx = new AudioContextClass();
    
    // Master gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
    
    // Filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(300, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(3, this.ctx.currentTime);
    this.filter.connect(this.masterGain);
    
    // LFO for filter cutoff sweep (creates breathing sound)
    this.lfo = this.ctx.createOscillator();
    this.lfo.type = 'sine';
    this.lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // very slow sweep (12 seconds)
    
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(150, this.ctx.currentTime); // sweep bounds: 150hz to 450hz
    
    this.lfo.connect(lfoGain);
    if (this.filter) {
      lfoGain.connect(this.filter.frequency);
    }
    this.lfo.start();

    // Spawn oscillators
    const chord = this.chords[this.currentChordIndex];
    this.oscillators = chord.map((freq, index) => {
      if (!this.ctx || !this.filter) throw new Error();
      const osc = this.ctx.createOscillator();
      // Alternate waveform styles for rich harmonics
      osc.type = index % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      const oGain = this.ctx.createGain();
      // Low volumes so it is a subtle backdrop hum, not blasting noise
      const volume = index === 0 ? 0.08 : 0.04;
      oGain.gain.setValueAtTime(volume, this.ctx.currentTime);
      
      osc.connect(oGain);
      oGain.connect(this.filter);
      
      osc.start();
      return { osc, gain: oGain };
    });

    // Fade in master gain smoothly (2 seconds)
    this.masterGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 2.0);
    
    this.isRunning = true;

    // Start chord cycle
    this.chordInterval = setInterval(() => {
      this.transitionToNextChord();
    }, 10000); // Transition chords every 10 seconds
  }

  private transitionToNextChord() {
    if (!this.ctx || !this.isRunning) return;
    
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
    const nextChord = this.chords[this.currentChordIndex];
    const transitionTime = 5.0; // 5 seconds long portamento fade
    const now = this.ctx.currentTime;
    
    this.oscillators.forEach(({ osc }, index) => {
      const targetFreq = nextChord[index % nextChord.length];
      osc.frequency.exponentialRampToValueAtTime(targetFreq, now + transitionTime);
    });
  }

  public playHammerHit() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    
    const now = this.ctx.currentTime;
    
    // Low wood thump (wood block tone)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(180, now);
    osc1.frequency.exponentialRampToValueAtTime(75, now + 0.1);
    
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.linearRampToValueAtTime(0, now + 0.1);
    
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    
    // High metal tap (nail stroke)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(950, now);
    osc2.frequency.exponentialRampToValueAtTime(300, now + 0.04);
    
    gain2.gain.setValueAtTime(0.12, now);
    gain2.gain.linearRampToValueAtTime(0, now + 0.05);
    
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    
    osc1.start(now);
    osc2.start(now);
    
    osc1.stop(now + 0.12);
    osc2.stop(now + 0.06);
  }

  public stop() {
    if (!this.isRunning || !this.ctx || !this.masterGain) return;
    
    clearInterval(this.chordInterval);
    const now = this.ctx.currentTime;
    
    // Fade out smoothly (0.5 seconds)
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0, now + 0.5);
    
    setTimeout(() => {
      if (this.ctx && !this.isRunning) {
        this.oscillators.forEach(({ osc }) => {
          try { osc.stop(); } catch(e) {}
        });
        if (this.lfo) {
          try { this.lfo.stop(); } catch(e) {}
        }
        this.ctx.close();
        this.ctx = null;
        this.oscillators = [];
        this.masterGain = null;
        this.filter = null;
        this.lfo = null;
      }
    }, 600);
    
    this.isRunning = false;
  }
}

export const ambientSynth = new AmbientSynth();
