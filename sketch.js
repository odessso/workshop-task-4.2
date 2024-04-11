let d1, d2, c1, c2;
let backgroundImage;
let spawnedPets = []; // Array to store spawned pets
let angerSlider;
let fightCheckbox;
let sliderLabel;

function preload() {
  backgroundImage = loadImage('images/expanded.park.bg.png');
  d1 = loadImage('images/dog.png');
  d2 = loadImage('images/angrydog.png');
  c1 = loadImage('images/cat.png');
  c2 = loadImage('images/angrycat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Button for spawning dog
  let woofButton = createButton('woof');
  woofButton.position(width / 4, height / 9);
  woofButton.mousePressed(spawnD1);
  
  // Button for spawning cat
  let meowButton = createButton('meow');
  meowButton.position(width / 1.5, height / 9);
  meowButton.mousePressed(spawnC1);
  
  // Checkbox for transformation
  fightCheckbox = createCheckbox('Fight', false);
  fightCheckbox.position(width / 2.2, height / 12);
  
  // Slider for controlling shaking effect
  angerSlider = createSlider(0, 20, 0); // Min value: 0, Max value: 20, Initial value: 0
  angerSlider.position(width / 2.5, height / 5);
  angerSlider.input(updateLabelPosition); // Call updateLabelPosition() when slider value changes
  
  // Label for the slider
  sliderLabel = createSpan('Anger them');
  sliderLabel.style('color', '#000'); // Set label color
  updateLabelPosition(); // Initially position the label
}

function spawnD1() {
  let x = random(0, width / 2); // Random x-coordinate from 0 to half of the canvas width
  let y = random(height / 2, height); // Random y-coordinate from half of the canvas height to the canvas height
  spawnedPets.push({ originalImage: d1, transformedImage: d2, x: x, y: y }); // Add spawned d1 to the array
}

function spawnC1() {
  let x = random(width / 2, width); // Random x-coordinate from half of the canvas width to the canvas width
  let y = random(height / 2, height); // Random y-coordinate from half of the canvas height to the canvas height
  spawnedPets.push({ originalImage: c1, transformedImage: c2, x: x, y: y }); // Add spawned c1 to the array
}

function draw() {
  image(backgroundImage, 0, 0, width, height);
  
  // Draw each spawned pet from the array
  for (let i = 0; i < spawnedPets.length; i++) {
    let pet = spawnedPets[i];
    let shakeAmount = angerSlider.value(); // Get the value from the slider
    let shakeX = random(-shakeAmount, shakeAmount);
    let shakeY = random(-shakeAmount, shakeAmount);
    let imageToDraw = fightCheckbox.checked() ? pet.transformedImage : pet.originalImage; // Use transformed image if checkbox is checked
    
    // Draw the image with shaking effect
    image(imageToDraw, pet.x + shakeX, pet.y + shakeY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateLabelPosition() {
  // Update the position of the label to be aligned with the slider
  sliderLabel.position(angerSlider.x + 10, angerSlider.y - 25);
}

