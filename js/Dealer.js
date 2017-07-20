class Dealer {
  constructor(props) {
    this.props = props;
    this.cardVal = 0;
  }

  hand() {
    for(const [index, card] of this.props.entries()) {
      this.cardVal += Number(card.value);
    }
    return this.cardVal;
  }

  hit(card) {
    return this.cardVal = this.cardVal + Number(card.value);
  }

  stand() {
    return this.cardVal;
  }
};
