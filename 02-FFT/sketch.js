let mSound;
let mFilter;
let mFFT;

let FREQ_LABELS = ["bass", "lowMid", "mid", "highMid", "treble"];
let MAX_DIAM;

function preload() {
  mSound = loadSound("../assets/epic-deep-house.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();

  mFilter = new p5.Filter("bandpass");
  mFilter.disconnect();
  mFilter.res(4);
  mFilter.gain(8.0);

  mFFT = new p5.FFT();

  mSound.connect(mFilter);
  mFilter.connect(p5.soundOut);

  strokeWeight(2);
  stroke(0);
  noFill();
  MAX_DIAM = height / FREQ_LABELS.length;
}

function draw() {
  background(220, 20, 120, 20);

  let mFreq = map(mouseX, 0, width, 100, 5000, true);
  mFilter.freq(mFreq);

  mFFT.analyze();

  for (let i = 0; i < FREQ_LABELS.length; i++) {
    let y = map(i, 0, FREQ_LABELS.length, MAX_DIAM / 2, height + MAX_DIAM / 2);
    let d = map(mFFT.getEnergy(FREQ_LABELS[i]), 0, 255, 5, MAX_DIAM);
    ellipse(width / 2, height - y, d, d);
  }
}

function mouseClicked() {
  if (mSound.isPlaying()) {
    mSound.pause();
  } else {
    mSound.play();
  }
}
