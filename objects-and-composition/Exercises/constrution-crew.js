function solve(workerObject){

    if(workerObject.dizziness){
        let waterToDrink = 0.1 * workerObject.weight * workerObject.experience;
        workerObject.levelOfHydrated+=waterToDrink;
        workerObject.dizziness = false;
    }

return workerObject;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0, dizziness: true }
    );
    