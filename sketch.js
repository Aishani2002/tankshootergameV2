// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,canonbase,canonmiddle,canontop,canonshooter;
function setup() {
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    //fill("blue")
   canonbase = new Canon(50,350,200,30);
   //fill("green")
   canonmiddle = new Canon (50,325,200,10);
   //fill("brown");
   canontop = new Canontop(50,300,200,50);
   //fill("brown");
   canonshooter = new Canonshooter(100,167,50,30);
 // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
}

function draw() {
ground.display();
canonbase.display();
canonmiddle.display();
canontop.display();
canonshooter.display();

// Remember to update the Matter Engine and set the background.
}
