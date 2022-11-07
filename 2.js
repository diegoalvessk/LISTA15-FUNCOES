/* 
Faça uma função que verifique se um número é perfeito ou não. Um valor é dito
perfeito quando ele é igual a soma dos seus divisores. Ex.: 6 é perfeito, 6 = 1 + 2 +
3, que são seus divisores. A função deve retornar um valor booleano.
*/

VerificarNumero()
 
function VerificarNumero(){
    let numero
    let array = []
    let indexArray = 0
    let numeroSup = 0
    let soma = 0
    numero = parseInt(prompt("Informe o valor do número."))
    numeroSup =  numero - 1
    console.log(numeroSup)
    for (let index = numeroSup; index>0; index--) {
        if(numero % index == 0){
            array[indexArray] = index
            console.log(array)
            indexArray++
        }        
    }

    for (let index2 = 0; index2 < indexArray; index2++) {
     soma = soma + array[index2]
    }

    if(soma == numero){
        alert("O número é perfeito.")
    }else{
        alert("O número não é perfeito.")
    }
}