function solve(string){
console.log(string
    .replace(/[^a-zA-Z0-9]/g, " ")
    .toUpperCase()
    .split(' ')
    .filter(x => x.length>0)
    .join(', '));
    
}

solve('Hi, how are you?');
solve('hello');