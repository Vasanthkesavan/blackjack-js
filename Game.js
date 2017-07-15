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
      if(count < 2) this.toPlayer.push(allCards[0]);
      if(count >= 2) this.toDealer.push(allCards[0]);
      allCards.shift();
      count++;
    }

    this.makeADealer = new Dealer(this.toDealer);
    this.makeAPlayer = new Player(this.toPlayer);
  }

  calculateScore() {
    let dealerScore = 0;
    let playerScore = 0;
    // Initiate the game
    this.play();

    dealerScore = this.makeADealer.hand();
    playerScore = this.makeAPlayer.hand();

    if(dealerScore > playerScore) return 'Dealer wins';

    return 'Player Wins';
  }
};

var lol = new Game();

console.log(lol.calculateScore())