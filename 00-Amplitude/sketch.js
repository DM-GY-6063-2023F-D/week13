let mSound;
let mAmp;

function preload() {
  mSound = loadSound("../assets/epic-hip-hop.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mAmp = new p5.Amplitude();
  strokeWeight(2);
  stroke(0);
  noFill();
}

function draw() {
  background(220, 20, 120, 20);

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
