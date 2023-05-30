

const body_elemenRef = document.querySelector(".elemen")

const header_mainRef = document.querySelector('.header_main')

const itemRef = document.querySelectorAll(".item")
const text_itensRfe = document.querySelectorAll(".text_itens")
const pReferen = document.querySelectorAll("p")
const button = document.querySelector("button")


function DarkMode(){
    
        body_elemenRef.classList.toggle("dark")
        header_mainRef.classList.toggle("header_dark")
        
        
        
        
        for(let i = 0; i < itemRef.length; i++){
               itemRef[i].classList.toggle("item_dark")}


         for(let b = 0; b < text_itensRfe.length; b++){

          text_itensRfe[b].classList.toggle("text_itens_dark")


         }    
         
         

         for(let c=0;c<pReferen.length;c++){

            
               pReferen[c].classList.toggle('text_dark')




         }

        


        button.innerText="Mudar para Escuro"

if(body_elemenRef.classList.contains("dark")  ){

button.innerHTML = "Mudar para Claro"

}


}




// adicionar elementos pelo javascript



let containerRef = document.querySelector(".container")

const posts = [
{
image:"./imagens/tiger.jpg",
titulo:'O tigre',
texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',

},


{
      image:"./imagens/leon.jpg",
      titulo:'O leão',
      texto: 
      'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
      
      },



      {

      
            image:"./imagens/pantera-negra.jpg",
            titulo:'A pantera negra',
            texto:  'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.'



      },



      {
   
            
      image:"./imagens/jaguar.jpg",
      titulo:'O jaguar',
      texto:'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.'



      },



      

            {
                  image:"./imagens/chita.jpg",
                  titulo:'O guepardo',
                  texto: ' O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
                  
                  }



      

];



function getPosts(){


      createCards()





}


function createCards(){

for (let post of posts){

containerRef.innerHTML +=` 

<div class="item">
<img src="${post.image}">
<h2 class="text_itens"> ${post.titulo} </h2>   
<p>${post.texto}</p>
</div>
`
}
}

getPosts()