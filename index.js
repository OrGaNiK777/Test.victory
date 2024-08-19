import { cars } from './cars.js'



function createCar(item) {
  const carTemplate = document.getElementById('carTemplate').content.querySelector('.card').cloneNode(true)
  const cardBtnClose = carTemplate.querySelector('.card__btnClose')
  const cardBtnSub = carTemplate.querySelector('.card__btnSub')
  carTemplate.querySelector('.card__title').textContent = item.name
  carTemplate.querySelector('.card__price').textContent = "от " + item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'

  return carTemplate
}

function render(items) {
  items.forEach((item) => {
    document.querySelector('.comparison__cars').append(createCar(item))
  })
  document.querySelector(".comparison___quantity").textContent = "(" + items.length + ")"
}
render(cars)

const option1List = document.querySelector('.option1');
const option2List = document.querySelector('.option2');
const option3List = document.querySelector('.option3');
const option4List = document.querySelector('.option4');
const option5List = document.querySelector('.option5');
const option6List = document.querySelector('.option6');
const option7List = document.querySelector('.option7');

function createOption(item, optionKey, listElement, optionIndex) {
  let li = document.createElement('li');
  li.className = `option optionItem${optionIndex}`;

  let img = document.createElement('img');
  img.className = "option_img";
  img.src = item[optionKey] ? './images/plus.svg' : './images/minus.svg';

  li.appendChild(img);
  listElement.appendChild(li);
}

function populateOptions() {
  cars.forEach(item => {
    createOption(item, 'option1', option1List, 1);
    createOption(item, 'option2', option2List, 2);
    createOption(item, 'option3', option3List, 3);
    createOption(item, 'option4', option4List, 4);
    createOption(item, 'option5', option5List, 5);
    createOption(item, 'option6', option6List, 6);
    createOption(item, 'option7', option7List, 7);
  });
}

populateOptions();

const cards = document.querySelectorAll('.card')
const options = document.querySelectorAll('.option')
const optionItem1 = document.querySelectorAll('.optionItem1')
const optionItem2 = document.querySelectorAll('.optionItem2')
const optionItem3 = document.querySelectorAll('.optionItem3')
const optionItem4 = document.querySelectorAll('.optionItem4')
const optionItem5 = document.querySelectorAll('.optionItem5')
const optionItem6 = document.querySelectorAll('.optionItem6')
const optionItem7 = document.querySelectorAll('.optionItem7')

let currentStartIndex = 0 
const visibleCardsCount = window.innerWidth > 900 ? 4 : 12 
console.log(window.innerWidth)
function updateCardsDisplay() {
  cards.forEach((card) => card.classList.remove('visible'))
  options.forEach((option) => option.classList.remove('visible'))

  for (let i = currentStartIndex; i < currentStartIndex + visibleCardsCount; i++) {
    if (cards[i]) {
      cards[i].classList.add('visible')
      optionItem1[i].classList.add('visible')
      optionItem2[i].classList.add('visible')
      optionItem3[i].classList.add('visible')
      optionItem4[i].classList.add('visible')
      optionItem5[i].classList.add('visible')
      optionItem6[i].classList.add('visible')
      optionItem7[i].classList.add('visible')
    }
  }
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentStartIndex > 0) {
    currentStartIndex -= visibleCardsCount
    updateCardsDisplay()
  }
})

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentStartIndex + visibleCardsCount < cards.length) {
    currentStartIndex += visibleCardsCount
    updateCardsDisplay()
  }
})
updateCardsDisplay()

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}