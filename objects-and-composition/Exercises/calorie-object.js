function solve(array) {
  let products = {};

  for (let index = 0; index < array.length; index+=2) {
      let foodName = array[index];
      let caloriesPer100Grams = array[index +1];
    
      products[foodName] = Number(caloriesPer100Grams);
   

    }
    console.log(products);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
