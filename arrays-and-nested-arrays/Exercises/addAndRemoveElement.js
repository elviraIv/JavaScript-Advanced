function solve(commands) {
  let newArray = [];

  for (let index = 0; index < commands.length; index++) {
    let currentCommand = commands[index];
    if (currentCommand === "add") {
      newArray.push(index + 1);
    } else if (currentCommand === "remove") {
      newArray.pop();
    }
  }
  if (newArray.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArray.join('\n'));
  }
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
