function sort(array){

    array.sort((a,b) => a.localeCompare(b));

    for (let index = 0; index < array.length; index++) {
       console.log(`${index + 1}.${array[index]}`);
        
    }
        
    }


sort(["John",
"Bob", "Christina", "Ema"]
);