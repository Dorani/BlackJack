var bankRoll = 1000;
var currentBet = 0;
var player = '';
var dealer = '';
var theCount = 0;
var countsP = 0;
var countsD= 0;
var players = [];
	


	function subtract(bet) {
		console.log("At subtract");

		if (bankRoll < bet){
			alert( "Step your game up man...you are broke!");
		} else {

		
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
		//end of code dojo help
		var cardValue = 0;
		for( var s = 0; s < this.suits.length; s++ ){
			for( var n = 0; n < this.names.length; n++){
				cardValue = 0;
				if (isNaN(this.names[n])) {
					if (this.names[n] == "A") {
						cardValue = 11;
					} else {
						cardValue = 2;
					}
				} else {
					cardValue = this.names[n];

				}
				deckOfCards.push( new card(parseInt(cardValue), this.names[n], this.suits[s]));
			}
		}



		return shuffle(deckOfCards);
	}

	myDeck = deck();
	
	function deal(){
 		return myDeck.shift();
	}

	

	function Player(isDealer, playerName) {
		this.hand = [];
		this.isDealer = isDealer;
		this.handPlayable = true;
		this.playerName = playerName;
		this.totalValue = 0;


		this.addCard = function(card) {
			console.log("Adding " + card.value + " which is " + card.name + " of " + card.suit + " to " + this.playerName);
			this.hand.push(card);
			console.log("new total is " + this.playerTotal())
			console.log(this.hand);
			$("#"+this.playerName+"-total").text(this.playerTotal());
		};

		this.playerTotal = function(){
			this.totalValue = 0;
			for(var handi = 0; handi <this.hand.length; handi++ ){
				this.totalValue += this.hand[handi].value;
			}
			return this.totalValue;
		};

	 	function stand(){
		 	if (stand === true){
		 		return this.totalValueDealer;
			}

	 }

	}

	function Dealer(isDealer, playerName) {
		this.hand = [];
		this.isDealer = isDealer;
		this.handPlayable = true;
		this.playerName = playerName;
		this.totalValueDealer = 0;



		this.addCard = function(card) {
			console.log("Adding " + card.value + " which is " + card.name + " of " + card.suit + " to " + this.isDealer);
			this.hand.push(card);
			console.log("new total is " + this.dealerTotal())
			console.log(this.hand);
			$("#"+this.playerName+"-total").text(this.dealerTotal());
		};

		this.dealerTotal = function(){
			this.totalValue = 0;
			for(var handi = 0; handi <this.hand.length; handi++ ){
				this.totalValueDealer += this.hand[handi].value;
			}
			return this.totalValueDealer;
		};

	} 

	//winner function
	// function winner(){
	// 	if(this.totalValue === 21){
	// 		alert('Player Wins!');
	// 	}else{
	// 		alert('comp wins!');
	// 	}
	// } 

	$( document ).ready(function() {

        $("#bankroll").text(bankRoll);
		$("#name").text("Seif");
		$("#card").text(deck);
		players["human"] = new Player(false, "human");
		players["dealer"] = new Player(true, "dealer");
		$(".betButton").click(function() {
			var betVal = this.id.split("-");
			subtract(parseInt(betVal[1]));
		});


		$("#reset-game").click(function(){
			console.log("reset");
			resetBet();
		});

		$("#deal-cards").click(function(){
			console.log("deal");
			while(players["dealer"].hand.length < 2) {
				console.log("Dealing");
				players["human"].addCard(deal());
				players["dealer"].addCard(deal());
			}
			

		});
		$("#hit-action").click(function() {
			players["human"].addCard(deal());
		});

		$("#stand-action").click(function() {
			players["dealer"].addCard(deal());
		});
		
    });