function solve(integer) {
  let isSame = true;
  let sum = 0;
  let integerToString = integer.toString();
  let firstDigit = integerToString[0];

  for (let index = 0; index < integerToString.length; index++) {
    sum += Number(integerToString[index]);
    if (firstDigit !== integerToString[index]) {
      isSame = false;
    }
  }

  console.log(isSame);
  console.log(sum);
}

solve(2222222);
solve(1234);
