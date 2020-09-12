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
	if(cardsInPlay.length === 1){
		alert("Please select one more card!");
		return;
	}
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("You did not find a match. Sorry, try again.");
	}
}

function resetCards(){
	alert("CArds will now be reset");
	//logic ot reset cards will go here
}

function flipCard(){
	if(cardsInPlay.length === 2){
		alert("Click on reset button before playing again!!");
		return;
	}

	let cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suite);
	console.log("User flipped " + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
}

function createBoard(){
	for(let i=0; i< cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		
		//document.getElementById("game-board").appendChild(cardElement);
		//alert(document.getElementById("game-board").innerHTML);
		document.getElementsByTagName('div')[0].appendChild(cardElement);
		document.getElementsByTagName('img')[i].addEventListener('click', flipCard);
	}
}

document.getElementsByTagName('button')[0].addEventListener('click', resetCards);
createBoard();





