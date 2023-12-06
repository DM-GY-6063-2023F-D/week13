let mOsc;

let mLfo;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mOsc = new p5.Oscillator("sine");
  mOsc.disconnect();
  mOsc.freq(220);
  mOsc.amp(0.0);

  mLfo = new p5.Oscillator("sine");
  mLfo.disconnect();
  mLfo.freq(5);
  mLfo.amp(0.0);
  mLfo.start();

  mOsc.connect(p5.SoundOut);
  mOsc.freq(mLfo);

  mOsc.start();
}

function draw() {
  background(220, 20, 120);

  let mLfoF = map(mouseX, 0, width, 1, 10);
  mLfo.freq(mLfoF, 0.1);

  let mLfoA = map(mouseY, 0, height, 150, 0);
  mLfo.amp(mLfoA, 0.1);
}

function mousePressed() {
  mOsc.amp(1, 0.1);
}

function mouseReleased() {
  mOsc.amp(0, 0.1);
}
