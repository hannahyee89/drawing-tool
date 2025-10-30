function preload(){
  imgBlossom = loadImage('assets/blossom.png');
  imgStar = loadImage('assets/star.png');
  imgApple = loadImage('assets/apple.png');
  imgSwirl = loadImage('assets/swirl.png');
  imgAirbrush = loadImage('assets/airbrush.png');
  imgHouse = loadImage('assets/house.png');
}

function setup() {
  imageMode(CENTER);
  shape = circle;
  createCanvas(1800,1000);
  aButton = createButton('round');
  aButton.position(42,110);
  aButton.mousePressed(circleDraw);
  bButton = createButton('square');
  bButton.position(39,150);
  bButton.mousePressed(squareDraw);
  cButton = createButton('slant');
  cButton.position(44,190);
  cButton.mousePressed(slantDraw);
  dButton = createButton('airbrush');
  dButton.position(35,230);
  dButton.mousePressed(airbrush);
  eButton = createButton('ERASER');
  eButton.position(36,270);
  eButton.mousePressed(eraser);
  fButton = createButton('blossom');
  fButton.position(36,340);
  fButton.mousePressed(blossomDraw);
  gButton = createButton('star');
  gButton.position(47,380);
  gButton.mousePressed(starDraw);
  hButton = createButton('apple');
  hButton.position(42,420);
  hButton.mousePressed(appleDraw);
  iButton = createButton('swirl');
  iButton.position(45,460);
  iButton.mousePressed(swirlDraw);
  jButton = createButton('Dr. House');
  jButton.position(31,500);
  jButton.mousePressed(houseDraw);
  background('white');
  stroke('black');
  fill(200);
  quad(28,30,102,30,102,560,28,560);
  quad(170,8,170,60,750,60,750,8);
  quad(770,8,770,60,1000,60,1000,8);
  noStroke();
  fill(0);
  text('R', 180, 45);
  text('G', 380, 45);
  text('B', 580, 45);
  text('PEN SIZE',780,42);
  text('PEN SHAPE', 31, 65);
  textSize(10);
  text('CHANGE COLOR (RGB)', 400, 20);
  text('Basic', 52, 90);
  text('Special', 48, 320);
  textSize(8);
  text('*',98,505);
  text('*pen color must not\nbe black to see this\nimage.', 30, 530);
  rSlide = createSlider(0,255,0,0);
  rSlide.position(200,30);
  gSlide = createSlider(0,255,0,0);
  gSlide.position(400,30);
  bSlide = createSlider(0,255,0,0);
  bSlide.position(600,30);
  sSlide = createSlider(0,80,40,0);
  sSlide.position(850,30);
}
function circleDraw(){
  shape = circle;
}
function squareDraw(){
  shape = square;
}
function slantDraw(){
  shape = 'slant';
}
function airbrush(){
  shape = 'airbrush';
}
function blossomDraw(){
  shape = 'blossom';
}
function starDraw(){
  shape = 'star';
}
function appleDraw(){
  shape = 'apple';
}
function swirlDraw(){
  shape = 'swirl';
}
function houseDraw(){
  shape = 'house';
}
function eraser(){
  shape = 'eraser';
}
function draw() {
  let r = rSlide.value();
  let g = gSlide.value();
  let b = bSlide.value();
  let s = sSlide.value();
  fill(r, g, b);
  tint(r, g, b);
  if (mouseIsPressed && mouseY > 60+s/2 && mouseX > 100+s/2 && shape==circle){
    circle(mouseX, mouseY, s);
  }
  if (mouseIsPressed && mouseY > 60 && mouseX > 100 && shape==square){
    square(mouseX, mouseY, s);
  }
  if (mouseIsPressed && mouseY > 60+s && mouseX > 100+s/4 && shape=='slant'){
    quad(mouseX-s/4, mouseY+s, mouseX+s/4, mouseY+s/4, mouseX+s/4, mouseY-s, mouseX-s/4, mouseY-s/4);
  }
  if (mouseIsPressed && mouseY > 60+s/4 && mouseX > 100+s/4 && shape=='airbrush'){
    image(imgAirbrush, mouseX, mouseY, s, s);
  }
  if (mouseIsPressed && mouseY > 60 && mouseX > 100 && shape=='blossom'){
    image(imgBlossom, mouseX, mouseY, s, s);
  }
  if (mouseIsPressed && mouseY > 60 && mouseX > 100 && shape=='star'){
    image(imgStar, mouseX, mouseY, s, s);
  }
  if (mouseIsPressed && mouseY > 60 && mouseX > 100 && shape=='apple'){
    image(imgApple, mouseX, mouseY, s, s);
  }
  if (mouseIsPressed && mouseY > 60 && mouseX > 100 && shape=='swirl'){
    image(imgSwirl, mouseX, mouseY, s, s);
  }
  if (mouseIsPressed && mouseY > 60 && mouseX > 100 && shape=='house'){
    image(imgHouse, mouseX, mouseY, s, s);
  }
  if (mouseIsPressed && mouseY > 60+s/2 && mouseX > 102+s/2 && shape=='eraser'){
    erase();
    circle(mouseX, mouseY, s);
    noErase();
  }
}
