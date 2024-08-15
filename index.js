import { cars } from './cars.js'



function createCards(item) {
  const cardTemplate = document.getElementById('cardTemplate').content.querySelector('.card').cloneNode(true)
  const cardBtnClose = cardTemplate.querySelector('.card__btnClose')
  const cardBtnSub = cardTemplate.querySelector('.card__btnSub')
  cardTemplate.querySelector('.card__title').textContent = item.name
  cardTemplate.querySelector('.card__price').textContent = item.price
  cardTemplate.querySelector('.option1').src = item.option1 ? './images/plus.svg' : './images/minus.svg'
  cardTemplate.querySelector('.option2').src = item.option2 ? './images/plus.svg' : './images/minus.svg'
  cardTemplate.querySelector('.option3').src = item.option3 ? './images/plus.svg' : './images/minus.svg'
  cardTemplate.querySelector('.option4').src = item.option4 ? './images/plus.svg' : './images/minus.svg'
  cardTemplate.querySelector('.option5').src = item.option5 ? './images/plus.svg' : './images/minus.svg'
  cardTemplate.querySelector('.option6').src = item.option6 ? './images/plus.svg' : './images/minus.svg'
  cardTemplate.querySelector('.option7').src = item.option7 ? './images/plus.svg' : './images/minus.svg'
  return cardTemplate
}

function render(items) {
  items.forEach((item) => {
    document.querySelector('.comparison__container').append(createCards(item))
  })
}
render(cars)

const cards = document.querySelectorAll('.card') // Получаем все карточки
let currentStartIndex = 0 // Начальный индекс текущей группы карточек
const visibleCardsCount = 4 // Количество видимых карточек

function updateCardsDisplay() {
  // Скрываем все карточки
  cards.forEach((card) => card.classList.remove('visible'))

  // Показываем только нужные карточки
  for (let i = currentStartIndex; i < currentStartIndex + visibleCardsCount; i++) {
    if (cards[i]) {
      cards[i].classList.add('visible')
    }
  }
}

document.getElementById('prevBtn').addEventListener('click', () => {
  // Уменьшаем индекс, чтобы перейти к предыдущим карточкам
  if (currentStartIndex > 0) {
    currentStartIndex -= visibleCardsCount
    updateCardsDisplay()
  }
})

document.getElementById('nextBtn').addEventListener('click', () => {
  // Увеличиваем индекс, чтобы перейти к следующим карточкам
  if (currentStartIndex + visibleCardsCount < cards.length) {
    currentStartIndex += visibleCardsCount
    updateCardsDisplay()
  }
})

// Начальное отображение карточек
updateCardsDisplay()