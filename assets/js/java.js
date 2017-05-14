
//computer choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g",  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
			"w", "x", "y", "z "];


//Declareing vars
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 10;
var lettersGuessed =[];


//computer selects random letter
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//update guessesLeft
var updateGuessesLeft = function(){
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

//update funtion to show letters guessed
var updateLettersGuessed = function(){
	document.querySelector("#letters").innerHTML = "Your guesses so far: " + lettersGuessed.join(",");
};

