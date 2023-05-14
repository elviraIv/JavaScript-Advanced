function solve(array) {
  
    let matrix = array.map(row => row.split(' ').map(Number));
   
     
  

  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    leftDiagonalSum += matrix[i][i];
    rightDiagonalSum += matrix[i][matrix.length - 1 - i];
  }
    
 

  if (leftDiagonalSum === rightDiagonalSum) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && j !== matrix.length - 1-i) {
          matrix[i][j] = leftDiagonalSum;
        }
      }
    }
  }
  matrix.forEach(row => {
    console.log(row.join(' '));
  });
  

  
}

solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
solve(["1 1 1", "1 1 1", "1 1 0"]);
