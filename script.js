// Initialize AOS animation
AOS.init({
  duration: 1000,
  once: true
});

// Typing Effect
const text = "Full-Stack Developer | Java | Python | Google Cloud";
let i = 0;
function typing() {
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    typingElement.innerHTML = text.slice(0, i++);
    if (i <= text.length) setTimeout(typing, 70);
  }
}
typing();

// Spotlight Effect
document.addEventListener("mousemove", (e) => {
  const s = document.querySelector(".spotlight");
  if (s) {
    s.style.left = e.pageX + "px";
    s.style.top = e.pageY + "px";
  }
});

// 3D Particles Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  canvas: document.querySelector('#bg'),
  alpha: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.BufferGeometry();
const count = 1500;
const positions = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ size: 0.02, color: 0xA78BFA });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0004;
  renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Expandable Project Cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
