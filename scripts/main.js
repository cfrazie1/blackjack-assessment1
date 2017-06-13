/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {

  let sum = 0;
  let aces = 1, 11;

  for (card of hand) {
    if (card = "J", card = "Q", card = "K") {
      card = 10;
      sum += card;
    } else if (card = "A") {
      aces++;
    } else {
      sum
      console.assert(handValue)
    }
  }

  return sum;
}
