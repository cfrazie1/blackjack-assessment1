/*
   Implement a Blackjack hand value calculator.
   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.
   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue(hand) {
   let player = hand;
   let playerHand = 0;
   for(var i = 0; i < player.length; i++){
     if(player[i] == "K" || player[i] == "Q" || player[i] == "J"){
       player[i] = 10;
       playerHand += 10;
     }else if(player[i] == "A" && playerHand < 10){
       player[i] = 11;
       playerHand += 11;
     }else if(player[i] == "A" && playerHand > 10){
       player[i] = 1;
       playerHand += 1;
     }else{
       player[i] = parseInt(player[i])
       playerHand += player[i];
     }
   }
   if(playerHand > 21){
     playerHand -= 10;
   }
   return playerHand;
}
