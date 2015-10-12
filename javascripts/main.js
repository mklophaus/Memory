
console.log("CHECK");

var foodArray = [
"../assets/food/recipe_any.ong",
"../assets/food/recipe_chinesefood.png",
"../assets/food/recipe_deserts.png",
"../assets/food/recipe_japanesefood.png",
"../assets/food/recipe_maindishes.png",
"../assets/food/recipe_noodles.png",
"../assets/food/recipe_otherfood.png",
"../assets/food/recipe_others.png",
"../assets/food/recipe_rice.png",
"../assets/food/recipe_snacks.png",
"../assets/food/recipe_soup.png",
"../assets/food/recipe_westernfood.png"
 ];

console.log(foodArray);

var foodArray2 =[];

//array of ids
var boardArray = [];


//populates ids into an array
var populateIdArray = function() {
	$("#board").find("div").each(function(){boardArray.push(this.id);});
	return boardArray;
};
populateIdArray();


//gets random IDS


/* var layOutCards = function() {}

}; */

var randomImage = function(){
	var x = foodArray[Math.floor(Math.random() * foodArray.length)];
	return x; };

$(document).ready(function()
{	
	function showImage(){
		alert(this.id);

		var target = e.target;
		console.log(target);
		document.target.src = foodArray[x];
		//target image source
		// (#idclicked) display this image....#randomImage 
	}

	console.log("CHECK2");
	var theBoard = document.querySelector("#board");
	//theBoard.addEventListener("click", showImage, false);

	$('#board div')


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






