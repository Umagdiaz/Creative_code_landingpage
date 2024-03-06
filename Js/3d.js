// Crear el escenario
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
function resizeRenderer() {
    const geometryContainer = document.getElementById('3d_figure');
    const width = geometryContainer.offsetWidth;
    const height = geometryContainer.offsetHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

document.addEventListener('DOMContentLoaded', resizeRenderer);
window.addEventListener('resize', resizeRenderer);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setClearColor(0x1c47ff); 

// Añadir el renderizador al contenedor de geometría
const geometryContainer = document.getElementById('geometry-container');
geometryContainer.appendChild(renderer.domElement);


// Crear el modelo
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshPhysicalMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.7,
    metalness: 0.3,
    roughness: 0.4,
    transmission: 0.9, 
    reflectivity: 0.9
  
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Crear la luz
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 5, 10);
scene.add(directionalLight);

// Crear el entorno
const environment = new THREE.PMREMGenerator(renderer);
environment.compileEquirectangularShader();

// Función para renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Llamar a la función animate para iniciar la animación
animate();
