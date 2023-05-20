function sumTable() {
  let rowElements = document.querySelectorAll('table tr');
  let totalSum = 0;

  for (let index = 1; index < rowElements.length-1; index++) {
    let currentSum = rowElements[index].lastElementChild.textContent;
    totalSum += Number(currentSum);
  }

  document.getElementById('sum').textContent = totalSum;
}


