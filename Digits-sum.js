function digitsSum(n) {
  n = Number(n);
  let result = n % 10;
  n = parseInt(n / 10);
  while (result > 0) {
    result += n % 10;
    n = parseInt(n / 10);
  }
  console.log(result);
}

digitsSum(5634);
