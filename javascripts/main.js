
console.log("CHECK");

var foodArray = [
{id: "one", url: "../assets/food/recipe_any.png"},
{id: "two", url: "../assets/food/recipe_chinesefood.png"},
{id: "three", url: "../assets/food/recipe_deserts.png"},
{id: "four", url: "../assets/food/recipe_japanesefood.png"},
{id: "five", url: "../assets/food/recipe_maindishes.png"},
{id: "six", url: "../assets/food/recipe_noodles.png"},
{id: "seven", url: "../assets/food/recipe_otherfood.png"},
{id: "eight", url: "../assets/food/recipe_others.png"},
{id: "nine", url: "../assets/food/recipe_rice.png"},
{id: "ten", url: "../assets/food/recipe_snacks.png"},
{id: "eleven", url: "../assets/food/recipe_soup.png"},
{id: "twelve", url: "../assets/food/recipe_westernfood.png"}
 ];

var boardArray = [];

var x = 0;

var foodArray2 = foodArray.slice();


//populates ids into an array
/*var populateIdArray = function() {
	$("#board").find("div").each(function(){boardArray.push(this.id);});
	return boardArray;
};
populateIdArray();

*/
//apending
//onCLick


$(".board").append("<img class='up', src='" + foodArray2[x].url + "'>");




//shuffles 2nd array of pictures
var shuffleArray = function(){
	var i = foodArray2.length, tempVal, randomIndex;

	while(0 !== i){
		randomIndex = Math.floor(Math.random() * i);
		i -= 1;

		tempVal = foodArray2[i];
		foodArray2[i] = foodArray2[randomIndex];
		foodArray2[randomIndex] = tempVal;
	}

	return foodArray2;
}
shuffleArray();


$(document).ready(function()
{	
	var backCard = document.createElement("img");
	backCard.src = "..assets/back-red_3_1024x1024.png";

	for(var b = 0; b<24; b++){
		document.getElementById('#board').append(backCard);
	}

   	function showImage(){
		alert(this.id);
		alert(this.firstchild)
		var target = e.target;

		console.log(target);
		document.target.src = foodArray[x];
		//target image source
		// (#idclicked) display this image....#randomImage 
	}

	console.log("CHECK2");
	var theBoard = document.querySelector("#board");
	theBoard.addEventListener("click", showImage, false);

});

//var c

/*//var playerTurn = true;
$('.board').on('click', 'td', function(evt){

	var cardPicked = evt.target.id? 
	if (cardPicked === "") 
		return;
	else 
}

	)*foodA
//populate array with picture


//populate cards with pictures from array

//add event listener for whole board that 
//recognizes when cell is clicked and sends out random picture



//create event that recognizes when two cards are chosen

//create event 

*/






