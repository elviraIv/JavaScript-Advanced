function diagonalSum(array) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < array.length; i++) {
    leftDiagonalSum += array[i][i];
    rightDiagonalSum += array[i][array.length - i - 1];
  }

  console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
  
}

diagonalSum([
  [20, 40],
  [10, 60],
]);
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
