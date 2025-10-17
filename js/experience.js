document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById("slider");
    if (!slider) return;
  
    let items = [...slider.children];
    const originalItemsCount = items.length;
  
    if (originalItemsCount <= 1) {
        return;
    }
  
    // --- Acak urutan (Fisher-Yates shuffle) ---
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
  
    slider.innerHTML = "";
    items.forEach(item => slider.appendChild(item));
  
    items = [...slider.children];
  
    items.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });
  
    items = [...slider.children];
  
    let position = 0;
    let animationId;
    let itemWidth = 0;
    let gap = 0;
    const speed = 0.5; // kecepatan scroll
  
    function calculateDimensions() {
        if (items.length > 0) {
            const style = getComputedStyle(items[0]);
            itemWidth = items[0].offsetWidth;
  
            if (window.innerWidth >= 1024) {
                gap = 64;
            } else if (window.innerWidth >= 768) {
                gap = 48;
            } else if (window.innerWidth >= 640) {
                gap = 32;
            } else {
                gap = 0;
            }
        }
    }
  
    // 👉 Ubah di sini untuk arah ke kanan
    function animate() {
        position += speed; // sebelumnya -= speed
        const originalContentWidth = (originalItemsCount * itemWidth) + ((originalItemsCount - 1) * gap);
  
        if (position >= 0) { // sebelumnya <= -originalContentWidth
            position = -originalContentWidth;
        }
  
        slider.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animate);
    }
  
    function startAnimation() {
        calculateDimensions();
        cancelAnimationFrame(animationId);
        animate();
    }
  
    startAnimation();
  
    slider.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });
  
    slider.addEventListener('mouseleave', () => {
        animate();
    });
  
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            startAnimation();
        }, 250);
    });
  
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
  });
  