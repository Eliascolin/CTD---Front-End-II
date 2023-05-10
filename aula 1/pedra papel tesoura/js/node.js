
//https://docs.google.com/document/d/16NzbccPwnarTLErn0T0-a00xxTXctnsH/edit


// nome usuario 

let nomeUsuario = prompt("como quer ser chamado no jogo?")




        
// contador de vitorias 

let vitoriasJogadas = {

usuario : 0,

script : 0

}


//                                                     nivel de dificultade 

let nivelDificuldade = prompt('quer aumentar a dificultade? so tera uma opção para jogar e o computador tera 3 jogadas. Pode escreber sim ou não')


// caso sim
if(nivelDificuldade == "sim" || nivelDificuldade == 'si' || nivelDificuldade == 's'){
    vitoriasJogadas.script++
}
// caso não
else if(nivelDificuldade == "nao" || nivelDificuldade == 'não' || nivelDificuldade == 'n'){
  alert('tudo bem, melhor não arriscar')
}

//resposta não entedida 
else(alert(`Não entedi muito bem mas acho que quer disser que sim` , vitoriasJogadas.script++ ))

// estructura de repeticão para quem tiver 2 vitorias ganha 


   while(vitoriasJogadas.usuario < 2 && vitoriasJogadas.script < 2){


    


    // opção escolhida pelo usuario e o computador 


    let numeroEscolhido = prompt("escolhe: Pedra 1, paple 2 ou Tesoura 3")

    let jogadaUsuario = parseInt(numeroEscolhido)
    
    
    
    //escolha do computador
    let computador = parseInt(Math.random()*3+1)
    
    
    // converter para string
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
            jogadaUsuario = "Pedra" 
        break;
        case 2:
            jogadaUsuario  = "Papel"
          break;
          case 3:
            jogadaUsuario = "Tesoura" 
        }
    
    
    
    
    
    
    
     // se for a igual 
    
    
    if (jogadaUsuario === computador){
            alert(`empate computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)}
    
    
    //   se o jogador escolher Pedra
    
    
        else if(jogadaUsuario === "Pedra"){
            if(computador === "Papel"){
                alert(`coputador ganho por que computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)
                vitoriasJogadas.script++
            }else {
                 alert(`${nomeUsuario} ganho por que computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)
                 vitoriasJogadas.usuario++
                }}
    
    // se o jogador escolher Papel
    
            else if(jogadaUsuario === "Papel"){
                if(computador === "Tesoura"){
        alert(`computador ganho por que computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)
        vitoriasJogadas.script++
    }
    
    else {
        alert(`${nomeUsuario} ganho por que computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)
        vitoriasJogadas.usuario++
    }}
    
    // se o jogador escolher Tesoura 
    
    
    else if(jogadaUsuario == "Tesoura"){
    
         if(computador == "Pedra"){
            alert(` computador  ganho por que computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)
            vitoriasJogadas.script++
        }
    
        else {
            alert(`${nomeUsuario} ganho por que computador escolhor ${computador} e ${nomeUsuario} ${jogadaUsuario}`)
            vitoriasJogadas.usuario++
        }
    
    
    }
     //se for diferente dos numeros

    else if (numeroEscolhido === null){alert("tem que escolher um numero para jogar")
}

    else(alert(`${numeroEscolhido} não está ente as opções`))
    
// se o usuario ganhar
if(vitoriasJogadas.usuario == 2){
alert(`Parabens por tua jogada ${nomeUsuario} é o vencedor`)
}
// se o usuario perder 
else if(vitoriasJogadas.script == 2){
let repetir = confirm(`${nomeUsuario} perdeu quer repetir`)

if(repetir = true){
    vitoriasJogadas.script = 0
}

else(alert('obrigado por participar'))
} 

}





