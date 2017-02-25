wins = 0
losses = 0
numberOfGuesses = 0


var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z'];
var actionMovies = ["Bourne", "John Wick", "XXX", "Transporter", "Taken"];
var randomWord = actionMovies[Math.floor(Math.random()*actionMovies.length)];
var list = document.getElementById("gamelist");
var lineItems = document.getElementByTag("li");
var theAnswer = []; 

	document.getElementById("choice").onkeyup = function() {guessFunction()};

	function guessFunction {
	
		var takeAGuess = document.getElementById("choice").value;

			if (takeAGuess <= randomWord.length) {

			list.replaceChild(lineItems, list.childNodes[]);

		}

	}

	guessFunction();

	// var userGuesses = randomWord.length;



	// for (var i = 0; i < randomWord.length; i++) {
	// 	theAnswer[i] = "_";
// document.getElementById("guesses").onkeyup = function() {guessFunction()};

// 	function guessFunction() {
 
// 	    var x = document.getElementById("guesses");
// 	                if (userGuesses === "m") {
// 	    		document.getElementById("guesses").innerHTML = x.value;
// 	    };
// 	    else {
// 	                userGuesses.innerHTML = x;
// 	    };
// 	};

	


