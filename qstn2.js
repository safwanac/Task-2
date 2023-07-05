function findareasquare(side) {
  if (side <= 0) {
    return "Side length should be a positive number.";
  }

  var areasquare = side * side;

  return areasquare;
}

var side = 6;

var areasquare = findareasquare(side);

console.log("The area of the square is: : " + areasquare);
