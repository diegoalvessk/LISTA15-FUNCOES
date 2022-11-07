/* 
1. Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto
*/

let nomeProjetos = []
let orcamentoTotais = []
let indexGeral = 0
let despesas = []
let receitas = []
let nomeProjeto2 = ""
let saberIndex = 0

CriarProjeto(nomeProjetos, orcamentoTotais)
Project(despesas, receitas)

function Project(despesas, receitas){
    nomeProjeto2 = prompt("Informe o nome do projeto que deseja alterar.")
    for (let index = 0; index < indexGeral; index++) {
        if(nomeProjeto2 == nomeProjetos[index]){
            despesas[index] = parseFloat(prompt("Qual o valor da despesa que deseja adicionar ao orçamento?"))
            while(despesas[index]>orcamentoTotais[index]){
                prompt("O valor da despesa é maior do que o valor da receita!")
                despesas[index] = parseFloat(prompt("Qual o valor da despesa deseja adicionar ao orçamento?"))
                saberIndex = index
            }
            orcamentoTotais[index] = (orcamentoTotais[index] - despesas[index])
            receitas[index] = parseFloat(prompt("Qual o valor da receita que deseja adicionar ao orçamento?"))
            while(receitas[index]<0){
                prompt("O valor da receita é menor do que 0")
                receitas[index] = parseFloat(prompt("Qual o valor da receita que deseja adicionar ao orçamento?"))
            }
            orcamentoTotais[index] = (orcamentoTotais[index] + receitas[index])

        }        
    }
    alert("O valor do orçamento do seu projeto atual é: " + orcamentoTotais[saberIndex])
}
function CriarProjeto(nomeProjetos, orcamentoTotais){
    nomeProjetos[indexGeral] = prompt("Informe o nome do projeto.")
    orcamentoTotais[indexGeral] = parseFloat(prompt("Informe o orçamento total do projeto."))
    console.log(nomeProjetos)
    console.log(orcamentoTotais)
    indexGeral++
}