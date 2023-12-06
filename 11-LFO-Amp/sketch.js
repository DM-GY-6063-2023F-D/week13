let mOsc;
let mLfo;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mOsc = new p5.Oscillator("sine");
  mOsc.disconnect();
  mOsc.freq(440);
  mOsc.amp(0.0);

  mLfo = new p5.Oscillator("sine");
  mLfo.disconnect();
  mLfo.freq(40);
  mLfo.amp(1.0);
  mLfo.start();

  mOsc.connect(p5.SoundOut);
  mOsc.amp(mLfo);

  mOsc.start();
}

function draw() {
  background(220, 20, 120);
  let oscF = map(mouseX, 0, width, 50, 1000);
  mOsc.freq(oscF, 0.1);

  let lfoF = map(mouseY, 0, height, 1, 30);
  mLfo.freq(lfoF, 0.1);
}

function mousePressed() {
  mLfo.amp(1, 0.1);
}

function mouseReleased() {
  mLfo.amp(0, 0.1);
}
