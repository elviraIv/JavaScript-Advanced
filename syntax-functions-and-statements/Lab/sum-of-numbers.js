function solve(numN,numM){
numN = Number(numN);
numM = Number(numM);

let sum = 0;
for (let index = numN; index <= numM; index++) {
    sum += index;
    
}

console.log(sum);


}

solve('1', '5');
solve('-8', '20');