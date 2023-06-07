
const usernameRef = document.querySelector("#username")

 const userDataJaso = localStorage.getItem('user')


const userData = JSON.parse(userDataJaso)

const butomLimparRef = document.querySelector("#butomLimpar")

usernameRef.innerText = userData.nome


//console.log(localStorage.name)


console.log(userData)


butomLimparRef.addEventListener("click",()=>{




 localStorage.clear()
window.location = "index.html"


})