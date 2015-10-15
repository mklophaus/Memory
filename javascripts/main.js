var x = 0;
var clickCount = 0;
var firstPic, secondPic;
var picClicked;
var nextClicked
var num;
var matchNum =0;
var gameArray = foodArray.slice();
var numPlayers = 1;
var playerTurn = true;
var p1Score=0; 
var p2Score=0;


//shuffles 2nd array of pictures
var shuffleArray = function(){
	var i = gameArray.length, tempVal, randomIndex;

	while(0 !== i){
		randomIndex = Math.floor(Math.random() * i);
		i -= 1;
		tempVal = gameArray[i];
		gameArray[i] = gameArray[randomIndex];
		gameArray[randomIndex] = tempVal;
	}
	return gameArray;
}
shuffleArray();



/////SETS SCORES to 0 ON PLAYER CHANGE////////
var resetScore = function(){

	if(numPlayers == 1){
		p1Score = 0;
	}
	else if (numPlayers == 2){
		var p1Score =0;
		var p2Score =0;	
	}	
};

	////////CHECK IF MATCH////////
	var checkifMatch =function(){ 
		if (clickCount == 1){
			firstPic = gameArray[num].id;
			return false;
		}
		else if (clickCount == 2){
			secondPic = gameArray[num].id;

			if(firstPic == secondPic){
				return true;

			}
			else if(firstPic !== secondPic){
				return false;
			}
		}
	};

	var checkWinner = function(){
		if(p1Score == 2){
			$('#messageBox').text('You Win!');
		//Makes cards flash colors
		for (var i = 2500; i >= 1; i--){

			$('.front').fadeOut(400).fadeIn(400);
			$('.flash').fadeOut(400).fadeIn(400);
		}          
	}
	else if((p1Score + p2Score ==12) && (p1Score>p2Score)){
		$('#messageBox').text('Player 1 Wins!');
	}
	else if((p1Score + p2Score ==12) && (p2Score>p1Score)){
		$('#messageBox').text('Player 2 Wins!');
	}

};



//////////CHECK NUM CLICKS////////////
var checkClickCount = function(){
	var currentClicked;
	console.log(clickCount)
	if(clickCount >= 2){
		return false;
	}

	else if (clickCount ==0){
		picClicked = $(event.target);
		currentClicked = picClicked;
	}
	
	else if (clickCount ==1){
		nextClicked = $(event.target);
		currentClicked = nextClicked;
	} 
	var thisId = currentClicked.attr('id');
	num = thisId.match(/\d+/);
	num = num -1;
	currentClicked.attr('src', gameArray[num].url);
	currentClicked.addClass("front");
	clickCount+=1;
};


///////Show image on click//////
$(".board .down").on('click', function(event){

	checkClickCount();

	if (checkifMatch() == true){
		if(numPlayers ==1){
			p1Score +=1;
			$('#messageBox').text('Score: ' + p1Score);
			checkWinner();
		}

		else if(numPlayers == 2){
			if(playerTurn){
				p1Score +=1;
				$('#messageBox').text('Player 1 Score: ' + p1Score);
				checkWinner();
			}
			else if(!playerTurn){
				p2Score +=1;
				$('#messageBox').text('Player 2 Score: ' + p2Score);
				checkWinner();
			}

			playerTurn = !playerTurn;
		}
		clickCount =0;
	}

	else if((checkifMatch() == false) && (clickCount == 2)){
		
		setTimeout(function(){
			picClicked.removeClass("front");
			picClicked.attr('src', "assets/back-red_3_1024x1024.png");
			nextClicked.removeClass("front");
			nextClicked.attr('src', "assets/back-red_3_1024x1024.png");
			clickCount =0;
		}, 800);
	}

});



//////////////CHANGING CATEGOORY//////////
$("#category").change(function(){
	if ($("#category option:selected").text() === "Food"){
		gameArray = foodArray.slice();
		shuffleArray();
	}
	else if ($("#category option:selected").text() === "Animals"){
		gameArray = animalArray.slice();
		shuffleArray();
	}
});



///////////CHANGING 1PLAYER/2PLAYER//////////////
$("#players").change(function(){
	if ($("#players option:selected").text() === "One Player"){
		numPlayers =1;
		$('#messageBox').text('One Player Game');
		resetScore();
	}

	else if ($("#players option:selected").text() === "Two Players"){
		numPlayers =2;
		$('#messageBox').text('Two Player Game');
		resetScore();
	}
});






