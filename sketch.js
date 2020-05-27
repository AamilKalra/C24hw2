// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var ground

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas =  createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,390,1000,20);
    base1 = new Tanker(200,365,120,30);
    base2 = new Tanker(200,340,120,30);
    head = new Tanker(200,250,40,100,PI/2);
    console.log(head);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
head.display();
fill(170,111,52);
circle(201,320,120)
ground.display();
fill(170,111,52);
base1.display();
fill(170,111,52);
base2.display();


}

/*
function keyReleased() {
    // Call the shoot method for the cannon.
}
*/