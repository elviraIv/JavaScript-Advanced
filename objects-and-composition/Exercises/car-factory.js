function solve(carObject) {
  let car = {};

  let engine = {};
  let carriage = {};

  car.model = carObject.model;

  if (carObject.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (carObject.power <= 120) {
    (engine.power = 120), (engine.volume = 2400);
  } else if (carObject.power <= 200) {
    (engine.power = 200), (engine.volume = 3500);
  }

  carriage.type = carObject.carriage;
  carriage.color = carObject.color;

  carObject.wheelsize % 2 === 1 ? carObject.wheelsize : carObject.wheelsize - 1;
  car.engine = engine;
  car.carriage = carriage;
  car.wheels = new Array(4).fill(carObject.wheelsize);

  return car;
}

solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
