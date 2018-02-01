var prompt = require ('prompt-sync')();

var userInput = prompt('Enter an English sentence please: ');
userInput = userInput.replace(/\W/g, '').toLowerCase();
//If input is too long
if(userInput.length > 81){
  console.log("Sentence too long, enter a sentence less than 81 characters");
}else{
  createCodedMessage(userInput);
}

function createCodedMessage(input){
  var length = input.length;

  //Find the square root since we want this to be as close to a square as possible
  var sqrt = Math.sqrt(length);

  //Length will always be the closest perfect square minus any remainder
  var height = sqrt - sqrt % 1;
  var length = 0;

  //If the number is not a perfect square, the next closest will be one extra row
  if((sqrt % 1) > 0) {
    length = (sqrt - sqrt % 1) + 1;
    //If the height * length is less than the total lenght, we need one more row
    if(height * length < input.length){
      height += 1;
    }
  }else length = height; //Otherwise we've got a perfect square

  console.log("-------------------------------------");
  console.log("Length is " + length);
  console.log("Height is " + height);
  console.log("-------------------------------------");

  var position = 0;
  var output = '';

  var codedOutput = '';
  var codedPosition = 0;


  //Create square for visualization purposes
  //Loop over number of rows
  for(var i = 0; i < height; i ++){
    //create row
    for(var j = 0; j < length; j++){
      if(position < input.length){
        output += input[position];
      }
      position ++;
    }
    if(i < height -1){
      output += "\n";
    }
  }
  console.log(output);
  console.log("-------------------------------------");

  //Code output
  for(var i = 0; i < length; i++){
    codedPosition = i;
    for(var j = 0; j < length; j++){
      if(codedPosition < input.length){
        codedOutput += input[codedPosition];
        codedPosition += length;
      }
    }
    if(i < length - 1){
      codedOutput += " ";
    }

  }

  console.log(codedOutput);
  console.log("-------------------------------------");
}