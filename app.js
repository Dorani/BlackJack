var bankRoll = 1000;
var currentBet = 0;
var player = '';
var dealer = '';
var theCount = 0;
var countsP = 0;
var countsD= 0;

	


	function subtract(bet) {
		console.log("At subtract");

		if (bankRoll < bet){
			alert( "Step your game up man...you are broke!");
		}else {

		
		bankRoll = bankRoll - bet;
		console.log(bankRoll); 
		$("#bankroll").text(bankRoll);

		currentBet = currentBet + bet;
		console.log(currentBet);
		$("#bets").text(currentBet);

		
		}

	}

	function resetBet(){
		bankRoll = currentBet + bankRoll;
		currentBet = 0;

		$("#bankroll").text(bankRoll);

		$("#bets").text(currentBet);

	}

	function card(value, name, suit){
		this.value = value;
		this.name = name;
		this.suit = suit;

	}



	function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}


//code dojo help for deck
    var myDeck = 0;
	function deck(){
		this.names = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
		this.suits = ['Spade','Heart','Club','Dimond'];
		var deckOfCards = [];

		for( var s = 0; s < this.suits.length; s++ ){
			for( var n = 0; n < this.names.length; n++){
				deckOfCards.push( new card(n + 1, this.names[n], this.suits[s]));
			}
		}
		console.log(deckOfCards);

//end of code dojo help

		return shuffle(deckOfCards);
	}
myDeck = shuffle(myDeck);

	
	// //function deal(){
	// 	if (this.deckOfCards > 0)
	// 		return this.deckOfCards.shift();
	// }else {
	// 	return null;
	// }
	// this.player = player.deal
	// this.dealer = dealer.deal
	// this.player = player.deal
	// this.dealer = dealer.deal
	// deal();

	

	// function playerCount(){
	// 	countsP = parseInt(player.deal.length +  player.deal.length) 
	// 	return countsP;
	// }

	// function DealerCount(){
	// 	countsD = parseInt(dealer.deal.length +  dealer.deal.length) 
	// 	return countsD;
	// }

	// function calculateWinner(){
	// 	if (countsP > countsD) || < 21
	// 		return "Player Wins"
	// }else {
	// 	return 'Dealer wins'
	// }

	$( document ).ready(function() {

        $("#bankroll").text(bankRoll);
		$("#name").text("Seif");
		$("#card").text(deck);



	
		$(".betButton").click(function() {
			var betVal = this.id.split("-");
			subtract(parseInt(betVal[1]));
		});


		$("#reset-game").click(function(){
			console.log("reset");
			resetBet();
		});

		$("#deal-cards!").click(function(){
			console.log("deal");
			dealCards();
		});

		
    });


 