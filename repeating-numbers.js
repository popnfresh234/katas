function repeatNumbers(data) {
  var outputString ="";
  for (var i = 0; i < data.length; i++){
    var numberArray = data[i];
    for (var k = 0; k < numberArray[1]; k++){
      outputString += numberArray[0].toString();
    }if(i < data.length -1){
      outputString += ",";
    }
  }

  return outputString;
}

console.log(repeatNumbers([[1, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]))
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))