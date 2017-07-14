const Deck = require('./Deck.js');
const Dealer = require('./Dealer.js');
const Player = require('./Player.js');

class Game {
  constructor() {
    this.toPlayer = [];
    this.toDealer = [];
    this.makeADealer;
    this.makeAPlayer;
    this.makeADeck = new Deck();
  }

  play() {
    var allCards = this.makeADeck.shuffleCards();
    var count = 0;

    while(count < 4) {
      if(count < 2) this.toPlayer.push(allCards[count]);
      if(count >= 2) this.toDealer.push(allCards[count]);
      count++;
    }

    this.makeADealer = new Dealer(this.toDealer);
    this.makeAPlayer = new Player(this.toPlayer);
  }
};