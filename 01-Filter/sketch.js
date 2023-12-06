let mSound;
let mFilter;
let mAmp;

function preload() {
  mSound = loadSound("../assets/epic-hip-hop.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();

  mFilter = new p5.Filter("bandpass");
  mFilter.disconnect();
  mFilter.res(4);

  mAmp = new p5.Amplitude();

  mSound.connect(mFilter);
  mFilter.connect(p5.soundOut);

  strokeWeight(2);
  stroke(0);
  noFill();
}

function draw() {
  background(220, 20, 120, 20);

  let mFreq = map(mouseX, 0, width, 100, 5000, true);
  mFilter.freq(mFreq);

  let d = map(mAmp.getLevel(), 0, 1, 5, height);
  ellipse(width / 2, height / 2, d, d);
}

function mouseClicked() {
  if (mSound.isPlaying()) {
    mSound.pause();
  } else {
    mSound.play();
  }
}
