let mOsc;
let mLfo;

let NOTE_RAMP = 0.05;
let NOTE_DURATION = 0.3;
let NOTE_TOTAL = 2 * NOTE_RAMP + NOTE_DURATION;

let FREQS = {
  a: 220,
  b: 247,
  c: 261,
  d: 294,
  e: 329,
  f: 349,
  g: 392,
};

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

  mOsc.connect(p5.SoundOut);
  mOsc.freq(mLfo);
  mOsc.start();

  noLoop();
}

function draw() {
  background(220, 20, 120);
}

function keyTyped() {
  if (key.toLowerCase() in FREQS) {
    mOsc.amp(0);
    let mF = key in FREQS ? FREQS[key] : 2 * FREQS[key.toLowerCase()];
    mOsc.freq(mF);
    mLfo.freq(mF / 3);
    mOsc.amp(1, NOTE_RAMP);
    mOsc.amp(0, NOTE_RAMP, NOTE_RAMP + NOTE_DURATION);
  }
}
