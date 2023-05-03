function solve(fruit,grams,pricePerKilo){

    let kg = grams / 1000;
    let totalMoney = pricePerKilo * kg;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${kg} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);