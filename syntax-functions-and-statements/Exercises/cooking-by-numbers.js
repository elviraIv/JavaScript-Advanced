function solve(integer, o1, o2, o3, o4, o5) {
  let number = Number(integer);
  let operationsArr = [o1, o2, o3, o4, o5];

  for (let currentOperation of operationsArr) {
    switch (currentOperation) {
      case "chop":
        number /= 2;
        console.log(number);
        break;
      case "dice":
        number = Math.sqrt(number);
        console.log(number);
        break;
      case "spice":
        number += 1;
        console.log(number);
        break;
      case "bake":
        number *= 3;
        console.log(number);
        break;
      case "fillet":
        number *= 0.8;
        console.log(number.toFixed(1));
        break;
    }
  }
}

solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
