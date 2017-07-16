class Deck {
  constructor() {
    this.names = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    this.cards = [];
  }

  makeCards() {
    let val = 0;
    for(const [suit] of this.suits.entries()) {
      for(const [name] of this.names.entries()) {
        if(this.names[name] === 'JACK' || this.names[name] === 'QUEEN' || this.names[name] === 'KING') {
          val = 10;
        } else if(this.names[name] === 'ACE') {
          val = 11;
        } else {
          val = this.names[name];
        }
        this.cards.push(new Card(val,this.names[name], this.suits[suit]));
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
