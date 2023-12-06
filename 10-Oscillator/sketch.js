let mOsc;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mOsc = new p5.Oscillator("sine");
  mOsc.disconnect();
  mOsc.freq(440);
  mOsc.amp(0.0);

  mOsc.connect(p5.SoundOut);

  mOsc.start();
}

function draw() {
  background(220, 20, 120);

  let oscF = map(mouseX, 0, width, 50, 1000);
  mOsc.freq(oscF, 0.1);
}

function mousePressed() {
  mOsc.amp(1, 0.1);
}

function mouseReleased() {
  mOsc.amp(0, 0.1);
}

function keyReleased() {
  if (key == " ") {
    let oType = random(["sine", "triangle", "sawtooth", "square"]);
    print(oType);
    mOsc.setType(oType);
  }
}
