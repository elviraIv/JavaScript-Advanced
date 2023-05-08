function solve(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    if (index % 2 !== 0) {
      newArray.push(array[index]);
    }
  }

  console.log(newArray.reverse().map((x) => x * 2));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
