console.log("JS file is connected to HTML! Woo!")

//this section defines the cards values

var card1 = "queen"; 
var card2 = "queen";
var card3 = "king";
var card4 = "king";

/*if (card2 === card4){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.")
}*/

var board = document.getElementById("game-board");

var createBoard = function(p){
	for (x=1;x<p;x+=1){
		var card = document.createElement("div");
		card.className = "card"
		board.appendChild(card)}

}

createBoard(8);
