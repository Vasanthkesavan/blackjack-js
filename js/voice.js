$(document).ready(function() {
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
});

var sayItLoud = function() {
  let val = this.valueOf();
  console.log(val);
  if(val === 'play') {
    var newGame = new Game();
    newGame.init();
  }

}
