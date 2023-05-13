function rotateArray(array, count){

    for (let index = 0; index < count; index++) {
        let lastElement = array.pop();
        array.unshift(lastElement)
        
    }

    console.log(array.join(' '));
}

rotateArray(['1',
'2',
'3',
'4'],
2
);
rotateArray(['Banana',
'Orange', 'Coconut', 'Apple'], 15
);