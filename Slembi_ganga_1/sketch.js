
// Slembiganga: Á x-ás er tími mældur í skrefum (pixlum)
// Teiknum næsta punkt á næsta x-gildi (x+1) með því að 
// annaðhvort bæta 1 við eða draga 1 frá y-gildinu. 
// Til að ákvarða er valin tala af handahófi frá 0 upp í heild
// og ef talan er undir breytunni mark þá bætist við 1, annars 
// dregst 1 frá. 

let tala, utkoma;
let x, y;
let mark, heild;

function setup() {
  createCanvas(600, 400);
  x = 0;
  y = height/2;
  background(220);
  heild = 100;
  mark = 51;
}

function draw() {
  
  stroke("blue");
  
  line(0,height/2,width,height/2);
  
  tala = random(heild);
  if (tala < mark)
    {utkoma = 1;}
  else 
    {utkoma = -1;}

  
  fill("red");
  stroke("red");
  circle (x,y,2);
  
  x = (x + 1);
  y = y + utkoma;
  
}