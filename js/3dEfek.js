// const slider = document.getElementById("slider");
// let items = [...slider.children];

// // 🔀 Acak urutan item biar gak monoton
// items = items.sort(() => Math.random() - 0.5);
// items.forEach(item => slider.appendChild(item));

// const totalWidth = slider.scrollWidth;

// // clone depan & belakang
// items.forEach(item => {
//   let cloneFront = item.cloneNode(true);
//   let cloneBack = item.cloneNode(true);
//   slider.insertBefore(cloneFront, slider.firstChild); 
//   slider.appendChild(cloneBack); 
// });

// // 🚀 mulai dari tengah, bukan awal
// let position = -totalWidth / 2; 
// const speed = 0.8; // biar halus, gak terlalu cepat

// function animate() {
//   position += speed;

//   // kalau udah kelewat kanan → reset ke tengah
//   if (position >= 0) {
//     position = -totalWidth / 2;
//   }

//   slider.style.transform = `translateX(${position}px)`;
//   requestAnimationFrame(animate);
// }

// animate();
