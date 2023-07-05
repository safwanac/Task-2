function rectangle(length, width) {
  if (length <= 0 || width <= 0) {
    return " Length and width must be positive numbers.";
  }

  var area = length * width;

  return area;
}

var length = 3;
var width = 5;

var area = rectangle(length, width);

console.log("The area of the rectangle is: " + area);
