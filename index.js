// Calculadora de partidas rankeadas

// Calcula o saldo das rankeadas
function saldoDeRankeadas(numVitorias = 0, numDerrotas = 0){
    return numVitorias - numDerrotas
}

// Verifica o nivel com base no resultado do saldo da rankeada
function verificaNivel(saldo = 0){
    let status = ""
    if(saldo < 10) status = "Ferro"
    else if (saldo > 10 && saldo <= 20){
        status = "Bronze"
    }else if(saldo > 20 && saldo <=50){
        status = "Prata"
    }else if(saldo > 50 && saldo <=80){
        status = "Ouro"
    }else if(saldo > 80 && saldo <= 90){
        status = "Diamante"
    }else if(saldo >90 && saldo <= 100){
        status = "Lendario"
    }else if(saldo >= 101){
        status = "Imortal"
    }

    return status
}

// Funcao para imprimir resultado
function imprimeResultado(saldoVitorias, resultado){
    console.log("O herói tem de saldo de %d está no nível de %s", saldoVitorias, resultado)
}

// Declarando variaveis
let numVitorias = 121
let numDerrotas = 7
let saldoVitorias = saldoDeRankeadas(numVitorias = numVitorias, numDerrotas=numDerrotas)
let resultado = verificaNivel(saldo = saldoVitorias)

imprimeResultado(saldoVitorias, resultado)

