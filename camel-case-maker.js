function camelCase(inputString) {
  var output = "";
  output += inputString.charAt(0);
  for (var i = 1; i < inputString.length + 1; i++){
    if (inputString.charAt(i - 1) !== " "){
      if(inputString.charAt(i) !== " "){
        output += inputString.charAt(i);
      }
    }else{
      output += inputString.charAt(i).toUpperCase();
    }
  }
  return output;
}

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));