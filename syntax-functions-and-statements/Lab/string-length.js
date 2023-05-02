function solve(stringOne, stringTwo, stringThree) {
  let sum = stringOne.length + stringTwo.length + stringThree.length;
  let avgLength = sum / 3;

  console.log(sum);
  console.log(Math.floor(avgLength));
}

solve("chocolate", "ice cream", "cake");
solve("pasta", "5", "22.3");
