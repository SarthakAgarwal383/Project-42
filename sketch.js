var hh,min,ss;
var clock;

function preload(){
  clock=loadSound("clock1.mp3");
}

function setup() {
  createCanvas(800,700);
angleMode(DEGREES);


  //createSprite(400, 200, 50, 50);



}

function draw() {
  background(0,0,0); 
  
  
fill("white");
stroke("aqua");
strokeWeight(8);
textSize(80);
text("Tick Tock",200,100);


  hh= hour();
  min= minute();
  ss= second();

  translate(400,400);
  rotate(-90);

  strokeWeight(8);
  stroke("red");
  noFill();
  var end=map(ss,0,60,0,360);
  arc(0,0,300,300,0,end);

  strokeWeight(8);
  stroke("chartreuse");
  noFill();
  var end2=map(min,0,60,0,360);
  arc(0,0,270,270,0,end2);

  strokeWeight(8);
  stroke("blue");
  noFill();
  var end3=map(hh%12,0,12,-0,360);
  arc(0,0,240,240,0,end3);

  push();
  rotate(end);
  stroke("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(end2);
  stroke("chartreuse");
  line(0,0,75,0);
  pop();

  push();
  rotate(end3);
  stroke("blue");
  line(0,0,50,0);
  pop();

  stroke("black");
  point(0,0)

//if(ss%10===0){
 // clock.play();
//}


  drawSprites();
}