function biggerHalf(array){

    array.sort((a,b)=> a-b);

    let numElements = array.length;
    let newArray = [];
    
    if(numElements % 2 == 0){
        newArray = array.splice(numElements / 2);
    }else{
        newArray = array.splice((numElements - 1) / 2)
    }
    console.log(newArray);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);