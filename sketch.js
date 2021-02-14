var speed, weight,thickness;
var bullet, wall;



function setup() {
  createCanvas(1366,400);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white"

  speed=random(231,321)
  bullet.velocityX=speed;
 weight=random(30,52);
 thickness=random(22,83)

 console.log(speed)
 console.log(thickness)
 console.log(weight)
}

bullet.velocityX = speed;
function draw() {
  background(0);  
  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5* weight * speed* speed/(thickness*thickness*thickness);


    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);


    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  


  drawSprites();
}

function hasCollided(lbullet , lwall)
{
    bulletRightEdge=lbullet.x +lbullet.width
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
}