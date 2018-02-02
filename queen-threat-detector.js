var boardLength = 8;
var boardWidth = 8;

var queen1 = [1,3];
var queen2 = [4,6];

// var queen1 = [0, 0];
// var queen2 = [7, 5];


console.log("------------------------")
drawBoard(queen1, queen2);
console.log("------------------------")
checkThreat(queen1, queen2);


function drawBoard(queen1, queen2) {
  var board = "";
  for(var i = 0; i < boardLength; i ++ ){
    for (var j = 0; j < boardWidth; j ++){
      if(queen1[0] === i && queen1[1] === j){
        board += " 1 ";
      }else if(queen2[0] === i && queen2[1] === j){
        board += " 1 ";
      }
      else{
        board += " 0 "
      }

    }if(i < boardLength -1){
      board += "\n";
    }

  }
  console.log(board);
}

function checkThreat(queen1, queen2) {
  if(Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])){
    console.log("DIAGONAL THREAT");
    return true;
  }else if(queen1[0] === queen2[0]){
    console.log("HORIZONTAL THREAT")
    return true;
  }else if(queen1[1] === queen2[1]){
    console.log("VERTICAL THREAT");
    return true
  }
  else {
    console.log("NO THREAT");
    return false;
  }
}

