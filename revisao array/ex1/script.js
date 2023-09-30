
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
    }

function tentativa(usuario){
    let usuarioNum = usuario.value
    const lista = document.querySelector('#lista')

        if(numAleatorio == usuarioNum){
            contador++
            lista.innerHTML += `<li class = "vence">Você acertou o número ${numAleatorio} em ${contador} tentativas!</li>`
            btn.style.display = 'none'
            const elemento = document.querySelector('.vence')

            if(elemento.classList.contains('vence')){
                if(contador<=10){
                    elemento.style.color = '#5b9d5b'
                }else if(contador>=11 && contador <=15){
                    elemento.style.color = '#eeb310'
                }else{
                    elemento.style.color = '#ce0b0b'
                }
            }
     
        }else if(numAleatorio < usuarioNum){
            contador++;
            lista.innerHTML += `<li>O número ${usuarioNum} é maior que o valor secreto!</li>`
        }else{
            contador++;
            lista.innerHTML += `<li>O número ${usuarioNum} é menor que o valor secreto!</li>` 
        }

    usuario.value = "";
}

let contador = 0
const numAleatorio = gerarNumeroAleatorio(1, 100)
console.log(numAleatorio)
const btn = document.querySelector('#btn')
    btn.addEventListener('click', function() {
        const usuario = document.querySelector('#valor')
        tentativa(usuario)
    })