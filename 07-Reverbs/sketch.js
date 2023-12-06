let mSound;
let mReverbs = [];

function preload() {
  mSound = loadSound("../assets/voice-00.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSound.disconnect();
  mSound.amp(1.0);

  for (let i = 0; i < 8; i++) {
    let mReverb = new p5.Reverb();
    mReverb.disconnect();
    mReverb.set(32, 99.0);
    mReverb.drywet(1.0);
    mReverb.amp(1.0);

    if (i > 0) {
      mReverbs[i - 1].connect(mReverb);
    }

    mReverbs.push(mReverb);
  }

  mSound.connect(mReverbs[0]);
  mReverbs[mReverbs.length - 1].connect(p5.soundOut);

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
