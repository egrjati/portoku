document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.getElementById("marquee");
    let offset = 0;
  
    function loop() {
      offset -= 1; // kecepatan geser (coba ubah 2 atau 0.5 buat lebih cepat/lambat)
      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0; // reset posisi biar gak kedut
      }
      marquee.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(loop); // bikin loop smooth
    }
  
    loop();
  });
  