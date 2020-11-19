var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  form = new Form();
  player= new Player();
  playerCount = 0;
  form.display();
  
}


function draw(){
}
