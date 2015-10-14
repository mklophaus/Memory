
var foodArray = [
{id: "one", url: "assets/food/recipe_any.png"},
{id: "two", url: "assets/food/recipe_chinesefood.png"},
{id: "three", url: "assets/food/recipe_deserts.png"},
{id: "four", url: "assets/food/recipe_japanesefood.png"},
{id: "five", url: "assets/food/recipe_maindishes.png"},
{id: "six", url: "assets/food/recipe_noodles.png"},
{id: "seven", url: "assets/food/recipe_otherfood.png"},
{id: "eight", url: "assets/food/recipe_others.png"},
{id: "nine", url: "assets/food/recipe_rice.png"},
{id: "ten", url: "assets/food/recipe_snacks.png"},
{id: "eleven", url: "assets/food/recipe_soup.png"},
{id: "twelve", url: "assets/food/recipe_westernfood.png"},
{id: "one", url: "assets/food/recipe_any.png"},
{id: "two", url: "assets/food/recipe_chinesefood.png"},
{id: "three", url: "assets/food/recipe_deserts.png"},
{id: "four", url: "assets/food/recipe_japanesefood.png"},
{id: "five", url: "assets/food/recipe_maindishes.png"},
{id: "six", url: "assets/food/recipe_noodles.png"},
{id: "seven", url: "assets/food/recipe_otherfood.png"},
{id: "eight", url: "assets/food/recipe_others.png"},
{id: "nine", url: "assets/food/recipe_rice.png"},
{id: "ten", url: "assets/food/recipe_snacks.png"},
{id: "eleven", url: "assets/food/recipe_soup.png"},
{id: "twelve", url: "assets/food/recipe_westernfood.png"}
 ];

var x = 0;
var clickCount = 0;
var firstPic;
var secondPic;

var picClicked;
var nextClicked

//shuffles 2nd array of pictures
var shuffleArray = function(){
	var i = foodArray.length, tempVal, randomIndex;

	while(0 !== i){
		randomIndex = Math.floor(Math.random() * i);
		i -= 1;

		tempVal = foodArray[i];
		foodArray[i] = foodArray[randomIndex];
		foodArray[randomIndex] = tempVal;
	}

	return foodArray;
}
shuffleArray();

////FIGURE OUT HOW TO GET IMG ID and THEN PARSEINT.....


$(document).ready(function()
{	
	var checkifMatch =function(){ 
		if (clickCount == 1){
			firstPic = foodArray[x].id;
			return false;
		}
		else if (clickCount == 2){
			secondPic = foodArray[x].id;

			if(firstPic == secondPic){
				console.log("MATCH!");
				return true;
			}
			else if(firstPic !== secondPic){
				return false;
			}
		}

	};

//$(.board img).on('click'l '.down', function)event
	//Show image on click
	//$(".board img").click(function(event){
	  $(".board .down").on('click', function(event){


		if (clickCount ==0){
			picClicked = $(event.target);
			var thisID = picClicked.attr('id');
			////////pull items out of this id to send to array
			alert(thisID);

			console.log(thisID);
			picClicked.attr('src', foodArray[x].url);
			//to change class to up....
			//picClicked.attr('class', "up");
		}
		
		else if (clickCount ==1){
			nextClicked = $(event.target);
			nextClicked.attr('src', foodArray[x].url);
			//to change class to up....
			//nextClicked.attr('class', "up");
		} 


		console.log(foodArray[x].url);
		clickCount+=1;
		console.log(clickCount);

		/*var flipBack = function(){
			$(event.target).attr('src', "assets/back-red_3_1024x1024.png");
		};*/ 
			
		if (checkifMatch() == true){
			clickCount = 0;
		}	
		else if((checkifMatch() == false) && (clickCount == 2)){
			
			setTimeout(function(){
				picClicked.attr('src', "assets/back-red_3_1024x1024.png");
				nextClicked.attr('src', "assets/back-red_3_1024x1024.png");
				}, 1000);

			clickCount = 0;
		}

	});

});

//populate array with picture


//populate cards with pictures from array

//add event listener for whole board that 
//recognizes when cell is clicked and sends out random picture



//create event that recognizes when two cards are chosen

//create event 








