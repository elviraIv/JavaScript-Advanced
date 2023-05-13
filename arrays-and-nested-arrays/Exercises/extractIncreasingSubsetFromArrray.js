function solve(array) {
  let biggestCurrentElement = Number.MIN_SAFE_INTEGER;
  let result = array.reduce((accumulated, currentElement) => {
    if (biggestCurrentElement < currentElement) {
      accumulated.push(currentElement);
      biggestCurrentElement = currentElement;
    }
    return accumulated;
  }, []);

  return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
