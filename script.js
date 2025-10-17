let numero_secreto =Math.floor(Math.random()*100)+1
let contador=1

function jogo(){
    var palpite =Number (window.document.getElementById("palpite").value)
    var res = window.document.getElementById("res");
    
    if (contador>10){
        res.innerText = 'Suas tentaivas acabaram'
        return
    }

    if (palpite===numero_secreto){
        res.innerText = `Parabens voçê acertou em ${contador} Tentativas`

    }else if(palpite<numero_secreto){
        res.innerText = 'seu palpite foi menor'
    }else{
        res.innerText = 'seu palpite foi maior'
    }
    contador++;
    console.log(`Tentativas: ${contador}`)

}
