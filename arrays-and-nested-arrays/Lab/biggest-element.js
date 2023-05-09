function biggestElement(array){

    let biggestNum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(biggestNum < array[i][j]){
                	biggestNum =  array[i][j];
            }
            
        }
        
    }
    console.log(biggestNum);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
    );
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
    );