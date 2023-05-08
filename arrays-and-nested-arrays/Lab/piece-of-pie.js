function solve(array,starting,ending){

    let staringIndex = array.indexOf(starting);
    let endingIndex = array.indexOf(ending);

    let newArray = array.slice(staringIndex,endingIndex + 1);

    console.log(newArray);
}

solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie',
'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie',
'Lemon Meringue Pie'
);
solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie',
'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie',
'Smoked Fish Pie'
);
