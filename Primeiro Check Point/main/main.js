//https://docs.google.com/document/d/1xoosin6AZL3p8XJlMEge7_iyAmx6LTsg7vpop-j7UHY/edit

//https://www.figma.com/file/XMNFWdQDJOsHjogi2t4dhu/%5BReDesign%5D-Check-Point-1-(Front-end-2)?type=design&node-id=901-87&t=cIhnaY3aP4KlfBEb-0

//https://www.google.com/search?q=avatar+de+pessoas&sxsrf=APwXEddrKKnvKV4vQJTmh8FPvB1zmtJyJQ:1685403091765&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia4Nnk15v_AhUTBLkGHYyeC3YQ_AUoAXoECAEQAw&biw=1366&bih=617&dpr=1#imgrc=I0Kzpk2VHNzArM

let inputNomeRef = document.querySelector(".input_nome")

let inputSobrenome = document.querySelector(".input_sobrenome")

let inputImagem = document.querySelector(".input_imagem")

let inputDescriçao = document.querySelector(".input_descriçao")




let botonForm = document.querySelector(".botonForm")

let formularioRef = document.querySelector("#section_avartar")




function valores (){

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
}



botonForm.addEventListener('click',()=> valores())












// let containerRef = document.querySelector(".container")

// const posts = [
// {
// image:"./imagens/tiger.jpg",
// titulo:'O tigre',
// texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',

// },]