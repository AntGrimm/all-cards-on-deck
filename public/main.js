class Deck {
  constructor() {
    this.deck = []
    const cardRanks = [
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

    const cardSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

    for (const suit in cardSuits) {
      for (const rank in cardRanks) {
        this.deck.push(`${cardRanks[rank]} of ${cardSuits[suit]}`)
      }
    }
  }
}

const cardsSourceArray = new Deck()

const main = () => {
  for (let i = cardsSourceArray.deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const firstArray = cardsSourceArray.deck[i]
    const secondArray = cardsSourceArray.deck[j]
    cardsSourceArray.deck[i] = secondArray
    cardsSourceArray.deck[j] = firstArray
  }
  console.log(cardsSourceArray.deck)
}

const dealTopCard = () => {
  const topCard = cardsSourceArray.deck[0]
  document.querySelector('.dealt-card').textContent = topCard
  console.log(topCard)
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('.deal-cards').addEventListener('click', dealTopCard)
