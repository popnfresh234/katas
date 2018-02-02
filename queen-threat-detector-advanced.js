var diagonalThreat = 999;
var horizontalThreat = 998;
var verticalThreat = 997;


var boardHeight = 8;
var boardWidth = 8;

var queen1 = [4,6];
var queen2 = [1,3];

// var queen1 = [0, 0];
// var queen2 = [7, 5];

console.log("------------------------")
drawBoard(queen1, queen2);
console.log("------------------------")
var threat = (checkThreat(queen1, queen2));
if(threat === horizontalThreat){
  console.log("Horizontal threat!");
}else if (threat === verticalThreat){
  console.log("Horizontal threat!");
}else if (threat === diagonalThreat){
  console.log("Diagonal threat!");
}else console.log("No threat!");

function drawBoard(queen1, queen2) {
  var board = "";
  //Find out which queen is lower and left3
  var threat = checkThreat(queen1, queen2);

  //iterate over height of board
  for(var i = 0; i < boardHeight; i ++ ){
    //Keep track of whether a star for diagonal threat has been drawn
    var starDrawn = false;
    //iterate over width of board
    for (var j = 0; j < boardWidth; j ++){
      //Check if we're drawing Q1
      if(queen1[0] === i && queen1[1] === j){
        board += " X ";
      }
      //Check if drawing Q2
      else if(queen2[0] === i && queen2[1] === j){
        board += " Y ";
      }
      //If there is a horizontal threat
      else if (threat === horizontalThreat){
        var horizontalRange = returnHorizontalRange(queen1, queen2);
        if(i === queen1[0] && j > horizontalRange[0] && j < horizontalRange[1]){
          board += " - ";
        }else board += " 0 ";
      }
      //If there is a vertical threat
      else if (threat === verticalThreat){
        var verticalRange = returnVerticalRange(queen1, queen2);
        if(j === queen1[1] && i > verticalRange[0] && i < verticalRange[1]){
          board += " | ";
        }else board += " 0 ";
      }
      //If there is a diagonal threat
      else if (threat === diagonalThreat){
       var positions = returnDiagonalValues(queen1,queen2);
       for(var k = 0; k < positions.length; k ++){
        var position = positions[k];
        if(i === position[0] && j === position[1]){
          board += " * ";
          //Note that we've drawn a star here
          starDrawn = true;
        }
      }
      if(j === boardHeight -1 && starDrawn){
        //don't draw anything since a star has been drawn already or we'll be off by one
      }else{
        board += " 0 ";
      }
    }
    //No threat, No queen, draw regular board
    else{
      board += " 0 "
    }

  }

  //Move to next row
  if(i < boardHeight -1){
    board += "\n";
  }
}
console.log(board);
}


function checkThreat(queen1, queen2) {
  if(Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])){
    return diagonalThreat;
  }else if(queen1[0] === queen2[0]){
    return horizontalThreat;
  }else if(queen1[1] === queen2[1]){
    return verticalThreat
  }
  else {
    return 0;
  }
}

function isQueen1Lower(queen1, queen2) {
  if(queen1[0] - queen2[0] > 0){
    return true;
  }else{
    return false;
  }
}

function isQueen1Left(queen1, queen2){
  if(queen1[1] - queen2[1] < 0){
    return true;
  }else return false;
}

function returnHorizontalRange(queen1,queen2) {
  var xOne = queen1[1];
  var xTwo = queen2[1];
  if(xTwo - xOne > 0){
    return [queen1[1], queen2[1]];
  }else return [queen2[1], queen1[1]];
}

function returnVerticalRange(queen1, queen2){
  var yOne = queen1[0];
  var yTwo = queen2[0];
  if(yOne - yTwo > 0){
    return [queen2[0], queen1[0]];
  }else return [queen1[0], queen2[0]];
}

function returnDiagonalValues(queen1, queen2){
  //get the distance between two queens
  var positions = [];
  var distance = Math.abs(queen1[0] - queen2[0]);

  if(!isQueen1Lower(queen1, queen2)){
    if(isQueen1Left(queen1, queen2)){
      for(var i = 1; i < distance; i ++){
        positions.push([queen1[0] + i, queen1[1]+ i])
      }
    }else{
      for(var i = 1; i < distance; i++){
        positions.push([queen1[0] + i, queen1[1] - i]);
      }
    }
  }else{
    if(isQueen1Left(queen1,queen2)){
      for(var i = 0; i < distance; i ++){
        positions.push([queen1[0] - i, queen1[1] + i]);
      }
    }else{
      for (var i = 0; i < distance; i ++){
        positions.push([queen1[0] - i, queen1[1]- i])
      }
    }
  }
  return positions;
}