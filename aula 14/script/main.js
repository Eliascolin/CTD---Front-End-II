
// seleccionar nome  
const usernameInputRef = document.querySelector("#usernameInput")


//seleccionar senha 
const userPasswordInputRef = document.querySelector("#userPasswordInput")

// botao
const butonLoginRef = document.querySelector("#butonLogin")


//objeto usuario 

let user = {
name:'',
password:''

}
 
usernameInputRef.addEventListener('keyup',(event)=>user.name=event.target.value)

userPasswordInputRef.addEventListener('keyup',(event)=>user.password=event.target.value)


butonLoginRef.addEventListener('click',(event)=>{
event.preventDefault()
// console.log(user)
// JSON.stringify(user)

// console.log(JSON.stringify(user))

const userData = {
id:1,
name: user.name,
email: 'email.com'


}


localStorage.setItem("user",JSON.stringify(userData))

window.location.href = "homer.html"

//console.log(user)
})