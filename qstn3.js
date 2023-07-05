function isPrime(number) {
  if (number <= 1) {
    return "Not prime";
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Not prime";
    }
  }

  return "Prime";
}

console.log(isPrime(17));
