// List of classes

var Player() = function() {
  // Give the default cash to start the game

  // Get the cards from the dealer
};

var Deck() = function() {
  // Give the type of cards 2..9, A, J, Q, K

  // Give the suit type
};

var Shuffle() = function() {
  // Get the set of decks from the Deck class

  // Do math.random to mix the card into random order
};

var Card() = function() {
  // Get the first card

  // return the value of a single card

    // Can be called twice to return the first two cards by default
};

var Dealer() = function() {
  // Give  a new deck

    // Shuffle the above deck

  // Get the card

  // Get the input for bet/ input to either hit / stand


};

var Game() = function() {
  // Instantiate player class i.e one player

  // Instantiate a dealer

  // Set the default cash value for player

  // Keep checking for blackjack

    // if blackjack reset both player and dealer
};

// Functionality for the player

// Psuedoclassical Instantiation

Player.prototype.hit = function() {
  // Check the score before hit

  // Call the card and get a single card value

  // Check if less than 21

    // if, then ask for the decision again

  // If greater, lose
}

Player.prototype.stand = function() {
  // Don't take a card

  // Dealer shows the second card

  // Dealer takes a card(dealer's hit)

  // Calculate the total of dealer and player

  // If player > dealer, player BLACKJACK

  // else dealer wins
}