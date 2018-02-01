var prompt = require('prompt-sync')();
//Codes for different answer types
var correct = 999;
var alreadyAnswered = 998;
var incorrect = 997;
//Random number 1-100
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessedAnswers = [];
var answerType = incorrect;
var guesses = 0;

while(answerType !== correct){
  //For all cases except the case where user has already guessed, increment guesses
  if(answerType !== alreadyAnswered){
    guesses++;
  }
  //Set the answer type
  answerType = requestInput(randomNumber, guesses);
}



function requestInput(randomNumber, guesses) {
  var userInput = prompt('Guess a number: ');
  var parsedInput;

  //Check and see if input is valid, if so then check answer
  parsedInput = Number(userInput);
  if(isNaN(parsedInput)){
    console.log("Not a number!  Try again!");
    return incorrect;
  }
  return checkInput(parsedInput, randomNumber, guesses);
}


function checkInput(parsedInput, randomNumber, guesses) {
  //If Correct answer guessed
  if(parsedInput === randomNumber){
    console.log("You got it! You took " + guesses + " attempts!");
    return correct;
  } else { //Loop over previously guessed answers
    for(var i = 0; i < guessedAnswers.length; i++){
      if(guessedAnswers[i] === parsedInput){
        console.log("Already guessed!");
        return alreadyAnswered;
      }
    }
    //Otherwise check and see if the guess is high or low
    console.log("> " + parsedInput);
    if(parsedInput < randomNumber){
      console.log("Too Low!");
    } else if (parsedInput > randomNumber){
      console.log("Too High!");
    }
    //Add answer to array of guessed answers
    guessedAnswers.push(parsedInput);
    return incorrect;
  }
}