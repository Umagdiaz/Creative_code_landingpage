let textureCounter = 0;
const maxTextureValue = 140; // Define un máximo para textureCounter
let canvas;

function setup() {
 let canvasContainer = document.getElementById('canvasContainer');
    canvas = createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    canvas.parent('canvasContainer');
    frameRate(60);
}

function draw() {  
  generateTexture();
}

function generateTexture() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      // Calcula brightnessValue basado en noise y textureCounter
      let brightnessValue = noise(x * 0.01, y * 0.01) * random(50, 80 + textureCounter);
      pixels[index] = brightnessValue;
      pixels[index + 1] = brightnessValue;
      pixels[index + 2] = brightnessValue;
      pixels[index + 3] = 245;
    }
  }
  updatePixels();
  textureCounter += 5;
 
  // Si textureCounter alcanza el valor máximo, reinícialo
  if (textureCounter >= maxTextureValue) {
    textureCounter = 0; // Reinicia el contador
    // Opcionalmente, podrías querer también resetear algún otro estado o realizar alguna acción aquí
  }
}


  