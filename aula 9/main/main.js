const userNameInputRef = document.querySelector("#userNameInput")

const logingButtonRef = document.querySelector("#logingButton")

const formControlNomeRef = document.querySelector("#formControlNome")

const formControlPasswordRef = document.querySelector("#formControlPassword")


var user =  {

name:"",
password:""



}




function validateUserPassword(event){
const target = event.target
const value = target.value
const isValid = target.checkValidity()



user.password = value

if(isValid){

    formControlPasswordRef.classList.remove("error")

console.log("Valor invalido")


}else{
    console.log("valor valido")

    formControlPasswordRef.classList.add("error")


}

}


function validateUserName(event){
    const target = event.target
    const value = target.value
    const isValid = target.checkValidity()
    
    
    
    user.name = value
    
    if(isValid){
    
    formControlNomeRef.classList.remove("error")
    
    

    
    
    }else{
        console.log("valor valido")
    
        formControlNomeRef.classList.add("error")
    
    
    }}
    
    

    function login(event){

event.preventDefault

console.log(user)


    }





userNameInputRef.addEventListener('keyup', (event)=>validateUserName(event))
          

//configurar senha 

formControlPasswordRef.addEventListener("keyup",(event)=>validateUserPassword(event))


                                                          //evita que se comporte default
logingButtonRef.addEventListener("click",(event) => login(event))



