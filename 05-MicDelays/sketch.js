let mMic;
let isMicOn;
let mDelays = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  mMic = new p5.AudioIn();
  isMicOn = false;
  mMic.disconnect();
  mMic.amp(1.0);

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

  mMic.connect(mDelays[0]);
  mDelays[mDelays.length - 1].connect(p5.soundOut);

  noLoop();
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  if (isMicOn) {
    mMic.stop();
    background(220, 20, 120);
  } else {
    mMic.start();
    background(20, 220, 120);
  }
  isMicOn = !isMicOn;
}
