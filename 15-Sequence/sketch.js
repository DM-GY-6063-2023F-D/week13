let mOsc;
let mLfo;
let mEnv;

let NOTE_ATTACK = 0.05;
let NOTE_DECAY = 0.1;
let NOTE_SUSTAIN = 0.0001;
let NOTE_SUSTAIN_AMP = 0.8;
let NOTE_RELEASE = 0.2;
let NOTE_TOTAL = NOTE_ATTACK + NOTE_DECAY + NOTE_SUSTAIN + NOTE_RELEASE;

let FREQS = {
  a: 220,
  b: 247,
  c: 261,
  d: 294,
  e: 329,
  f: 349,
  g: 392,
};

let mLoop;
let mPattern = ["c", "g", "c", "g", "g", "c", "e", "c", "a"];

function setup() {
  createCanvas(windowWidth, windowHeight);

  mOsc = new p5.Oscillator("sine");
  mOsc.disconnect();
  mOsc.freq(0);
  mOsc.amp(0.0);

  mLfo = new p5.Oscillator("sine");
  mLfo.disconnect();
  mLfo.freq(0);
  mLfo.amp(60);
  mLfo.start();

  mEnv = new p5.Envelope();
  mEnv.setADSR(NOTE_ATTACK, NOTE_DECAY, NOTE_SUSTAIN_AMP, NOTE_RELEASE);

  mOsc.connect(p5.SoundOut);
  mOsc.freq(mLfo);
  mOsc.amp(mEnv);
  mOsc.start();

  mLoop = new p5.SoundLoop(onSoundLoop, NOTE_TOTAL);

  noLoop();
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  if (mLoop.isPlaying) {
    mLoop.stop();
  } else {
    mLoop.start();
  }
}

function playNote(noteFreq) {
  mOsc.freq(noteFreq);
  mLfo.freq(noteFreq / 3);
  mEnv.play(0, NOTE_SUSTAIN);
}

function onSoundLoop() {
  let noteIndex = (mLoop.iterations - 1) % mPattern.length;
  let mNote = mPattern[noteIndex];
  let mFreq = mNote in FREQS ? FREQS[mNote] : 2 * FREQS[mNote.toLowerCase()];
  playNote(mFreq);
}
