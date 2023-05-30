const inputRef = document.querySelector('.input')

const buttonRef= document.querySelector('.button')

const divRef = document.querySelector(".resultado")


let nomeUsuario = ''


function exibir(){

console.log("nome")
divRef.innerHTML = nomeUsuario
}

function cadastro(event){

    nomeUsuario = event.target.value

}


buttonRef.addEventListener('click', () =>exibir())


inputRef.addEventListener('keyup',(event)=>cadastro(event)


)


