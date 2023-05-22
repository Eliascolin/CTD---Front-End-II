

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



