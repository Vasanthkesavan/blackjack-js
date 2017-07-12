// List of classes

class Player {
  constructor() {

  }
  // Give the default cash to start the game

  // Get the cards from the dealer

  hit() {
  // Check the score before hit

  // Call the card and get a single card value

  // Check if less than 21

    // if, then ask for the decision again

  // If greater, lose
  }

  stand() {
  // Don't take a card

  // Dealer shows the second card

  // Dealer takes a card(dealer's hit)

  // Calculate the total of dealer and player

  // If player > dealer, player BLACKJACK

  // else dealer wins
  }

};

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


class Card {
  constructor(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
  }
};

class Dealer {
  constructor() {

  }
  // Give  a new deck

    // Shuffle the above deck

  // Get the card

  // Get the input for bet/ input to either hit / stand


};

class Game {
  constructor() {

  }
  // Instantiate player class i.e one player

  // Instantiate a dealer

  // Set the default cash value for player

  // Keep checking for blackjack

    // if blackjack reset both player and dealer
};

var deck = new Deck();

console.log(deck.shuffleCards());