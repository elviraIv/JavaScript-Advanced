function evenElements(array) {
    let evenPositionArray = [];
  for (let index = 0; index < array.length; index++) {
    if(index % 2 == 0){
        evenPositionArray.push(array[index])
    }
    
  }

  console.log(evenPositionArray.join(' '));
}

evenElements(["20", "30", "40", "50", "60"]);
evenElements(["5", "10"]);
