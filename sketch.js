function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("black");
}

function draw() {
  noFill();
  if (mouseIsPressed === true) {
    let myColor = lerpColor(color("red"), color("yellow"), frameCount / 120);

    if (frameCount >= 120) {
      stroke(myColor);
    }

    let myColor1 = lerpColor(color("yellow"), color("green"), frameCount / 120);
    if (frameCount >= 240) {
      stroke(myColor1);
    }

    let myColor2 = lerpColor(color("green"), color("blue"), frameCount / 120);
    if (frameCount >= 360) {
      stroke(myColor2);
    }

    let myColor3 = lerpColor(color("blue"), color("red"), frameCount / 120);
    if (frameCount >= 480) {
      stroke(myColor3);
    }

    let myColor4 = lerpColor(color("red"), color("black"), 1);
    if (frameCount >= 600) {
      stroke(myColor4);

      if (frameCount >= 840) {
        noLoop();
        draw();
      }
    }

    translate(width / 2, height / 2);
    rotate(frameCount * 3);

    circle(260, 1, 3);
    circle(260, 0, 3);
    circle(260, 0, 10);
    circle(250, 10, 30);
    circle(220, 0, 3);
    circle(200, 0, 10);

    circle(180, 0, 40);
    circle(170, 0, 10);
    circle(160, 0, 3);
    circle(150, 0, 3);
    circle(130, 10, 5);
    circle(120, 0, 10);
    circle(120, 0, 20);

    circle(100, 0, 1);
    circle(80, 0, 20);
    circle(70, 0, 9);
    circle(50, 0, 15);

    circle(30, 10, 5);
    circle(30, 0, 1);
    circle(20, 5, 1);
    circle(10, 0, 5);
    circle(0, 0, 3);
  }
}
