function solve(array){

    let sum = array[0].reduce((a,b)=>a+b);

    for (let i = 0; i < array[0].alength; i++) {
        
        let currentColSum = 0;

        for (let j = 0; j < array.length; j++) {
            currentColSum += array[j][i];
            
        }
        if(currentColSum !== sum){
            return false;
        }
        
    }

    return true;

}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    );