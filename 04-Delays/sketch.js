let mSound;
let mDelays = [];

function preload() {
  mSound = loadSound("../assets/voice-00.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();
  mSound.amp(1.0);

  for (let i = 0; i < 4; i++) {
    let mDelay = new p5.Delay();
    mDelay.disconnect();
    mDelay.delayTime(0.01);
    mDelay.feedback(0.6);
    mDelay.amp(1.0);

    if (i > 0) {
      mDelays[i - 1].connect(mDelay);
    }

    mDelays.push(mDelay);
  }

  mSound.connect(mDelays[0]);
  mDelays[mDelays.length - 1].connect(p5.soundOut);

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
