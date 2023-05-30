function validate() {
    let emailInputElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

    emailInputElement.addEventListener('change', onchange);

    function onchange(){
        if(pattern.test(emailInputElement.value)){
            emailInputElement.classList.remove('error')
        }else{
            emailInputElement.classList.add('error')
        }
    }


}