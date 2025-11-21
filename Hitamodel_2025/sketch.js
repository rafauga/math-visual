// Stærðfræði:
// Með því að keyra þetta oft getum við metið væntigildi
// Við getum séð að sum úrtök (eða sumar mælingar) gefa „kólnun“ en ekki hlýnun
// Til að búa til svona sýnilegt „líkan“ þarf:
// * líkindadreifingu og ákvörðun út frá stikum 
// * vörpun frá tölu yfir í lit
// * skölun til að stilla af stærðir ferninga þannig að þeir fylli sama svæði
// * hnitakerfi til að hanna grindina ...

let tala = [];  // Fylki sem geymir slembitölur
let summa = 0;  // Fyrir summu talna 
let medal = 0;  // Fyrir meðaltal hermunar
let fravik = 0; // Fyrir meðalfrávik hermunar
let telja_kald = 0; // Telur fjölda kaldra svæða

function setup() {
  createCanvas(600, 620);
  fjoldi = 4;      // Hér má ákveða fjöldann, n gefur nxn-grind
  medalgildi = 0.1;   // Hér má ákveða meðalgildi líkindadreifingar
  fravik = 0.4;     // Hér má ákveða staðalfrávik líkindadreifingar
  colorMode(HSB, 360, 99, 99);
  sqfjoldi = fjoldi*fjoldi;
  staerd = 500/fjoldi; // Stærð hvers fernings
}

function draw() {
  background(255);
  
  // Teikna grind, gefa liti og birta slembitölur
  for (let i = 0; i < fjoldi; i++) {
    tala[i]=[];
    for (let j = 0; j < fjoldi; j++) {
      
      //Eftirfarandi velur tölu úr normaldreifingu og geymir í tala[i][j].
      tala[i][j] = randomGaussian(medalgildi, fravik); 
      
      if (tala[i][j] > 0) {
        fill(0,50+10*tala[i][j],100);
      } else {
        fill(240,50-10*tala[i][j],100);
        telja_kald = telja_kald+1;
      }
      
      // Og hér teiknum við punkta á mælinn
      noStroke();
      circle ((fjoldi*staerd)/2 + 20*tala[i][j], fjoldi*staerd+15,5);
      
      x = i * staerd;
      y = j * staerd;
      
      stroke("black");
      rect(x, y, staerd, staerd);
      fill(255);
      textSize(18);
      textAlign(CENTER, CENTER);
      text(tala[i][j].toFixed(2), x + staerd/2, y + staerd/2);
    }
  }
  
  // Teiknum mælinn
  strokeWeight(4);
      line(0,fjoldi*staerd+20, fjoldi*staerd, fjoldi*staerd+20);
      line((fjoldi*staerd)/2, fjoldi*staerd+30,(fjoldi*staerd)/2, fjoldi*staerd+10);
  strokeWeight(1);
  for (let i = 1; i < 12; i++) {
      line((fjoldi*staerd)/2+20*i, fjoldi*staerd+30,(fjoldi*staerd)/2+20*i, fjoldi*staerd+10);
      line((fjoldi*staerd)/2-20*i, fjoldi*staerd+30,(fjoldi*staerd)/2-20*i, fjoldi*staerd+10);
  }
      
  // Reiknum summu allra gilda og svo meðaltal
  for (let i = 0; i < fjoldi; i++) {
    for (let j = 0; j < fjoldi; j++) {
      summa = summa + tala[i][j];
    }
  }
  medal = summa/(sqfjoldi);
  
  // Reiknum summu frávika og meðalgildi þeirra
  for (let i = 0; i < fjoldi; i++) {
    for (let j = 0; j < fjoldi; j++) {
      fravik = fravik + abs(tala[i][j]-medal);
    }
  }
  fravik = fravik/(sqfjoldi);
  
  fill('black');
  textSize(20);
  textAlign(LEFT, CENTER);
  text("Meðalgildi: " + medal.toFixed(2), 100, fjoldi*staerd+50);
  text("Meðalfrávik: " + fravik.toFixed(2), 100, fjoldi*staerd+75);
  text("Kaldari svæði: " + telja_kald + " af " + sqfjoldi, 100, fjoldi*staerd+100);
  noLoop();
}
