class Player {
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

  hit() {

  }

  stand() {

  }

};