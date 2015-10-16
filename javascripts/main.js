var clickCount = 0;
var firstPic, secondPic;
var picClicked, nextClicked, currentClicked, num;
var gameArray = foodArray.slice();
var numPlayers = 1;
var playerTurn = true;
var p1Score=0; 
var p2Score=0;


//shuffles array of pictures
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
		p1Score =0;
		p2Score =0;	
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



///Animates document when win occurs/////
var animateWinner = function(){
	//Cards flash
	for (var i = 2500; i >= 1; i--){
		$('.front').fadeOut(400).fadeIn(400);
		$('.flash').fadeOut(400).fadeIn(400);
	}    

	setTimeout(function(){
		var winPrompt = confirm("Winner! Would you like to play again?");}, 2700);
	if(winPrompt){
		location.reload();
	}
};



////Checks for winner in 1P/2P mode/////
var handleWinner = function(){
	if(p1Score == 2){
		$('#messageBox').text('You Win!');
	    animateWinner();
	}
	else if((p1Score + p2Score ==12) && (p1Score>p2Score)){
		$('#messageBox').text('Player 1 Wins!');
		animateWinner();
	}
	else if((p1Score + p2Score ==12) && (p2Score>p1Score)){
		$('#messageBox').text('Player 2 Wins!');
		animateWinner();
	}
};



/////////PICKS CARDS AND CHECKS CLICK////////////
var pickCards = function(){
	
	if((clickCount >= 2)){
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
};



//////FLIPS CARDS////////////
var flipCards = function(){
	if ($(event.target).is(".front")){
		return false;
	}
	num = currentClicked.attr('id');
	currentClicked.attr('src', gameArray[num].url);
	currentClicked.addClass("front");
	clickCount+=1;
};



////INCREMENTS SCORE WHEN MATCH OCCURS///////
var renderScore = function(){
	if(numPlayers == 1){
		p1Score +=1;
		$('#msg').text('Score: ' + p1Score);
		handleWinner();
	}
	else if(numPlayers == 2){
		if(playerTurn){
			p1Score +=1;
			$('#msg').text('Player 1 Score: ' + p1Score);
			handleWinner();
		}
		else if(!playerTurn){
			p2Score +=1;
			$('#msg').text('Player 2 Score: ' + p2Score);
			handleWinner();
		}

	}
};



//Renders player Change/////
var changePlayer = function(){
	playerTurn = !playerTurn;
	if(numPlayers == 1){
		return false;
	}
	else if (playerTurn){
		$('#turn').text('Player 1 Turn');
	}
	else if (!playerTurn){
		$('#turn').text('Player 2 Turn');
	}
};



///Board Event Listener/////
$(".board .down").on('click', function(event){

	pickCards();
	flipCards();

	if (checkifMatch()){
		renderScore();
		changePlayer();
		clickCount =0;
	}

	else if((!checkifMatch()) && (clickCount == 2)){
		
		//CHANGES THE WRONG PAIR BACK TO THEIR BACKSIDE
		setTimeout(function(){
			picClicked.removeClass("front");
			picClicked.attr('src', "assets/back-red_3_1024x1024.png");
			nextClicked.removeClass("front");
			nextClicked.attr('src', "assets/back-red_3_1024x1024.png");
			changePlayer();
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
	else if ($("#category option:selected").text() === "Things"){
		gameArray = thingsArray.slice();
		shuffleArray();
	}
});



///////////CHANGING 1PLAYER/2PLAYER//////////////
$("#players").change(function(){
	if ($("#players option:selected").text() === "One Player"){
		numPlayers =1;
		$('#msg').text('One Player Game');
		resetScore();
	}

	else if ($("#players option:selected").text() === "Two Players"){
		numPlayers =2;
		$('#msg').text('Two Player Game');
		resetScore();
	}
});



/////Resets whole game//////
$("#reset").on('click', function(){
	location.reload();
});


