function solve(array){

    let sum = 0;
    for (let element of array) {
        sum+=element;
    }

    console.log(sum);

    let sumInverse = 0;
    for (let element of array) {
        sumInverse+= 1/element;
    }

    console.log(sumInverse);

    let resultConcat = '';
    for (let element of array) {
        resultConcat += element;
    }
    console.log(resultConcat);
    
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);