function focused() {
    let divElements = document.querySelectorAll('input');
    Array.from(divElements).forEach(x =>{
        x.addEventListener('focus', onfocus);
        x.addEventListener('blur', onblur);
    });

    function onfocus(e){
        e.target.parentElement.classList.add('focused');
    }

    function onblur(e){
        e.target.parentElement.classList.remove('focused')
    }
   
}