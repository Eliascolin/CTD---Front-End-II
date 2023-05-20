const bodyJsRef = document.querySelector('#bodyJs')

const containerRef = document.querySelector("#container")





function  buttonDarkMode(){

if(bodyJsRef.classList.contains('dark-mode-body') === false){

    bodyJsRef.classList.add('dark-mode-body'),

    containerRef.classList.add('darkContainer')
}

else(
bodyJsRef.classList.remove('dark-mode-body'),
containerRef.classList.remove('darkContainer')

)

}