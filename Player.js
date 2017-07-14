const Deck = require('./Deck.js');

class Player {
  constructor(props) {
    this.props = props;
  }

  hand() {
    return this.props;
  }

  hit() {

  }

  stand() {

  }

};

module.exports = Player;