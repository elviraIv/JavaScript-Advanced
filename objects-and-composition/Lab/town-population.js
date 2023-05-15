function solve(array){

    let towns =  {};

    for (const line of array) {
        let info = line.split(' <-> ');
        let town = info[0];
        let population = Number(info[1]);

        if(!towns[town]){
           towns[town] = 0;
            
        }

        towns[town] += population;
    }

    for (let town in towns) {
        console.log(`${town} <-> ${towns[town]}`);
    }
}

solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']
);