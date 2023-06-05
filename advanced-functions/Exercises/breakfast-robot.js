function solution() {
  let recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      flavour: 10,
    },
  };

  let ingredients = {
    carbohydrate: 0,
    protein: 0,
    flavour: 0,
    fat: 0,
  };

  let commands = {
    restock,
    prepare,
    report,
  };

  return manager;

  function manager(input) {
    let [command, ...params] = input.split(" ");
    return commands[command](...params);
  }

  function restock(microelement, quantity) {
    ingredients[microelement] += Number(quantity);
    return "Success";
  }

  function prepare(recipe, quantity) {
    quantity = Number(quantity);
    let macroNutrients = Object.entries(recipes[recipe]);

    for (const [macroNutrient, required] of macroNutrients) {
      if (ingredients[macroNutrient] < required * quantity) {
        return `Error: not enough ${macroNutrient} in stock `;
      }
    }
    macroNutrients.forEach(([ingredient,required]) => ingredients[ingredient] -= required *quantity);
    return 'Success';
  }

  function report() {
    return `protein=${ingredients[protein]} carbohydrate=${ingredients[carbohydrate]} fat=${ingredients[fat]} flavour=${ingredients[flavour]}`;
  }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
