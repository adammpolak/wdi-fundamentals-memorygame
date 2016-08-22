console.log("JS file is connected to HTML! Woo!")

//this section defines the cards values


var cards = ["queen","queen","king","king"]
var cardsInPlay = []
var board = document.getElementById("game-board");

var flipCard = function(){
	if (this.getAttribute('data-card')==="king") {
	this.innerHTML = '<img src="king.png" alt="King of Spades" />'
}
else {
	this.innerHTML = '<img src="queen.jpg" alt="Queen of Hearts" />'
}
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(5)
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];		
	}
}

var clearCards = function(){
	console.log(7)
	for (x=0;x<cards.length;x+=1){
		document.getElementsByClassName("card")[x].innerHTML = ''
		
	}
}

// var isTwoCards = function(){
// 	if (cardsInPlay.length === 2) {
// 		isMatch(cardsInPlay);
// 		cardsInPlay = [];
// 		console.log(4)
		
// 	}
// }

var isMatch = function(x){
	if (x[0]===x[1]){
		window.confirm("Congratulations, it's a match!");
		clearCards()
	}
	else {
		window.confirm("Sorry, it isn't a match.");
		clearCards()
	}
}

var createBoard = function(){
	for (x=0;x<cards.length;x+=1){
		var card = document.createElement("div");
		card.className = "card";
		card.addEventListener('click', flipCard)
		card.setAttribute('data-card', cards[x]);
//		card.addEventListener('click', isTwoCards)		
		board.appendChild(card);}

}
createBoard();


