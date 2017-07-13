const Card = require('./Card.js');

class Deck {
  constructor() {
    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    this.cards = [];
  }

  makeCards() {
    for(const [index, value] of this.suits.entries()) {
      for(const [i, val] of this.names.entries()) {
        this.cards.push(new Card(index+1, this.names[i], this.suits[index]));
      }
    }
    return this.cards;
  }

  shuffleCards() {
    const madeCards = this.makeCards();
    let i = madeCards.length;
    let j, temp;

    while(--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = madeCards[j];
      madeCards[j] = madeCards[i];
      madeCards[i] = temp;
    }
    return madeCards;
  }
};