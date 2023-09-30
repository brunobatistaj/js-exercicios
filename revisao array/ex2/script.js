let maiorQuantidade = 0
let divMaiorQuantidade


const btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
    const nome = document.querySelector('#produto').value
    const quant = document.querySelector('#quantidade').value

    criaDiv(nome, quant);
})

function criaDiv(nome, quant){
    var box = document.body
    var div = document.createElement('div')

    div.style.width = "200px"
    div.style.height = "100px"
    div.style.border = "1px solid black"
    div.style.backgroundColor = "#fff8888"
    div.style.margin = "10px"
    div.style.display = "inline-block"

    var texto = document.createElement('p')
    texto.innerHTML = `Nome: ${nome}`
    var num = document.createElement('p')
    num.innerHTML = `Quantidade: ${quant}`

    box.appendChild(div)
    div.appendChild(texto)
    div.appendChild(num)
    
    
    if (quant > maiorQuantidade) {
        if (divMaiorQuantidade) {
            divMaiorQuantidade.classList.remove('verde')
        }
        maiorQuantidade = quant
        divMaiorQuantidade = div;
        div.classList.add('verde');
        console.log(nome)
    }
}

