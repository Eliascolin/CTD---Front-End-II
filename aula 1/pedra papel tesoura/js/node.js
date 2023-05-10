




// numero esculido pelo usuario
//let pergunta = prompt("escolhe: pedra, paple ou tesoura")

let numeroEscolhido = prompt("escolhe: pedra 1, paple 2 ou tesoura 3")

let jogadaUsuario = parseInt(numeroEscolhido)



//escolha do computador
let computador = parseInt(Math.random()*3+1)

 switch(computador){
case 1:
    computador = "Pedra" 
break;
case 2:
    computador = "Papel"
  break;
  case 3:
    computador = "Tesoura"  
}

switch(jogadaUsuario){
    case 1:
        jogadaUsuario = "pedra" 
    break;
    case 2:
        jogadaUsuario  = "papel"
      break;
      case 3:
        jogadaUsuario = "tesoura" 
    }

alert(jogadaUsuario)

alert(computador)



if (jogadaUsuario == computador){
    alert(`empate computador escolhor ${computador} e voce ${jogadaUsuario}`)
}else if(jogadaUsuario == "pedra"){
    if(computador == "papel"){
        alert(`coputador ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
    }else if (computador === "tesoura"){
         alert(`voce ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
    }}else if(jogadaUsuario === "papel"){
if(computador == "tesoura"){
alert(`computador ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
}else if (computador == "pedra"){
alert(`voce ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
}}else if(jogadaUsuario == "tesoura"){

 if(computador == "pedra"){
    alert(`voce ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
}

else if (computador == "papel"){
    alert(`computador ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
}


}else if(jogadaUsuario  !== "Pedra"  &&  jogadaUsuario  !==  "Papel" && jogadaUsuario  !== "Tesoura"  ){
alert(`tristemente ${jogadaUsuario} não esta entre as opções tem que ser um numero do 1 ao 3`) 
}if (jogadaUsuario == computador){
        alert(`empate computador escolhor ${computador} e voce ${jogadaUsuario}`)
    } else if(jogadaUsuario == "pedra"){
        if(computador == "papel"){
            alert(`coputador ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
        }else if (computador === "tesoura"){
             alert(`voce ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
        }}




    
        else if(jogadaUsuario === "papel"){
 if(computador == "tesoura"){
    alert(`computador ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
}

else if (computador == "pedra"){
    alert(`voce ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
}}

// se o jogador escolher tesoura 


else if(jogadaUsuario == "tesoura"){

     if(computador == "pedra"){
        alert(`voce ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
    }

    else if (computador == "papel"){
        alert(`computador ganho por que computador escolhor ${computador} e voce ${jogadaUsuario}`)
    }


}
 //se for diferente dos numeros
 else if(jogadaUsuario  !== "Pedra"  &&  jogadaUsuario  !==  "Papel" && jogadaUsuario  !== "Tesoura"  ){
alert(`tristemente ${jogadaUsuario} não esta entre as opções tem que ser um numero do 1 ao 3`) 
}






        
    









/*if (pergunta === computador){
    alert(`empate computador escolhor ${computador} e voce ${pergunta}`)
}else if(pergunta==="pedra"){
    if(computador ==="papel"){
        alert(`coputador ganho por que computador escolhor ${computador} e voce ${pergunta}`)
    }else if(computador ==="tesoura"){
         alert(`voce ganho por que computador escolhor ${computador} e voce ${pergunta}`)
    }}
    else if(pergunta==="papel"){
        if(computador ==="pedra"){
            alert(`voce ganho por que computador escolhor ${computador} e voce ${pergunta}`)
        }else if(computador ==="tesoura"){
             alert(`computador ganho por que computador escolhor ${computador} e voce ${pergunta}`)
        }
}*/

