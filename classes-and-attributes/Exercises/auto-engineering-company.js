function autoCompany(array){

    let cars = new Map();
   array.forEach(line => {
    let[carBrand,carModel,producedCars] = line.split(' | ');
    producedCars = Number(producedCars);

    if(!cars.has(carBrand)){
        cars.set(carBrand, new Map())
    }

    if(!cars.get(carBrand).has(carModel)){
        cars.get(carBrand).set(carModel,0)
    }

    cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + producedCars);
   });
   console.log(cars);

//    cars.forEach((models,brand)=>{
//     console.log(brand);
//     models.forEach((qty,model)=> console.log(`###${model}->${qty}`));
//    })

}

autoCompany(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100',
'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000', 'Lada | Jigula | 1000000', 'Citroen | C4 | 22', 'Citroen | C5 | 10']
);