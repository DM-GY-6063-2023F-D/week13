let mSound;
let mDelay;

function preload() {
  mSound = loadSound("../assets/voice-00.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();
  mSound.amp(0.5);

  mDelay = new p5.Delay();
  mDelay.disconnect();
  mDelay.delayTime(0.15);
  mDelay.feedback(0.25);
  mDelay.amp(0.5);

  mSound.connect(p5.soundOut);
  mSound.connect(mDelay);
  mDelay.connect(p5.soundOut);

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
