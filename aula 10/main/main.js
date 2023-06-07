const userNameInputRef = document.querySelector("#userNameInput")

const logingButtonRef = document.querySelector("#logingButton")

const formControlPasswordRef = document.querySelector("#formControlPassword")


var formaHasError = {


name: true,

password: true

}

var user =  {

name:"",
password:""



}




// funçao senha

function validateUserPassword(event){
const target = event.target
const value = target.value
const isValid = target.checkValidity()



user.password = value

if(isValid){

    formControlPasswordRef.classList.remove("error")
    formaHasError.password = false
console.log("Valor invalido")


}else{
    console.log("valor valido")
    formaHasError.password = true
    formControlPasswordRef.classList.add("error")


}


disabledButtonErro()

}


// funçao usuario
// function validateUserName(event){
//     const target = event.target
//     const value = target.value
//     const isValid = target.checkValidity()
//     const parent = target.parentNode
    
    
//     user.name = value
    
//     if(isValid){
    
//     parent.classList.remove("error")
    
//     formaHasError.name = false

    
    
//     }else{
//         console.log("valor valido")
    
//         parent.classList.add("error")
    
//         formaHasError.name = true
//     }

//   disabledButtonErro()

// }
    
    
function validadeImput(event){

    const target = event.target
    // const value = target.value
    // const isValid = target.checkValidity()
    // const parent = target.parentNode
    
    
    // user.name = value
    console.log(target.name)

    user[target.name] = value

    
//     if(isValid){
    
//     parent.classList.remove("error")
    
//     formaHasError.name = false

    
    
//     }else{
//         console.log("valor valido")
    
//         parent.classList.add("error")
    
//         formaHasError.name = true
//     }

//   disabledButtonErro()





}


// funçao botao 
    function login(event){

event.preventDefault

console.log(user)


    }

//deshabilitar botao
function disabledButtonErro(){

if(!formaHasError.name && !formaHasError.password ){

    logingButtonRef.disabled = false
   
}else{


    logingButtonRef.disabled = true
}




}




userNameInputRef.addEventListener('keyup', (event)=>validadeImput(event))
          

//configurar senha 

formControlPasswordRef.addEventListener("keyup",(event)=>validadeImput(event))


                                                          //evita que se comporte default
logingButtonRef.addEventListener("click",(event) => login(event))








