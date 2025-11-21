// Til að gera almennara forrit þarf að finna leið til að reikna 
// út mörkin út frá lengd orðs eða orða

var x,y;        // hnit orðs
var dx,dy;      // bætt við í hverju skrefi til að hreyfa orð
var ord = "HUGSUN"

function setup() {
  createCanvas(600, 400);
  background("black"); 
  x = 200; 
  y = 200; 
  dx = 2; 
  dy = -0.5; 
}

function draw() {
  background("green"); 
  line (500,100,500,300); // lóðrétt strik
  line (100,100,100,300); // lóðrétt strik
  line (100,100,500,100); // lárétt strik
  line (100,300,500,300); // lárétt strik
  
  fill ("white");
  textSize(32);
  text(ord, x, y);
  
  x = x + dx; // hreyfing eftir x-stefnu
  y = y + dy; // hreyfing eftir y-stefnu

  
  if (x > 360) {dx = dx*(-1);} // ef x er of mikið
  if (x < 100) {dx = dx*(-1);} // ef x er of lítið
  if (y > 300) {dy = dy*(-1);} // ef y er of mikið
  if (y < 125) {dy = dy*(-1);} // ef y er of lítið
}
