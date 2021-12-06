var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);

 
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path=createSprite(200,350,150,150);
path.addImage("suelo", pathImg)
path.velocityY= 4;
path.scale= 1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy=createSprite(200,200,100,100);
boy.addAnimation("chico", boyImg)
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
