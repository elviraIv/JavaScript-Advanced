function create(words) {
   let parentElement = document.getElementById('content');

   for (let index = 0; index < words.length; index++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(words[index])
      
      parentElement.appendChild(div);
      div.appendChild(p);
      p.style.display = 'none';
      p.appendChild(text);

      div.addEventListener('click', onclick);
      function onclick(){
         p.style.display = 'block';
      }

      
   }
}