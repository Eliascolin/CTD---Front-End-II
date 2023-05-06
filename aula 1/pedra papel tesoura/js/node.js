
// numero esculido pelo usuario
let pergunta = prompt("escolhe, pedra, paple ou tesoura")

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







if (pergunta === computador){
    let aviso = alert(`empate computador escolhor ${computador} e voce ${pergunta}`)
}else if(pergunta==="pedra"){
    if(computador ==="papel"){
        let aviso = alert(`coputador ganho por que computador escolhor ${computador} e voce ${pergunta}`)
    }else if(computador ==="tesoura"){
        let aviso = alert(`voce ganho por que computador escolhor ${computador} e voce ${pergunta}`)
    }}
    else if(pergunta==="papel"){
        if(computador ==="pedra"){
            let aviso = alert(`voce ganho por que computador escolhor ${computador} e voce ${pergunta}`)
        }else if(computador ==="tesoura"){
            let aviso = alert(`computador ganho por que computador escolhor ${computador} e voce ${pergunta}`)
        }
}

