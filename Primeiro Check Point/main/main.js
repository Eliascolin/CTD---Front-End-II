//https://docs.google.com/document/d/1xoosin6AZL3p8XJlMEge7_iyAmx6LTsg7vpop-j7UHY/edit

//https://www.figma.com/file/XMNFWdQDJOsHjogi2t4dhu/%5BReDesign%5D-Check-Point-1-(Front-end-2)?type=design&node-id=901-87&t=cIhnaY3aP4KlfBEb-0

//https://www.google.com/search?q=avatar+de+pessoas&sxsrf=APwXEddrKKnvKV4vQJTmh8FPvB1zmtJyJQ:1685403091765&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia4Nnk15v_AhUTBLkGHYyeC3YQ_AUoAXoECAEQAw&biw=1366&bih=617&dpr=1#imgrc=I0Kzpk2VHNzArM

let inputNomeRef = document.querySelector(".input_nome")

let inputSobrenome = document.querySelector(".input_sobrenome")

let inputImagem = document.querySelector(".input_imagem")

let inputDescriçao = document.querySelector(".input_descriçao")

let botonForm = document.querySelector(".botonForm")


 
class Avatar {

    constructor (nome,sobreNome,img,text){


        
    this.nome = nome,

    this.sobreNome = sobreNome,
 
     this.img = img,
     
     this.text = text
    }


}

let avatarNovo = []


function cadastro(nome,sobreNome,img,text){

let Nome = nome.target.value

let SobreNome = sobreNome.target.value

let Img = img.target.value


  
    const usuarioAvatar = {
    
        
       
       adicionarAluno(nome,sobreNome,img,text){
       const avatar = new Avatar (nome,sobreNome,img,text)
       this.avatarNovo.push(avatar)
       }}

       nome.target.value

       usuarioAvatar.adicionarAluno(Nome,SobreNome,Tmg,text)
      

}

function enviar (){

console.log(avatarNovo)

}


inputNomeRef.addEventListener('keyup',(nome)=>cadastro(nome))

inputSobrenome.addEventListener('keyup',(sobreNome)=>cadastro(sobreNome))


 inputImagem.addEventListener('keyup',(img)=>cadastro(img))


