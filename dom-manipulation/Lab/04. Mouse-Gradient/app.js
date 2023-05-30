function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', show);
    function show(e){
        let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100); 
        resultElement.textContent = percent +'%';
    }

}