var MonthMap = {};
MonthMap[1] = "January";
MonthMap[2] = "Febuary";
MonthMap[3] = "March"
MonthMap[4] = "April"
MonthMap[5] = "May"
MonthMap[6] = "June"
MonthMap[7] = "July"
MonthMap[8] = "August"
MonthMap[9] = "September"
MonthMap[10] = "October"
MonthMap[11] = "November"
MonthMap[12] = "December"



function talkingCalendar(date) {
  // console.log(MonthMap[date]);
  var splitStringArray = date.split("/");
  var santizedMonth = removeLeadingZero(splitStringArray[1]);
  var month = MonthMap[santizedMonth];
  var santizedDay = getDay(splitStringArray[2]);
  return month + " " + santizedDay + ", " + splitStringArray[0];
}


function getDay(day) {
  //Remove leading zero
  day = removeLeadingZero(day);

  //Add suffix
  var lastNum = day.charAt(day.length -1);
  if(lastNum === "1" && day !== "11"){
    return day + "st";
  }else if (lastNum === "2"){
    return day + "nd";
  }else if (lastNum === "3" && day !== "13"){
    return day + "rd";
  }else return day + "th";
}

function removeLeadingZero(input) {
  if(input.charAt(0) === "0"){
    return input.slice(1);
  }else return input;
}

console.log(talkingCalendar('2017/12/01'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/13'));