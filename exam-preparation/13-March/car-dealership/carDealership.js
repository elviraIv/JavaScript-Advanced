class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsePower, price, mileage) {
    if (!model || horsePower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({ model, horsePower, price, mileage });
    return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    if (this.availableCars.includes(!model)) {
      return `${model} was not found!`;
    }

    let carIndex = this.availableCars.findIndex((c) => c.model === model);
    const car = this.availableCars[carIndex];
    let price = Number(car.price);
    if (car.mileage <= desiredMileage) {
    } else if (car.mileage - desiredMileage <= 40000) {
      price *= 0.95;
    } else {
      price *= 0.9;
    }

    this.availableCars.splice(carIndex, 1);
    this.soldCars.push({ model, horsePower: car.horsePower, soldPrice: price });

    return `${model} was sold for ${car.price.toFixed(2)}`;
  }

  currentCar() {
    if (!this.availableCars) {
      return "There are no available cars";
    }

    let result = ["-Available cars:"];

    this.availableCars.forEach((c) =>
      result.push(
        `--${c.model} - ${c.horsePower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
      )
    );

    return result.join("\n");
  }

  salesReport(criteria) {
    const sortMethods = {
      horsePower: (a, b) => b.horsePower - a.horsePower,
      model: (a, b) => a.model.localeCompare(b.model),
    };

    if (!sortMethods[criteria]) {
      return new Error("Invalid criteria!");
    }

    const result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length()} cars sold:`,
    ];

    this.soldCars.sort(sortMethods[criteria]);
    this.soldCars.forEach((c) => {
      result.push(
        `---${c.model} - ${c.horsePower} HP - ${c.price.toFixed(2)}$`
      );
    });

    return result.join("\n");
  }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
console.log(dealership.salesReport(model));
