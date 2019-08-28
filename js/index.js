var input = document.querySelector('#names');
var btnClick = document.querySelector('#btnClick');
var texto = document.querySelector('#pe');
var resultado = document.querySelector('#resulto');
var btnSorteia = document.querySelector('#btnSorteia');
var laDiv = document.querySelector('.nomes');

var nomes = []

btnClick.onclick = () => {
    nomes.push((input.value));
    input.value = "";

    // texto.innerHTML = nomes;
    var criaPe = document.createElement('p');
    var conteudoPe = document.createTextNode(nomes[nomes.length - 1]); 
    criaPe.appendChild(conteudoPe);

    laDiv.appendChild(criaPe);
}
console.log(nomes);

sortear = () => {
    var rand = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.innerHTML = rand;
}

btnSorteia.onclick = () => {
    if(nomes.length == 0){
        alert('Por favor, insira algum nome na caixa de texto');
    }else{
        sortear();
    }
}