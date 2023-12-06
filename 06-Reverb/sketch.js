let mSound;
let mReverb;

function preload() {
  mSound = loadSound("../assets/voice-00.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();
  mSound.amp(0.55);

  mReverb = new p5.Reverb();
  mReverb.disconnect();
  mReverb.set(20, 50);
  mReverb.drywet(1.0);
  mReverb.amp(0.45);

  mSound.connect(mReverb);
  mSound.connect(p5.soundOut);
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
