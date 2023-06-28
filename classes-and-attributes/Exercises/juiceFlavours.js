function juiceFlavours(array){
    let juices = new Map();
    let producedBottles = new Map();

   array.forEach(line => {
    let [juice, quantity] = line.split(' => ');
    quantity = Number(quantity);

    if(!juices.has(juice)){
        juices.set(juice, 0)
    }

    juices.set(juice, Number(juices.get(juice) + quantity));

    if(juices.get(juice) >= 1000){
        producedBottles.set(juice, Math.floor(juices.get(juice) / 1000));
    }
   });


   console.log(producedBottles);
   console.log(juices);

   producedBottles.forEach((type,qty) =>console.log(`${qty} => ${type}`));

}

juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549',
'Strawberry => 549']
);