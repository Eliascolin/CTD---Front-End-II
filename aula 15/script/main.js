const cepInputRep = document.querySelector("#cepInput")

const cidadeInput = document.querySelector("#cidadeInput")


const bairroInput = document.querySelector("#bairroInput")



function fillAddressInputs(address){


    cidadeInput.value= address.localidade

     bairroInput.value= address.bairro


}


function getAddress(cep){

if(cep.length === 8){

fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
    response =>{
        console.log(response)

        if(response.ok){

            response.json().then(


                address=>{

                 

                  if(address.erro ===true ){

                    alert("Este CEP é invalido")
                  }else{

                    fillAddressInputs(address)


                  }

                }
            )

        }
    }
    
)
  

console.log("depois da request")

}





}


cepInputRep.addEventListener("keyup",(event)=>getAddress(event.target.value))