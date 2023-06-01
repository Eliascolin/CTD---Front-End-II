const userNameInputRef = document.querySelector("#userNameInput")




function validateUserName(event){

const value = event.target.value

console.log(event.target.checkValidity())
if(event.target.checkValidity()){
// if(value.length > 5 && value.length <24){
// console.log("Valor invalido")


}else{
    console.log("valor valido")}

}


userNameInputRef.addEventListener('keyup', (event)=>validateUserName(event))
