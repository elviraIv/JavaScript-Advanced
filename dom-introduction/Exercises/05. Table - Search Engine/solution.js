function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let userInputElement = document.getElementById('searchField');
   let rowsElement = document.querySelectorAll('tbody tr');

   function onClick() {

      for(let row of rowsElement){
         row.classList.remove('select');

         if(userInputElement.value !== '' && row.innerHTML.includes(userInputElement.value)){
            row.className = 'select';
         }

      }
      userInputElement.value = ''

   }
}