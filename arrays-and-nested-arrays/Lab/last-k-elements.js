function solve(n, k) {
  let array = [1];

  for (let index = 0; index < n - 1; index++) {
    let sum = 0;
    let currentSequenceArray = array.slice(-k);

    for (let currentElement of currentSequenceArray) {
      sum += currentElement;
    }
    array.push(sum);
  }
  console.log(array);
}

solve(6, 3);
solve(8, 2);
