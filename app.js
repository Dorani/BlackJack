var bankRoll = 1000;
var currentBet = 0;
	


	function subtract(bet) {
		console.log("At subtract");
		
		bankRoll = bankRoll - bet;
		console.log(bankRoll); 
		$("#bankroll").text(bankRoll);

		currentBet = currentBet + bet;
		console.log(currentBet);
		$("#bets").text(currentBet);

		if (bankRoll <= 0){
			alert( "Step your game up man...you are broke!");
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



		return shuffle(deckOfCards);
	}
myDeck = shuffle(myDeck);

	
	function deal(){
		

	}



	$( document ).ready(function() {

        $("#bankroll").text(bankRoll);
		$("#name").text("Seif");
		$("#card").text(deck);


			$("#betting-100").click(function() {
  			console.log("Clicked");
  			subtract(100);

		});


			$("#betting-50").click(function() {
  			console.log("Clicked");
  			subtract(50);

		});


		$("#betting-10").click(function() {
  			console.log("Clicked");
  			subtract(10);

		});



		$("#betting-5").click(function() {
  			console.log("Clicked");
  			subtract(5);

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


 