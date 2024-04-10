let d1, d2, c1, c2;
let backgroundImage;
let spawnedPets = []; 
let fightCheckbox;

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
  
  // Checkbox for the fight
  fightCheckbox = createCheckbox('Fight', false);
  fightCheckbox.position(width / 2, height / 9);
}

function spawnD1() {
  let x = random(0, width / 2); 
  let y = random(height / 2, height); 
  spawnedPets.push({ originalImage: d1, transformedImage: d2, x: x, y: y }); 
}

function spawnC1() {
  let x = random(width / 2, width); 
  let y = random(height / 2, height); 
  spawnedPets.push({ originalImage: c1, transformedImage: c2, x: x, y: y }); 
}

function draw() {
  image(backgroundImage, 0, 0, width, height);
  
  for (let i = 0; i < spawnedPets.length; i++) {
    let pet = spawnedPets[i];
    let imageToDraw = fightCheckbox.checked() ? pet.transformedImage : pet.originalImage;
    
    image(imageToDraw, pet.x, pet.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
