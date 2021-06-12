const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg



function preload() {
  getTime();
}

function setup()
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(380,350,200,10);
  ground2 = new Ground(620,350,200,10)

  box1 = new Box(325,320,25,40);
  box2 = new Box(351,320,25,40)
  box3 = new Box(376,320,25,40)
  box4 = new Box(401,320,25,40)
  box5 = new Box(426,320,25,40)


  box6 = new Box(337,285,25,40)
  box7 = new Box(363,285,25,40)
  box8 = new Box(391,285,25,40)
  box9 = new Box(418,285,25,40)
  box10 = new Box(347,245,25,40)
  box11 = new Box(374,245,25,40)
  box12 = new Box(399,245,25,40)
  box13 = new Box(374,205,25,40)
  box14 = new Box(565,320,25,40)
  box15 = new Box(590,320,25,40)
  box16 = new Box(615,320,25,40)
  box17 = new Box(640,320,25,40)
  box18 = new Box(665,320,25,40)
  box19 = new Box(578,285,25,40)
  box20 = new Box(603,285,25,40)
  box21 = new Box(628,285,25,40)
  box22 = new Box(653,285,25,40)
  box23 = new Box(590,245,25,40)
  box24 = new Box(615,245,25,40)
  box25 = new Box(640,245,25,40)
  box26 = new Box(615,205,25,40)



 
  
ball1 = new Ball (300,300,30,30)


console.log(box25.body.speed);


  
  rope = new SlingShot(ball1.body ,{x : 70 ,y:120 })
  
}

function draw() 
{
  Engine.update(engine);
  
  if(backgroundImg)
  {
      background(backgroundImg);
  }


  ground1.display();
ground2.display()
  fill("yellow");
 
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()


  

  fill("green");
  box1.display();
  box2.display();
  box3.display()
  box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()


  rope.display();


ball1.display()


fill("red")
  textSize(30);
  text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY);

  drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
  rope.fly();
}



async function getTime()
{

    var response = await fetch("http://worldclockapi.com/api/json/est/now")

    var reponseJSON = await response.json();

    var datetime = reponseJSON.currentDateTime;

    var hour = datetime.slice(11,13);

    console.log(hour);

    


if(hour>=06&&hour<=09)
{ bg= "nightimg.jpg"
   
}
else{

  bg = "dayimg.jpg"
}

backgroundImg = loadImage(bg);





    


}
