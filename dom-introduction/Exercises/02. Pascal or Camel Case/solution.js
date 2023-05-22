function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let resultText = "";


  if (namingConvention === "Pascal Case") {
    resultText += text[0].toUpperCase();
    for (let index = 1; index < text.length; index++) {
      if (text[index] === " ") {
        resultText += (text[index + 1].toUpperCase());
        index++;
      } else {
        resultText += (text[index].toLowerCase());
      }
    }
    
  } else if (namingConvention === "Camel Case") {
    for (let index = 0; index < text.length; index++) {
      if (text[index] === " ") {
        resultText += (text[index + 1].toUpperCase());
      index++;
      } else {
        resultText += (text[index].toLowerCase());
      }
    
    }
  } else {
    resultText = 'Error!';
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = resultText;
}
