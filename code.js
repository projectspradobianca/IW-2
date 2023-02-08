/*
var total //global
let num1 //local
const total = 0 //local
*/
let num1 = 3
let num2 = 2

function soma(){
    //console.log(num1+num2)
    return num1+num2
}
function sub(){
    //console.log(num1-num2)
    return num1-num2
}

function div(){
    //console.log(num1/num2)
    return num1/num2
}

function mult(){
    //console.log(num1*num2)
    return num1*num2
}
/*
console.log(' A soma é: ' + soma() + "\n" +
            ' A subtração é: ' + sub() +  "\n" +
            ' A divisão é: ' + div() + "\n" +
            ' A multiplicação é: ' + mult())
*/

//If

function se(n){
    if(n == 2){
        console.log("Você escolheu a 2")
    }else if(n == 3){
        console.log("Você escolheu o 3")

    }else if(n == 4){
        console.log("Você escolheu o 4")
    }else{
        console.log("Não existe esse número")
    }
    se(5)
}



//Para (For)

function lacofor(n){
    for(let i=0;i<10;i++){
        if(n == 1){
            console.log("Você escolheu 1")
            break

        }else{
            console.log("Não existe esse número")
        }
    }
}


//Laço enquanto (while)
function lacowhile(n){
    let i = 0
    while(i<10){
        i++
        if(n == 1){
            console.log("Você escolheu 1")
            break

        }else{
            console.log("Não existe esse número")
        }
    }

}

//Laço fazer..enquanto (do..while)
function lacofacaenquanto(n){
    let i=0
    do{
        i++
        if(n == 1){
            console.log("Você escolheu 1")
            break

        }else{
            console.log("Não existe esse número")
        }

    }while(i<10)
}

//Laco switch case
function lacocaso(){
    

}






