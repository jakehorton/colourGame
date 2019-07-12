	var numSquares = 6;
	var colors = generateRandomColors(numSquares);
	var squares = document.querySelectorAll (".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message")
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var modeButtons = document.querySelectorAll(".mode");

	for (var i=0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener ("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// one-line 'if' statement - called ternary operator
			this.textContent === "Easy" ? numSquares =3: numSquares =6;
			reset ();

			// Or use longer method below

			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }

			// figure out how many squares to show

			// pick new colours

			// pick new pickedcolour

			// update page to reflect changes
		});
	}
	
	function reset(){
		colors = generateRandomColors(numSquares);
		// pick a new random colour from array
		pickedColor = pickColor();
		// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colours"

		messageDisplay.textContent = "";
		// change colours of squares
		for(var i = 0; i<squares.length; i++){
			if(colors[i]){
			squares [i].style.display ="block";
			squares[i].style.backgroundColor= colors[i];
		} else {
			squares[i].style.display="none";
		}
	}
		// change h1 background back to original background colour
		h1.style.backgroundColor = "steelblue";
	
}

	// easyBtn.addEventListener("click", function(){
	// 	easyBtn.classList.add("selected");
	// 	hardBtn.classList.remove("selected");
	// 	numSquares = 3;
	// 	colors= generateRandomColors(numSquares);
	// 	pickedColor=pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	// change colour of top 3 squares for easy mode
	// 	for (var i=0; i<squares.length; i++){
	// 		if(colors[i]){
	// 			squares[i].style.background = colors [i];
	// 		} else {
	// 			squares[i].style.display = "none"
	// 		}
	// 	}
	// })

	// hardBtn.addEventListener("click", function(){
	// 	hardBtn.classList.add("selected");
	// 	easyBtn.classList.remove("selected");
	// 	numSquares=6;
	// 	colors= generateRandomColors(numSquares);
	// 	pickedColor=pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for (var i=0; i<squares.length; i++){
	// 			squares[i].style.background = colors [i];
	// 			squares[i].style.display = "block"
	// 		}
	// 	}
	// )


	resetButton.addEventListener("click", function(){
		reset();

		// // generate all new colours
		// colors = generateRandomColors(numSquares);
		// // pick a new random colour from array
		// pickedColor = pickColor();
		// // change colorDisplay to match picked color
		// colorDisplay.textContent = pickedColor;
		// this.textContent = "New Colours"

		// messageDisplay.textContent = "";
		// // change colours of squares
		// for(var i = 0; i<squares.length; i++){
		// 	squares[i].style.backgroundColor= colors[i];
		// }
		// // change h1 background back to original background colour
		// h1.style.backgroundColor = "steelblue";
	})

	colorDisplay.textContent = pickedColor;

	for(var i=0; i < squares.length; i++){
		// add initial colours to squares
		squares[i].style.backgroundColor = colors[i];
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab colour of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare colour to pickedColour
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}

	function changeColors(color){
		// loop through all squares
		for(var i=0; i < colors.length; i++){
		// change all colors to match given color
		squares[i].style.backgroundColor= color;
		}
	}


function pickColor(){
	// pick a random number within the group size of colors.length 
	// use Math.floor to remove decimals and make whole number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	}

function generateRandomColors(num){
	// make an array
	var arr= []
	// add num random colours to array
	// repeat num times
	for(var i=0; i<num; i++){
		// get random colour and push into array
		arr.push(randomColor())
		}
	// return that array
	return arr;
	}

function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random()*256)
	// pick a "green" from 0-255
	var g = Math.floor(Math.random()*256)
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256)
	return "rgb(" + r + ", " + g + ", " + b + ")";

	};