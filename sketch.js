let len;
let angle;
let slider;

function setup() {
  createCanvas(620, 490);
  angleMode(DEGREES);
  slider = createSlider(0, 360, 0, 0.01);
}

function draw() {
  background(0);
  angle = slider.value();

  stroke(255);
  translate(width / 2, height);
  line(0, 0, 0, 0 - len);
  translate(0, 0 - len);
  tree(125);
}

function tree(len) {
  line(0, 0, 0, 0 - len);
  translate(0, 0 - len);
  if (len > 6) {
    push();
    rotate(angle);
    tree(len * 0.66);
    pop();

    push();
    rotate(-angle);
    tree(len * 0.66);
    pop();

  }
}
