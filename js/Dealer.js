class Dealer {
  constructor(props) {
    this.props = props;
  }

  hand() {
    let cardVal = 0;
    for(const [index, card] of this.props.entries()) {
      cardVal += Number(card.value);
    }
    return cardVal;
  }

  hit(card) {
    console.log(card);
    //return this.cardVal = this.cardVal + Number(card.value);
  }

  stand() {

  }
};
