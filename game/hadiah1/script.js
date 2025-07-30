const carousel = document.querySelector('.carousel');
let startX = 0;
let currentTranslate = 0;
let currentIndex = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
  const moveX = e.touches[0].clientX;
  const diff = moveX - startX;

  carousel.style.transform = `translateX(${currentTranslate + diff}px)`;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff < -50 && currentIndex < carousel.children.length - 1) {
    currentIndex++;
  } else if (diff > 50 && currentIndex > 0) {
    currentIndex--;
  }

  currentTranslate = -currentIndex * window.innerWidth;
  carousel.style.transform = `translateX(${currentTranslate}px)`;
});
