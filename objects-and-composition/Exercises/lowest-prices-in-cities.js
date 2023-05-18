function solve(array) {
  let products = {};

  for (const line of array) {
    let [townName, productName, productPrice] = line.split(" | ");
    productPrice = Number(productPrice);

    if (products[productName]) {
      if (productPrice >= products[productName].productPrice) {
        continue;
      }
    }
    products[productName] = { townName, productPrice };
  }
  for (const product in products) {
   
    console.log(`${product} -> ${products[product].productPrice} (${products[product].townName})`);
  }

}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
