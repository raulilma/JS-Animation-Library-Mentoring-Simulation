const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// TODO 1: Ubah background dari scene Three.js ke warna biru tua

// TODO 2: Inisialisasi scene Three.js dengan geometri-geometri sesuai preferensi

function startAnimation() {
  // TODO 3: Implementasikan GSAP Timeline untuk merotasi dan mengubah posisi dari object Three.js yang ada
  // TODO 4: Iterasi object yang ada dalam scene, beri efek ke tl yang ada plus anime.js untuk melakukan transisi warna material yang smooth
  // TODO 5: Buat timeline gsap tersebut juga bisa menganimasikan tombol animate yang ada di HTML
  // TODO 6: Buat anime.js effect yang bisa menganimasikan tombol animate yang ada di HTML
}

function changeMaterial() {
  // TODO 7: Buat implementasi iterasi setiap object untuk membuat material dengan warna random
  // TODO 8: Pada setiap perulangannya, berikan transisi anime.js untuk melakukan transisi warna yang lebih smooth
}

// TODO 9: Coba register suatu efek dengan GSAP (misal fade effect) dan coba implementasikan pada elemen HTML yang ada

function shuffleObjects() {
  // TODO 10: Buat logic untuk membuat objeknya teracak lagi dan berikan efek GSAP ke tombol shufflenya
}

document.getElementById("animateButton").addEventListener("click", startAnimation);
document.getElementById("changeMaterialButton").addEventListener("click", changeMaterial);
document.getElementById("shuffleObjectsButton").addEventListener("click", shuffleObjects);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
animate();
