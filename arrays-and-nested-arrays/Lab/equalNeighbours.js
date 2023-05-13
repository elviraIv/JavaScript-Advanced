function solve(input){

    let count = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
           let rightNeigbour = input[row][col + 1];

           if(rightNeigbour !== undefined && rightNeigbour === input[row][col]){
            count++;
           }

           if(row > 0){
            let aboveNeighbour = input[row-1][col];
            if(aboveNeighbour !== undefined && aboveNeighbour === input[row][col]){
                count++;
            }
           }
           
        }
        
    }

    console.log(count);
   
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);