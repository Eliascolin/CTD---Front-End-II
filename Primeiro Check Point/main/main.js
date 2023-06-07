//https://docs.google.com/document/d/1xoosin6AZL3p8XJlMEge7_iyAmx6LTsg7vpop-j7UHY/edit

//https://www.figma.com/file/XMNFWdQDJOsHjogi2t4dhu/%5BReDesign%5D-Check-Point-1-(Front-end-2)?type=design&node-id=901-87&t=cIhnaY3aP4KlfBEb-0



let inputNomeRef = document.querySelector("#input_nome")

let inputSobrenome = document.querySelector("#input_sobrenome")

let inputImagem = document.querySelector("#input_imagem")

let inputDescriçao = document.querySelector("#input_descricao")

let botonForm = document.querySelector(".botonForm")

let formularioRef = document.querySelector("#section_avartar")

const mensagemErro = document.querySelector(".erro_mensagem");


//coferir se os input estao com erro 
let formaHasError = {
  nome: true,
  sobrenome: true,
  imagemAvatar: true,
  descricao: true
}


  
/// avaliar os imput
function validarInput(event){
  const target = event.target.trim()
  const isValid = target.checkValidity()

  if(isValid){
//adicionar clase de error
    target.classList.remove("error")
    formaHasError[target.name] = false
    target.nextElementSibling.textContent = ""

}else{

  //mensagem de erro no small
  target.nextElementSibling.textContent = "Valor inválido";

  // caso seja invalido formaHasError para true a propiedade eque estiver com erro
  formaHasError[target.name] = true
  target.classList.add("error")
    
}


// chamada da funçao disabledButtonErro que  deshabilita o  botao
disabledButtonErro()

}


// enviar formulario
function sentForm (){

 let nome  = inputNomeRef.value

 let sobrenome =  inputSobrenome.value

 let img = inputImagem.value

 let descricao = inputDescriçao.value

 formularioRef.classList.add("section_avartar")

 formularioRef.innerHTML +=`
 <div class="card_avatar">
 <img src="${img}" class="avatar-img-top" alt="...">
 <div class="text-description">
   <h2 class="card-nome">${nome}</h2>
   <h3 class="card-apelido">${sobrenome}</h3>
   <p class="carde-descricao">${descricao}</p>
 </div>
</div>
 `
 formularioRef.scrollIntoView()

}

//deshabilitar botao
function disabledButtonErro(){
  

  if(!formaHasError.nome && !formaHasError.sobrenome && !formaHasError.imagemAvatar && !formaHasError.descricao){
  
    botonForm.disabled = false
     
  }else{
  
    botonForm.disabled = true
    
  }
  
  
  
  
  }



//aplicar validarInput no input nome
inputNomeRef.addEventListener("keyup",(event)=>validarInput(event))

//aplicar validarInput no input Sobre nome
inputSobrenome.addEventListener("keyup",(event)=>validarInput(event))

//aplicar validarInput no input Img
inputImagem.addEventListener("keyup",(event)=>validarInput(event))

//aplicar validarInput no input descriçao
inputDescriçao.addEventListener("keyup",(event)=>validarInput(event))

//aplicar sentForm no botão
botonForm.addEventListener('click',()=> sentForm())


