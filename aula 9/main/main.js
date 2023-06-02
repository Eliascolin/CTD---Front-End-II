const userNameInputRef = document.querySelector("#userNameInput")

const logingButtonRef = document.querySelector("#logingButton")



function validateUserName(event){
const target = event.target
const value = target.value
const isValid = target.checkValidity()



console.log(value)

if(isValid){
console.log("Valor invalido")


}else{
    console.log("valor valido")}

}


userNameInputRef.addEventListener('keyup', (event)=>validateUserName(event))
                                                       


                                                          //evita que se comporte default
logingButtonRef.addEventListener("click",(event) => {event.preventDefault()})
