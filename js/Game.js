class Game {
  constructor() {
    this.toPlayer = [];
    this.toDealer = [];
    this.makeADealer;
    this.makeAPlayer;
    this.makeADeck = new Deck();
    this.allCards = this.makeADeck.shuffleCards();
    this.count = 0;
    this.playerScore = 0;
    this.dealerScore = 0;
  }

  play() {
    while(this.count < 4) {
      if(this.count < 2) this.toPlayer.push(this.allCards[0]);
      if(this.count >= 2) this.toDealer.push(this.allCards[0]);
      this.allCards.shift();
      this.count++;
    }

    this.makeADealer = new Dealer(this.toDealer);
    this.makeAPlayer = new Player(this.toPlayer);
  }

  calculateScore() {
    let play = this.play.bind(this);
    // Initiate the game
    play();

    this.dealerScore = this.makeADealer.hand();
    this.playerScore = this.makeAPlayer.hand();

    $('#dScore').append(this.dealerScore);
    $('#pScore').append(this.playerScore);


    if(this.playerScore > 21) {
      responsiveVoice.speak('Dealer Wins');
      return $('#gameResult').append('Dealer Wins');
    } else {
      if(this.dealerScore > 21) {
        responsiveVoice.speak('Player Wins');
        return $('#gameResult').append('Player Wins');
      } else {
          // Get user intention if hit
          if(confirm("Do you want to hit?")) {
            this.playerScore = this.makeAPlayer.hit(this.allCards[0]);
            this.allCards.shift();
            $('#pScore').html("<div id='pScore'>" +'Player Score: '+this.playerScore+ "</div>");
          } else {
            this.playerScore = this.makeAPlayer.stand();
            $('#pScore').html("<div id='pScore'>" +'Player Score: '+this.playerScore+ "</div>");
          }




          if(this.dealerScore < 17) {
            console.log('inside dealer score');
            this.dealerScore = this.makeADealer.hit(this.allCards[0]);
            this.allCards.shift();
            $('#dScore').html("<div id='dScore'>" +'Dealer Score: '+this.dealerScore+ "</div>");
            console.log('length of all cards', this.allCards.length)
          } else if(this.dealerScore >= 17) {
            this.dealerScore = this.makeADealer.stand();
            $('#dScore').html("<div id='dScore'>" +'Dealer Score: '+this.dealerScore+ "</div>");
          }
      }
    }

    // if(dealerScore > playerScore) {
    //   responsiveVoice.speak('Dealer Wins');
    //   return $('#gameResult').append('Dealer Wins');
    // } else {
    //   responsiveVoice.speak('Player Wins');
    //   return $('#gameResult').append('Player Wins');
    // }
  }

  init() {
    const start = this.calculateScore.bind(this);
    return start();
  }
};

