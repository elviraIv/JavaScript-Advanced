function solve(num1,num2,num3){
    let largestNum;

    if(num1 > num2 && num1>num3){
        largestNum = num1;
    
    }


    if(num2 > num1 && num2>num3){
        largestNum = num2;
    
    }

    if(num3 > num1 && num3>num2){
        largestNum = num3;
    
    }

    console.log(`The largest number is ${largestNum}.`);
    

}

solve(5, -3, 16);
solve(-3, -5, -22.5);