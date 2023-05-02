function printSquareStars(size) {
  let row = "";

  for (let index = 1; index <= size; index++) {
    row += " " + "*";
  }

  for (let index = 1; index <= size; index++) {
    console.log(row);
  }
}

//printSquareStars(2);
printSquareStars(7);
//printSquareStars(7);
