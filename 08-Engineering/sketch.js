let mSound;

let mGain;
let mFilterLow;
let mFilterHigh;

let mDelay;
let mReverb;

function preload() {
  mSound = loadSound("../assets/epic-hip-hop.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();
  mSound.amp(1.0);

  mGain = new p5.Gain();
  mGain.disconnect();
  mGain.amp(1.0);

  mFilterLow = new p5.Filter("bandpass");
  mFilterLow.disconnect();
  mFilterLow.freq(80);
  mFilterLow.res(6);
  mFilterLow.gain(8.0);
  mFilterLow.amp(2.0);

  mDelay = new p5.Delay();
  mDelay.disconnect();
  mDelay.delayTime(0.33);
  mDelay.feedback(0.6);
  mDelay.amp(1.5);

  mFilterHigh = new p5.Filter("bandpass");
  mFilterHigh.disconnect();
  mFilterHigh.freq(9000);
  mFilterHigh.res(16);
  mFilterHigh.gain(16.0);
  mFilterHigh.amp(4.0);

  mReverb = new p5.Reverb();
  mReverb.disconnect();
  mReverb.set(2, 10, true);
  mReverb.drywet(1.0);
  mReverb.amp(1.5);

  mSound.connect(mFilterLow);
  mSound.connect(mFilterHigh);

  mSound.connect(mGain);
  mGain.connect(p5.soundOut);

  mFilterLow.connect(mDelay);
  mFilterHigh.connect(mReverb);

  mDelay.connect(p5.soundOut);
  mReverb.connect(p5.soundOut);

  noLoop();
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  if (mSound.isPlaying()) {
    mSound.pause();
  } else {
    mSound.play();
  }
}
