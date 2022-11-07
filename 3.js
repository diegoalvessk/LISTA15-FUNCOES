/* 
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
dados sobre o salário e o número de filhos. A prefeitura deseja saber:
a. A média do salário da população;
b. A média do número de filhos;
c. O maior salário;
d. A porcentagem de pessoas com salários até R$1.500,00
Salve os dados dos habitantes em arrays, crie uma função para cada item que
retorna o que é pedido
*/

let nomes = []
let salarios = []
let filhos = []
let indexGeral = 0
let desejar = 0
let condicao = "s"

while(condicao == "s"){
    desejar = prompt("O que você deseja no nosso sistema?" + "\n" 
    + "1 = cadastrar dados" + "\n" 
    + "2 = média do salario da população" + "\n" 
    + "3 = média do número de filhos"+ "\n"
    + "4 = O maior salario"+ "\n"
    + "5 = A porcentagem de pessoas com salários até R$1.500,00")

    if(desejar == 1){
        PesquisarCidade(nomes, salarios, filhos)
    }

    if(desejar == 2){
        MediaSalario()
    }

    if(desejar == 3){
        MediaFilhos()
    }

    if(desejar == 4){
        MaiorSalario()
    }

    if(desejar == 5){
        salarioAte()
    }

    condicao = prompt("Deseja continuar no sistema? s = sim e n = nao")
}

function PesquisarCidade(nomes, salarios, filhos){
    nomes[indexGeral] = prompt("Informe o seu nome.")
    salarios[indexGeral] = parseInt(prompt("Informe o seu salario."))
    filhos[indexGeral] = parseInt(prompt("Informe a quantidade de filhos."))
    indexGeral++
    console.log(nomes)
    console.log(salarios)
    console.log(filhos)

}

function MediaSalario(){
   let MediaSalario = 0
   let indexSalario = 0
   for (let index = 0; index < indexGeral; index++) {
    MediaSalario = MediaSalario + salarios[index]
    indexSalario++    
   }
   console.log(MediaSalario)

   MediaSalario = (MediaSalario/indexSalario)
   alert("A média geral dos salarios é de: " + MediaSalario)
}

function MediaFilhos(){
    let MediaFilhos = 0
    let indexFilhos = 0
    for (let index = 0; index < indexGeral; index++) {
        MediaFilhos = MediaFilhos + filhos[index]
        indexFilhos++    
    }
    console.log(MediaFilhos)
 
    MediaFilhos = (MediaFilhos/indexFilhos)
    alert("A média geral dos salarios é de: " + MediaFilhos)
 }

 function MaiorSalario(){
    salarios.sort((a, b) => b - a);
    alert("O maior sálario é de: " + salarios[0])
    console.log(salarios)
 }

 function salarioAte(){
    let contagem = 0
    for (let index = 0; index < array.salarios; index++) {
        if(salarios[index]<1500){
            contagem++
        }        
    }
    alert("O total de pessoas que possui salario até 1500 é de: " + contagem)
}