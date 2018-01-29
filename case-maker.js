var firstOrderPriority = ["camel", "pascal", "snake", "kebab", "title"];
var secondOrderPriorty = ["vowel", "consonant"];
var thirdOrderPriority = ["upper", "lower"];
var vowels = ["a", "e", "i", "o", "u"];

function makeCase(inputString, caseStyles) {
  if (caseStyles.constructor === Array){
    inputString = sortPriorities(inputString, caseStyles, firstOrderPriority);
    inputString = sortPriorities(inputString, caseStyles, secondOrderPriorty);
    inputString = sortPriorities(inputString, caseStyles, thirdOrderPriority);
    console.log(inputString);
  } else {
    console.log(handleCaseStyle(inputString, caseStyles));
  }
}


function sortPriorities(inputString, caseStyles, priorityArray){
  var returnString;
  var modified = false;
  for (var i = 0; i < caseStyles.length; i++){
    if(checkIfPriority(caseStyles[i], priorityArray)){
        returnString = handleCaseStyle(inputString, caseStyles[i]);
        modified = true;
    }else if (!modified){
      returnString = inputString;
    }
  }
  return returnString;
}


function checkIfPriority(caseStyle, priorityArray ){
  for (i = 0; i < priorityArray.length; i++){
    if(caseStyle === priorityArray[i]){
      return true;
    }
  }
}

function handleCaseStyle(inputString, caseStyle) {
  var output = "";
  //Camel
  if(caseStyle === "camel"){
    output += inputString.charAt(0);
    for (var i = 1; i < inputString.length; i ++){
      if(inputString.charAt(i-1) !== " "){
        output += inputString.charAt(i);
      } else{
        output += inputString.charAt(i).toUpperCase();
      }
    }
  }
  //Pascal
  else if (caseStyle === "pascal"){
    output += inputString.charAt(0).toUpperCase();
    for (var i = 1; i < inputString.length; i ++){
      if(inputString.charAt(i-1) !== " "){
        output += inputString.charAt(i);
      } else{
        output += inputString.charAt(i).toUpperCase();
      }
    }
  }

  //Snake
  else if (caseStyle === "snake"){
    for(var i = 0; i < inputString.length; i++){
      if(inputString.charAt(i) === " "){
        output += "_";
      }else {
        output += inputString.charAt(i);
      }
    }
  }

  //Kebab
  else if (caseStyle === "kebab"){
    for(var i = 0; i < inputString.length; i++){
      if(inputString.charAt(i) === " "){
        output += "-";
      }else {
        output += inputString.charAt(i);
      }
    }
  }

  //title
  else if (caseStyle === "title"){
    output += inputString.charAt(0).toUpperCase();
    for(var i = 0; i < inputString.length; i ++){
      if(inputString.charAt(i) === " "){
        output += inputString.charAt(i+1).toUpperCase();
      }else{
        output += inputString.charAt(i+1);
      }
    }
  }

  //vowel
  else if (caseStyle === "vowel"){
    for(var i = 0; i < inputString.length; i++){
      var vowel = false
      for(var k = 0; k < vowels.length; k++){
        if(inputString.charAt(i) === vowels[k]){
          output += inputString.charAt(i).toUpperCase();
          vowel = true;
        }
      }
      if(!vowel){
        output += inputString.charAt(i);
      }
    }
  }

  //upper
  else if (caseStyle === "upper"){
    for (var i = 0; i < inputString.length; i++){
      output += inputString.charAt(i).toUpperCase();
    }
  }

  else if (caseStyle === "lower"){
    for (var i = 0; i < inputString.length; i++){
      output += inputString.charAt(i).toLowerCase();
    }
  }

  else if (caseStyle === "consonant"){
    for(var i = 0; i < inputString.length; i++){
      var vowel = false
      for(var k = 0; k < vowels.length; k++){
        if(inputString.charAt(i) === vowels[k]){
          output += inputString.charAt(i).toLowerCase();
          vowel = true;
        }
      }
      if(!vowel){
        output += inputString.charAt(i).toUpperCase();
      }
    }
  }

  return output;
}

makeCase('this is a string', 'camel') === 'thisIsAString';
makeCase('this is a string', 'pascal') === 'ThisIsAString';
makeCase('this is a string', 'snake') === 'this_is_a_string';
makeCase('this is a string', 'kebab') === 'this-is-a-string';
makeCase('this is a string', 'title') === 'This Is A String';
makeCase('this is a string', 'vowel') === 'thIs Is A strIng';
makeCase('this is a string', 'consonant') === 'THiS iS a STRiNG';
makeCase('this is a string', ['upper', 'snake']) === 'THIS_IS_A_STRING';