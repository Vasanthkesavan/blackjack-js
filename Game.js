const Deck = require('./Deck.js');
const Dealer = require('./Dealer.js');
const Player = require('./Player.js');

class Game {
  constructor() {
    this.makeADeck = new Deck();
  }
  // Instantiate player class i.e one player

  // Instantiate a dealer

  // Set the default cash value for player

  // Keep checking for blackjack
  play() {
    //this.makeADeck = new Deck();
    return this.makeADeck.shuffleCards();
    // if blackjack reset both player and dealer
  }
};

var lol = new Game();

console.log(lol.play())
