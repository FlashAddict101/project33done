var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var particle;
//var yellowLine;
var gameState = "start";
var turn=0;
var score =0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // yellowLine = new yellowLine(width/2,450,width,20);
 //yellowLine = createSprite(width/2,450,width,20);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    // if(frameCount%60===0){
    //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //  //  score++;
    // } 

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
  text("Score  " + score, width-300, 50)
  textSize(20)
  fill("white")
  text("Turn " + turn, width-600, 50)

  textSize(20)
  fill("white")
  text("100", width-300, 600)
  textSize(20)
  fill("white")
  text("200", width-200, 600)
  textSize(20)
  fill("white")
  text("200", width-150, 600)
  textSize(20)
  fill("white")
  text("200", width-50, 600)
  textSize(20)
  fill("white")
  text("100", width-370, 600)
  textSize(20)
  fill("white")
  text("100", width-450, 600)
  textSize(20)
  fill("white")
  text("500", width-550, 600)
  textSize(20)
  fill("white")
  text("500", width-630, 600)
  textSize(20)
  fill("white")
  text("500", width-700, 600)
  textSize(20)
  fill("white")
  text("500", width-780, 600)
  
  Engine.update(engine);
  ground.display();
  //yellowLine.display();
  mousePressed();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

     if(particle!=null)
     {
       particle.display();

       if(particle.body.position.y>760)
        {
                
          if(particle.body.position.x<300)
          {
           score=score+500;
           turn=turn+1;
           particle=null;
           if(count>=5) gameState="end";
          //  textSize(20)
          // fill("white")
          //  text("Game Over", width-300, 50)
         }

         else if((particle.body.position.x>301) && (particle.body.position.x<600))
         {
           score=score+100;
           turn=turn+1;
           particle=null;
           if(count>=5) gameState="end";
         }

        else if((particle.body.position.x>601) && (particle.body.position.x<900))
         {
           score=score+200;
           turn=turn+1;
           particle=null;
           if(count>=5) gameState="end";
         }
      }
    }
   
  
   function mousePressed()
   {
      if(gameState!=="end")
     {
      count++;
       particle=new Particle(mouseX, 10, 10, 10);
  }
 }
