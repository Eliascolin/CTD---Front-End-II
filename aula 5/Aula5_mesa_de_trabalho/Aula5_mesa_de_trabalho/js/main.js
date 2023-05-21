

const body_elemenRef = document.querySelector(".elemen")

const header_mainRef = document.querySelector('.header_main')


const itemRef = document.querySelector(".item")


const text_itensRfe = document.querySelector(".text_itens")


const button = document.querySelector("button")




function DarkMode(){
    
        body_elemenRef.classList.toggle("dark")
        header_mainRef.classList.toggle("header_dark")
        itemRef.classList.toggle("item_dark")
        text_itensRfe.classList.toggle("text_itens_dark")
        button.innerText="Mudar para Escuro"

if(body_elemenRef.classList.contains("dark")  ){

button.innerHTML = "Mudar para Claro"

}


}



