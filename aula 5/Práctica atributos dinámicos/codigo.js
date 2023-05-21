//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

let tarjetaRef= document.querySelector("#tarjeta")

tarjetaRef.classList.add("card")



//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let logoRef = document.querySelector("#logo")

logoRef.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png")



//3- Quitarle al titulo la clase que le está dando un formato feo

let titulofeoRef  = document.querySelector(".titulo-feo")

titulofeoRef.classList.remove("titulo-feo")


//4- Chequear si el link a youtube posee o no el atributo href

let linkyoutubeRef = document.querySelector("#link_youtube")

linkyoutubeRef.hasAttribute("href")



//5- Obtener el href del link a wikipedia y mostrarlo por consola

//let linkWiki = document.querySelector("#link_wikipedia")
                                               
//console.log(linkWiki.getAttribute("hsrc"))