
const dropList = document.querySelector(".swapComponent")
const carContainer = document.querySelector('.comparison__container')
const optionsContainer = document.querySelector('.options__list')
let scrollableText = document.querySelectorAll('.scrollable-text');
let isDragging = false
let startX
let currentTranslate = 0
let prevTranslate = 0
const cardWidth = 312 // Ширина карточки


dropList.addEventListener('touchstart', (event) => {
  isDragging = true
  startX = event.touches[0].clientX // Запоминаем начальную позицию
  optionsContainer.style.transition = 'none' // Отключаем переход при начале перетаскивания
  carContainer.style.transition = 'none' // Отключаем переход при начале перетаскивания
})

dropList.addEventListener('touchmove', (event) => {
  if (!isDragging) return
  const currentX = event.touches[0].clientX // Текущая позиция
  const diffX = currentX - startX // Разница между начальной и текущей позицией
  currentTranslate = prevTranslate + diffX // Обновляем текущее смещение
  carContainer.style.transform = `translateX(${currentTranslate}px)`
  optionsContainer.style.transform = `translateX(${currentTranslate}px)`
})

dropList.addEventListener('touchend', () => {
  isDragging = false
  carContainer.style.transition = 'transform 0.3s ease' // Включаем переход обратно
  optionsContainer.style.transition = 'transform 0.3s ease' // Включаем переход обратно

  const movedBy = currentTranslate - prevTranslate

  // Определяем направление свайпа и обновляем prevTranslate
  if (movedBy < -50) {
    prevTranslate -= cardWidth // Сдвиг влево
  } else if (movedBy > 50) {
    prevTranslate += cardWidth // Сдвиг вправо
  }

  // Ограничиваем перемещение в пределах доступных карточек
  prevTranslate = Math.max(Math.min(prevTranslate, 0), -(optionsContainer.children.length - 3) * cardWidth)
  console.log(optionsContainer.children.length)
  optionsContainer.style.transform = `translateX(${prevTranslate}px)`
  carContainer.style.transform = `translateX(${prevTranslate}px)`
  scrollableText.forEach((s) => { s.style.transform = `translateX(${-(prevTranslate)}px)` })

})



