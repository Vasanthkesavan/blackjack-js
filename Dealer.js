const Deck = require('./Deck.js');

class Dealer {
  constructor(props) {
    this.props = props;
  }

  hand() {
    return this.props;
  }

};

module.exports = Dealer;