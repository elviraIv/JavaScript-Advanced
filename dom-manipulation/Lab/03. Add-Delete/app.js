function addItem() {
    let inputElement = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    let ulElement = document.getElementById('items');
    newLi.textContent = inputElement.value;

    ulElement.appendChild(newLi);
    inputElement.value='';

//create the delete btn
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newLi.appendChild(deleteBtn);

//add event when delete btn is clicked
    deleteBtn.addEventListener('click', deleteElement);
    function deleteElement(e){
        e.currentTarget.parentNode.remove()
    }


    
}