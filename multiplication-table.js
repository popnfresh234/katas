function multiplicationTable(maxValue) {
  var line = drawHorizontalLine(maxValue);
  var table = "";
  table += drawHorizontalLine(maxValue);
  for (var i = 1; i < maxValue + 1; i ++){
    table += drawRow(maxValue, i);
    table += drawHorizontalLine(maxValue);
  }
  return table;
}


function drawHorizontalLine(maxValue) {
  var digits = (maxValue * maxValue);
  var length = digits.toString().length + 2
  var line = "+"
  for(var i = 0; i < maxValue; i++){
    for (var j = 0; j < length; j ++){
      line += "-";
    }
    line += "+";
  }
  line += "\n"
  return line;
}

function drawRow(maxValue, currentRow){
  var row = "|"
  for (var j = 1; j < maxValue + 1; j++){
    //Get the multiple and add to row
    var multiple = " " + j * currentRow;
    row += multiple;
    //Calculate how many spaces to add
    var max = maxValue * maxValue;
    var length = max.toString().length;
    var currentlength = (j * currentRow).toString().length;
    var diff = length - currentlength;
    for(k = 0; k <= diff; k++){
      row += " ";
    }
    //Add the end character
    row += "|";
  }
  //Add a return at the end
  row += "\n";
  return row;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
