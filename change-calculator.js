function calculateChange(total, cash) {
  var totalChange = cash - total;
  var sanitizedChange = Math.round(totalChange * 100);

  var change = {};

  var twenties = 0;
  var tens = 0;
  var fives = 0;
  var twoDollar = 0;
  var oneDollar = 0;
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;


  //twenties
  while(sanitizedChange >= 2000){
      twenties ++;
      sanitizedChange -= 2000;
      change["twenties"] = twenties;
  }

  //tens
  while(sanitizedChange >= 1000){
      tens ++;
      sanitizedChange -= 1000;
      change["tens"] = tens;
  }

  //fives
  while(sanitizedChange >= 500){
    fives ++
    sanitizedChange -= 500;
    change["fives"] = fives;
  }

  //twos
  while (sanitizedChange >= 200){
    twoDollar++;
    sanitizedChange -= 200;
    change["twoDollars"] = twoDollar;
  }

  //ones
  while (sanitizedChange >= 100){
    oneDollar ++;
    sanitizedChange -= 100;
    change["oneDollars"] = oneDollar;
  }

  //quarters
  while (sanitizedChange >= 25){
    quarters ++;
    sanitizedChange -= 25;
    change["quarters"] = quarters;
  }

  //dimes
  while (sanitizedChange >= 10){
    dimes ++;
    sanitizedChange -= 10;
    change["dimes"] = dimes;
  }

  while (sanitizedChange >= 5){
    nickel ++;
    sanitizedChange -= 5;
    change["nickels"] = nickel;
  }

  while (sanitizedChange >= 1){
    pennies ++;
    sanitizedChange -= 1;
    change["pennies"] = pennies;
  }

  return change;

}

console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));