function colorize() {
    let tableElements = document.querySelectorAll('tr:nth-of-type(2n) td');

    tableElements.forEach(x =>{
        x.style.backgroundColor = 'teal';
    });
}