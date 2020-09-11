console.log("Up and running!");


const cards = [
{
rank:"queen",
suite:"hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank:"queen",
suite:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank:"king",
suite:"hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank:"king",
suite:"diamonds",
cardImage:"images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		}else{
			alert("Sorry, try again.");
		}
}

function flipCard(cardId){

	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suite);
	console.log("User flipped " + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
}




