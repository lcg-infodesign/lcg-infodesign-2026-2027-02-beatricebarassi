function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noLoop(); // il disegno viene riprodotto una sola volta, se ricarico la pagina cambiano i valori casuali
  background(142, 136, 56);

  // disegno glifi
  let numeroGlifi = 260;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, dimRiga * 0.8);
    xCorrente = xCorrente + dimColonna;

    if (xCorrente > windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

function mioGlifo(_x, _y, _size) {
  push();
  translate(_x, _y - _size * 0.04); // il -0.04 centra la coccinella nella cella
  angleMode(DEGREES);

  const numeroPuntini = floor(random(1, 6)); // numero di puntini: da 1 a 10
  
  // PARTI VARIABILI

  // zampette
  stroke(25, 20, 25);
  strokeWeight(_size * 0.023);

  // anteriori
  line(-_size * 0.25, -_size * 0.183, -_size * 0.35, -_size * 0.273);
  line(-_size * 0.35, -_size * 0.273, -_size * 0.413, -_size * 0.26);
  line(_size * 0.25, -_size * 0.183, _size * 0.35, -_size * 0.273);
  line(_size * 0.35, -_size * 0.273, _size * 0.413, -_size * 0.26);

  // centrali
  line(-_size * 0.353, _size * 0.033, -_size * 0.44, _size * 0.073);
  line(-_size * 0.44, _size * 0.073, -_size * 0.5, _size * 0.12);
  line(_size * 0.353, _size * 0.033, _size * 0.44, _size * 0.073);
  line(_size * 0.44, _size * 0.073, _size * 0.5, _size * 0.12);

  // posteriori
  line(-_size * 0.293, _size * 0.327, -_size * 0.353, _size * 0.407);
  line(-_size * 0.353, _size * 0.407, -_size * 0.333, _size * 0.467);
  line(_size * 0.293, _size * 0.327, _size * 0.353, _size * 0.407);
  line(_size * 0.353, _size * 0.407, _size * 0.333, _size * 0.467);

  //PARTI FISSE 
  
  // corpo e il suo colore casuale 
  const sceltaColore = floor(random(4)); // numero casuale: 0, 1, 2 oppure 3
  if (sceltaColore == 0) {
    fill(237, 192, 81);   // giallo
  } else if (sceltaColore == 1) {
    fill(226, 120, 40);  // arancione
  } else if (sceltaColore == 2) {
    fill(229, 59, 0);  // rosso
  } else {
    fill(158, 35, 15);   // rosso scuro
  }
  strokeWeight(_size * 0.01);
  ellipse(0, _size * 0.09, _size * 0.7, _size * 0.85);

  // linea ali
  stroke(20, 16, 20);
  strokeWeight(_size * 0.013);
  line(0, -_size * 0.25, 0, _size * 0.09 + _size * 0.425);

  // testa
  fill(15, 12, 15);
  arc(0, -_size * 0.25, _size * 0.4, _size * 0.3, 180, 360);
  
  // puntini neri
  fill(20, 16, 20);
  noStroke();
  for (let i = 0; i < numeroPuntini; i++) {
       const miaRotazione = random(i * 360 / numeroPuntini, (i + 1) * 360 / numeroPuntini); // ogni puntino ha la sua parte di angolo
    const miaDistanza = random(0, _size * 0.27); // distanza casuale dal centro del corpo

    push();
    translate(0, _size * 0.09); // porto l'origine al centro del corpo
    rotate(miaRotazione);
    translate(miaDistanza, 0);
    ellipse(0, 0, _size * 0.13, _size * 0.13); // 0,0 perché ho già fatto il translate
    pop();
  }

  pop();
}
