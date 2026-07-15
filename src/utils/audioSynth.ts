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
  private nailBuffer: AudioBuffer | null = null;
  
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

  public async preloadNailSound() {
    if (this.nailBuffer) return;
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass();
    }
    try {
      const response = await fetch('/nail.mp3');
      const arrayBuffer = await response.arrayBuffer();
      this.nailBuffer = await this.ctx.decodeAudioData(arrayBuffer);
    } catch (err) {
      console.warn('Preloading nail.mp3 failed:', err);
    }
  }

  public start() {
    if (this.isRunning) return;
    
    // Initialize AudioContext
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    this.ctx = new AudioContextClass();
    this.preloadNailSound();
    
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
    
    this.preloadNailSound();
    
    const now = this.ctx.currentTime;
    
    // Use realistic preloaded nail.mp3 if available
    if (this.nailBuffer) {
      const source = this.ctx.createBufferSource();
      source.buffer = this.nailBuffer;
      
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.5, now);
      // Fade out cleanly at the end of the crop window (350ms) to avoid click artifacts
      gainNode.gain.setValueAtTime(0.5, now + 0.28);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      
      source.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      // Play only the first 0.35 seconds (the first hit)
      source.start(now, 0, 0.35);
      return;
    }
    
    // Fallback: Physical synthesized modeling
    // 1. Initial Impact Transient (High-Pass Filtered White Noise)
    const bufferSize = this.ctx.sampleRate * 0.02; // 20ms burst
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(3500, now);
    
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    
    // 2. Low Physical Thud (Weight of the hammer strike)
    const thud = this.ctx.createOscillator();
    const thudGain = this.ctx.createGain();
    thud.type = 'triangle';
    thud.frequency.setValueAtTime(160, now);
    thud.frequency.exponentialRampToValueAtTime(60, now + 0.08);
    
    thudGain.gain.setValueAtTime(0.24, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    
    thud.connect(thudGain);
    thudGain.connect(this.ctx.destination);
    
    // 3. Metallic Overtones (Nail head resonant frequencies)
    const ring1 = this.ctx.createOscillator();
    const ring2 = this.ctx.createOscillator();
    const ringGain = this.ctx.createGain();
    
    ring1.type = 'sine';
    ring1.frequency.setValueAtTime(2800, now);
    ring1.frequency.exponentialRampToValueAtTime(2600, now + 0.15);
    
    ring2.type = 'sine';
    ring2.frequency.setValueAtTime(4100, now);
    ring2.frequency.exponentialRampToValueAtTime(3900, now + 0.1);
    
    ringGain.gain.setValueAtTime(0.12, now);
    ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    
    ring1.connect(ringGain);
    ring2.connect(ringGain);
    ringGain.connect(this.ctx.destination);
    
    // Start all elements
    noise.start(now);
    thud.start(now);
    ring1.start(now);
    ring2.start(now);
    
    // Stop all oscillators
    thud.stop(now + 0.12);
    ring1.stop(now + 0.18);
    ring2.stop(now + 0.12);
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
