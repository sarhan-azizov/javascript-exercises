  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  console.log(factorial(3));
  // (3 * (2 * (1 * (0 ? 1 : n)))) = 6


