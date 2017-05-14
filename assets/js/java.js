
//computer choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g",  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
			"w", "x", "y", "z "];

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 10;


//computer selects random letter
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

var updateGuessesLeft = funtion() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}
