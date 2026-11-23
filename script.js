/* Variables */
let centerX;
let centerY;

let orbitRadius = 120;
let angle = 0;

let speed = 0.03;
let isPaused = false;


function setup() {
    createCanvas(600, 400);

    // Get the center of the canvas
    centerX = width / 2;
    centerY = height / 2;
}

function draw() {
    background(20, 25, 40);

    // The orbital path
    noFill();
    stroke(100, 120, 150);
    circle(centerX, centerY, orbitRadius * 2);

    // Draw the Earth :)
    noStroke();
    fill(70, 170, 255);
    circle(centerX, centerY, 30);
    fill(200, 200, 255);
    ellipse(centerX, centerY - 13, 15, 3);
    fill(70, 250, 105);
    circle(centerX - 3, centerY - 3, 10);
    circle(centerX - 8, centerY - 5, 6);
    circle(centerX + 1, centerY - 4, 6);
    circle(centerX + 7, centerY - 5, 4);
    circle(centerX, centerY + 0.5, 5);
    circle(centerX + 2, centerY + 2.5, 3);
    circle(centerX + 3, centerY + 6, 7);
    circle(centerX + 1.8, centerY + 10, 4);
    fill(200, 200, 255);
    ellipse(centerX, centerY + 13, 8, 2);

    /* --- The math used ---*/
    // Calculate the moving object's position
    // In this project, I used the basic of trigonometry
    // to calculate the position of the orbiting object.
    let x = centerX + orbitRadius * cos(angle);
    let y = centerY + orbitRadius * sin(angle);

    // The orbiting object (moon)
    fill(170, 170, 175);
    circle(x, y, 20);

    // This makes the angle update when not paused
    // Update the angle based on speed,
    // which controls how fast the object orbits around the center.
    if (!isPaused) {
        angle += speed;
    }


    /* --- Display instructions --- */
    fill(255);
    textSize(14);
    textAlign(LEFT);

    text("SPACE: Pause / Resume", 15, 25);
    text("UP / DOWN: Change Speed", 15, 45);
    text("Speed: " + speed.toFixed(3), 15, 70);

    if (isPaused) {
        text("PAUSED", 15, 95);
    }
}

/* Keyboard controls */
function keyPressed() {

    if (key === ' ') {
        isPaused = !isPaused;
    }

    if (keyCode === UP_ARROW) {
        speed += 0.01;
    }

    if (keyCode === DOWN_ARROW) {
        speed = max(0.01, speed - 0.01);
    }
}







//====================
/* Reference code */
//====================
/*  
function getPointOnCircle(cx, cy, r, angleInRadians) {
  const x = cx + r * Math.cos(angleInRadians);
  const y = cy + r * Math.sin(angleInRadians);
  
  return { x, y };
}

// Example usage:
const centerX = 100;
const centerY = 100;
const radius = 50;
const angle = Math.PI / 4; // 45 degrees in radians

const point = getPointOnCircle(centerX, centerY, radius, angle);
console.log(point); // { x: 135.355..., y: 135.355... }
You sent
let angle = 0;

//====================
window.addEventListener('keydown', (event) => {
  // Check if the spacebar was pressed
  if (event.code === 'Space') {
    event.preventDefault(); // Stops the page from scrolling down

    // Advance the angle by 15 degrees
    angle += 15 * (Math.PI / 180);

    const x = 100 + 50 * Math.cos(angle);
    const y = 100 + 50 * Math.sin(angle);
    console.log({ x, y });
  }
});

//====================
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault(); // Prevents the page from scrolling up
    console.log('Up arrow pressed');
  } else if (event.key === 'ArrowDown') {
    event.preventDefault(); // Prevents the page from scrolling down
    console.log('Down arrow pressed');
  }
});
 */
