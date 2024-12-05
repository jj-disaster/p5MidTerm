let calculated
let tripointcolor = []
let trilinecolor = []
let squarepointcolor = []
let squarelinecolor = []
let a 
let b = 180
let d = 1000000
let x18 = []
let y18 = []
let a3 = []
let x3 = []
let y3 = []
let z3 = []
//square
let x5 = [-50,50,50,-50,-50,50,50,-50,-50]
let y5 = [50,50,-50,-50,-50,-50,50,50,50]
let z5 = [-50,-50,-50,-50,50,50,50,50,-50]
let x6 = []
let y6 = []
//triangle
let x2 = [-50,50,50,-50,0]
let y2 = [-50,-50,50,50,0]
let z2 = [50,50,50,50,-50]
let x1 = []
let y1 = []
let z1 = []
let z0 = []
let pl = []
let x4 = []
let y4 = []
let stretchx = 1
let stretchy = 1
let stretchz = 1
function lines(p1,p2){
  line(x1[p1]+width/2,y1[p1]+width/2,x1[p2]+width/2,y1[p2]+width/2)
}
function linesqr(p1,p2){
  line(x6[p1]+width/2,y6[p1]+width/2,x6[p2]+width/2,y6[p2]+width/2)
}
function points(x1,y1,n){
  strokeWeight(7)
  for (i = 0; i < n; i++){
  point(x1[i]+width/2,y1[i]+width/2)
//   text(i,x1[i]+width/2,y1[i]+width/2)
  }   
}

function remap(a1,a2,mod,a3) {
  a3 = []
  for (let i = 0; i < 8; i++) {
    calculated = a1[i] + mod;
    append(a3, calculated);
    // console.log(calculated)
  }
  return a2 = a3
}

let calculated1
let calculated2


function ctoc(x0,y0,z0){
    a2 = [];
    b2 = [];
  for (let i = 0; i < 8; i++) {
    calculated1 = (sqrt(sq(x0[i])+sq(y0[i])))*cos(atan2(x0[i],y0[i])+a)
    append(a2, calculated1);
    // console.log(calculated1)
    
  }
    
  for (let i = 0; i < 8; i++) {
    calculated2 = (sqrt(sq(x0[i]+y0[i])))*sin(b)*sin(a+  (atan2(x0[i],y0[i])))+z0[i]*cos(b);
    append(b2, calculated2);
  }
    return x1 = a2, y1 = b2
  }
function ctocsqr(x0,y0,z0){
    a2 = [];
    b2 = [];
  for (let i = 0; i < 8; i++) {
    calculated1 = (sqrt(sq(x0[i])+sq(y0[i])))*cos(atan2(x0[i],y0[i])+a)
    append(a2, calculated1);
    // console.log(calculated1)
    
  }
    
  for (let i = 0; i < 8; i++) {
    calculated2 = (sqrt(sq(x0[i]+y0[i])))*sin(b)*sin(a+  (atan2(x0[i],y0[i])))+z0[i]*cos(b);
    append(b2, calculated2);
  }
    return x6 = a2, y6 = b2
  }
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
    }
function draw(){
 
  angleMode(DEGREES)
  let tripointcolor =[map(sin(frameCount*0.5),-1,1,100, 255), map(cos(frameCount*0.5),-1,1,50, 150), map(sin(frameCount*0.5),-1,1,255, 100),255]
  a = -frameCount*0.5

  background(255,255,255,50);

text("JJ LaDue",190,180);
{  push() //tri
  translate(100,100)
  ctoc(x2,y2,z2)
  strokeWeight(5)
  stroke(tripointcolor)
  points(x1,y1,52)
  strokeWeight(3)
  //awesome triangle
  lines(0,1)
  lines(0,3)
  lines(0,4)
  lines(4,1)
  lines(4,2)
  lines(4,3)
  lines(2,3)
  lines(2,1)
 pop()
} //triangle 
{  push()
  let squarelinecolor =[map(sin(frameCount*0.5),-1,1,255, 150), map(cos(frameCount*0.5),-1,1,200, 130), map(sin(frameCount*0.5),-1,50,100, 100),255]
 a = frameCount*0.5
  // // console.log(x3)
  // remap(y2,y3,stretchy,pl)
  // remap(z2,z3,stretchz,pl)
 translate(-100,-100)
 stroke(squarelinecolor)
  ctocsqr(x5,y5,z5)
  strokeWeight(5)
  points(x6,y6,52)
  strokeWeight(3)
  //cubes
  linesqr(0,1)
  linesqr(0,3)
  linesqr(0,7)
  linesqr(3,4)
  linesqr(2,1)
  linesqr(3,2)
  linesqr(2,5)
  linesqr(4,7)
  linesqr(5,4)
  linesqr(5,6)
  linesqr(7,6)
  linesqr(1,6)

 pop()
} //cube

}
