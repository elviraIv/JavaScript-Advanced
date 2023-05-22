function solve() {
 let textAreaElement = document.getElementById('input');
 let sentenceArray = textAreaElement.value.split('.').filter(x => x !== '');
 let outputElement = document.getElementById('output');

 while(sentenceArray.length > 0){
  let currentParagraph = sentenceArray.splice(0,3).join('. ') + '.';

  let p = document.createElement('p');
  p.textContent = currentParagraph;

  outputElement.appendChild(p)
 }
}