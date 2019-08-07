const cardRanksArray = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

const cardSuitsArray = [' of Clubs', ' of Diamonds', ' of Hearts', ' of Spades']

const cardsSourceArray = [
  'Ace of Spades',
  '2 of Spades',
  '3 of Hearts',
  'King of Clubs',
  '10 of Diamonds',
  'Queen of Clubs'
]

let topCardCounter = 0

const main = () => {
  for (let i = cardsSourceArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const firstArray = cardsSourceArray[i]
    const secondArray = cardsSourceArray[j]
    cardsSourceArray[i] = secondArray
    cardsSourceArray[j] = firstArray
  }
  console.log(cardsSourceArray)
}

const dealTopCard = () => {
  for (let i = 0; i < cardsSourceArray.length; i++) {
    const topCard = cardsSourceArray[i]
    document.querySelector('.dealt-card').textContent = topCard
    console.log(topCard)
  }
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('.deal-cards').addEventListener('click', dealTopCard)
