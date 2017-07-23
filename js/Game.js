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

  voiceResponse() {
    let hitFunc = function() {
      responsiveVoice.speak('Do you want to hit?')
    }
    return hitFunc();
  }

  intentListener() {
    var final_transcript = '';
    if ('webkitSpeechRecognition' in window) {
      var recognition = new webkitSpeechRecognition();
      var final_transcript = '';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = function( event ) {

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          }
        }
        //document.getElementById( 'speech' ).value = final_transcript;

      };
      recognition.start();

      setTimeout(function() {
        if(final_transcript.length !== 0 ) sayItLoud.call(final_transcript);
      },10000);
    }

    var sayItLoud = function() {
    let val = this.valueOf();
    console.log(val);
      if(val === 'hit') {
        return 'ACK HIT';
      }
    }
  }

  declareScore(playerScore, dealerScore) {
    if((playerScore > dealerScore && playerScore <= 21) || dealerScore > 21) {
      responsiveVoice.speak('Player Wins');
      return $('#gameResult').append('Player Wins');
    }
    if((dealerScore > playerScore && dealerScore <= 21) || playerScore > 21) {
      responsiveVoice.speak('Dealer Wins');
      return $('#gameResult').append('Dealer Wins');
    }
    if((dealerScore === playerScore) && playerScore <= 21) {
      confirm('Do you want to hit or stand ?')
    }
  }

  calculateScore() {
    let play = this.play.bind(this);
    // Initiate the game
    play();

    this.dealerScore = this.makeADealer.hand();
    this.playerScore = this.makeAPlayer.hand();

    $('#dScore').html("<div id='dScore'>" +'Dealer Score: '+this.dealerScore+ "</div>");
    $('#pScore').html("<div id='pScore'>" +'Player Score: '+this.playerScore+ "</div>");

    if(this.playerScore > 21) {
      responsiveVoice.speak('Dealer Wins');
      return $('#gameResult').append('Dealer Wins');
    } else {
      if(this.dealerScore > 21) {
        responsiveVoice.speak('Player Wins');
        return $('#gameResult').append('Player Wins');
      } else {


          this.voiceResponse();
          let intent = this.intentListener();

          if(intent === 'ACK HIT') {
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
          this.declareScore(this.playerScore, this.dealerScore);
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

