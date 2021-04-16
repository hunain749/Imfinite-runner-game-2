var thickness
var bullet
var wall
var speed,weight
var wallleftedges, bulletleftEdges
function setup () {
    createCanvas(1200,400)
bullet=createSprite(50,200,50,10)
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=(80,80,80)
speed=random(3,52)
weight=random(223,321)
thickness=random(22,83)
bullet.velocityX=speed


}
function draw (){
background("purple")

  

    drawSprites()
  
}
function hascollided(bullet,wall){

    bulletrightEdges= bullet .x+bullet.width
    bulletleftEdges=wall.x


    
if(hascollided (bullet,wall))
{
    
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/233) {
if (bullet.y - wall.y < wall.height/2 + bullet.height/2
  && wall.y - bullet.y < wall.height/2 + bullet.height/2){
 
  
}   
}
    bullet.velocityX=0
var  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if (damage >10)
{
    wall.shapeColor=(255,0,0)
}
if (damage<10)
{
    wall.shapeColor=(0,255,0)
}
}
}
