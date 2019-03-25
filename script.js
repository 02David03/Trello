var one = document.querySelector('.one');
var two = document.querySelector('.two');

function output (box) {
    var height = box.offsetheight ;
    var width = box.offsetweith ;
    box.textContent = " hight " +  height + " width " + width;
}
output(one);
output(two);
function createPharagraf() {
    let paragrafo = document.createElement('p');
    paragrafo.textContent = "Toma vergonha Marta!";
    document.body.appendChild(paragrafo);
}

let botao = document.querySelector('button');

botao.addEventListener('click',createPharagraf());