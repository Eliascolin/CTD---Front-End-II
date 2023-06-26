
const usernameRef = document.querySelector("#username")

const userDataJaso = localStorage.getItem('user')


const userData = JSON.parse(userDataJaso)

const butomLimparRef = document.querySelector("#butomLimpar")

usernameRef.innerText = userData.name


//console.log(localStorage.user.name)


//console.log(userData.name)


butomLimparRef.addEventListener("click",()=>{




 localStorage.clear()
window.location = "index.html"


})