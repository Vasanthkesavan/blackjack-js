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
    let play = this.play.bind(this);
    // Initiate the game
    play();

    dealerScore = this.makeADealer.hand();
    playerScore = this.makeAPlayer.hand();

    $('#dScore').append(dealerScore);
    $('#pScore').append(playerScore);

    if(dealerScore > playerScore) {
      responsiveVoice.speak('Dealer Wins');
      return $('#gameResult').append('Dealer Wins');
    } else {
      responsiveVoice.speak('Player Wins');
      return $('#gameResult').append('Player Wins');
    }
  }

  init() {
    const start = this.calculateScore.bind(this);
    return start();
    // $('#sButton').one('click', function() {
    //   return start();
    // });

  }
};

