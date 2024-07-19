function setup() {
    // cria uma tela de 400px de largura por 400px de altura
    createCanvas(500, 500);
    background("purple");
  }
  
  function draw() {
    
  
    stroke("black");
    fill("salmon");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 15);
    }
  }
  