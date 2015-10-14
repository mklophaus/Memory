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



$(document).ready(function()
{
	//////////CHECK NUM CLICKS////////////
	var checkClickCount = function(){
		if (clickCount ==0){
			picClicked = $(event.target);
			var thisId = picClicked.attr('id');
			num = thisId.match(/\d+/);
			num = num -1;
			picClicked.attr('src', gameArray[num].url);
			picClicked.addClass("front");
		}
		
		else if (clickCount ==1){
			nextClicked = $(event.target);
			var thisId = nextClicked.attr('id');
			num = thisId.match(/\d+/);
			num = num -1;
			nextClicked.attr('src', gameArray[num].url);
			nextClicked.addClass("front");
			/*$(".board .down").on('click', function(event){
				event.preventDefault();
			}); */
		} 

		clickCount+=1;
	};


	///////Show image on click//////
	  $(".board .down").on('click', function(event){

		checkClickCount();
							
		if (checkifMatch() == true){
			if(numPlayers ==1){
				p1Score +=1;
				$('#messageBox').text('Score: ' + p1Score);
			}

			else if(numPlayers == 2){
				if(playerTurn){
					p1Score +=1;
					$('#messageBox').text('Player 1 Score: ' + p1Score);
				}
				else if(!playerTurn){
					p2Score +=1;
					$('#messageBox').text('Player 1 Score: ' + p2Score);
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
				}, 800);
			clickCount =0;
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

});


