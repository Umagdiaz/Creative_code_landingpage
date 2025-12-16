/*movimiento about*/ 
let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title");

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) { 
    emptyElement.style.flexBasis = event.clientX + "px";
    titleElement.style.flexBasis = event.clientY + "px"; 
}


/*menu*/
const btnMenu = document.querySelector("#btn_menu");
const nav = document.querySelector("#navbar");
const links = nav.querySelector('a');

btnMenu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    btnMenu.textContent = isOpen ? 'Close':'Menu';
    btnMenu.setAttribute('aria-expanded', isOpen)
});

/*footer*/
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

  if (textureCounter >= maxTextureValue) {
    textureCounter = 0; 
  }
}


