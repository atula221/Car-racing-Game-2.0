var canvas,backgroundImg
var gameState=0;
var playerCount
var database,player,game,form;


function setup(){
    database=firebase.database();
    canvas=createCanvas(500,500);
    
}

function draw(){
    background("white");
 
    drawSprites();
}

