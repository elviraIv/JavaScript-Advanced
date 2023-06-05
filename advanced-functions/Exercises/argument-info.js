function argumentInfo(){

   let arrayInfo =  Array.from(arguments);
   let tally = {};
     
   arrayInfo.forEach((parameter => {
   let type = typeof parameter;
   let value = parameter;
   console.log(`${type}: ${value}`);

   if(!tally[type]){
    tally[type] = 0;
   }
   tally[type]++;

   

    
   }))
   for (const [key, value] of Object.entries(tally)) {
    console.log(`${key}: ${value}`);
  }
}


   


argumentInfo('cat', 42, function () { console.log('Hello world!'); })