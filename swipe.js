const dropList = document.querySelector(".swapComponent");
const carContainer = document.querySelector('.comparison__container');
const optionsContainer = document.querySelector('.options__list');
let scrollableText = document.querySelectorAll('.scrollable-text');
let isDragging = false;
let startX;
let currentTranslate = 0;
let prevTranslate = 0;
const cardWidth = 312;
const tapThreshold = 10;
let moved = false;

dropList.addEventListener('touchstart', (event) => {
  isDragging = true;
  startX = event.touches[0].clientX;
  optionsContainer.style.transition = 'none';
  carContainer.style.transition = 'none';
});

dropList.addEventListener('touchmove', (event) => {
  if (!isDragging) return;

  const currentX = event.touches[0].clientX;
  const diffX = currentX - startX;

  if (Math.abs(diffX) > tapThreshold) {
    moved = true;
    currentTranslate = prevTranslate + diffX;
    carContainer.style.transform = `translateX(${currentTranslate}px)`;
    optionsContainer.style.transform = `translateX(${currentTranslate}px)`;
  }
});

dropList.addEventListener('touchend', () => {
  isDragging = false;
  carContainer.style.transition = 'transform 0.3s ease';
  optionsContainer.style.transition = 'transform 0.3s ease';

  if (!moved) {
    return;
  }

  moved = false;
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -50) {
    prevTranslate -= cardWidth;
  } else if (movedBy > 50) {
    prevTranslate += cardWidth;
  }

  prevTranslate = Math.max(Math.min(prevTranslate, 0), -(optionsContainer.children.length - 3) * cardWidth);
  optionsContainer.style.transform = `translateX(${prevTranslate}px)`;
  carContainer.style.transform = `translateX(${prevTranslate}px)`;
  scrollableText.forEach((s) => {
    s.style.transform = `translateX(${-prevTranslate}px)`;
  });
});
