let mOsc;
let mLfo;
let mEnv;

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

  mEnv = new p5.Envelope();
  mEnv.setADSR(0.05, 0.1, 0.8, 0.5);

  mOsc.connect(p5.SoundOut);
  mOsc.freq(mLfo);
  mOsc.amp(mEnv);
  mOsc.start();

  noLoop();
}

function draw() {
  background(220, 20, 120);
}

function keyTyped() {
  if (key.toLowerCase() in FREQS) {
    let mF = key in FREQS ? FREQS[key] : 2 * FREQS[key.toLowerCase()];
    mOsc.freq(mF);
    mLfo.freq(mF / 3);
    mEnv.triggerAttack();
  }
}

function keyReleased() {
  mEnv.triggerRelease();
}
