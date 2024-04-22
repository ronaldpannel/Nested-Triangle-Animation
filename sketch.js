let size;
let angle;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  rectMode(CENTER);
  size = 50;
  angle = 0;
}

function draw() {
  background(0);
  for (let i = size; i < mouseX; i += size) {
    for (let j = size; j < mouseY; j += size) {
      noFill();
      stroke(mouseX - i, i, mouseY - j);
      strokeWeight(3);
      let d = dist(mouseX, mouseY, i + width / 2, j + height / 2);
      let r = d / 5;
      push();
      translate(i, j);
      rotate(-angle);
      triangle(0, 0, size/2, size, -size, 0);
      // triangle(30, 75, 58, 20, 86, 75);

      pop();
      push();
      translate(i, j);
      rotate(angle);
      triangle(0, 0, (size / 2) * 0.5, size * 0.5, -size * 0.5, 0);
      pop();
      angle += 0.01;
    }
  }
}

// function windowResized() {
//   resizeCanvas(600, 600);

// }
