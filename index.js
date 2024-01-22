let nome 
let salario

function perguntarColaborador() {
     nome = prompt("nome :")
     salario = Number((prompt("salario :")))

    calcularAumento(nome,salario)
}

 function calcularAumento(nome,salario){
    let aumento = 0 

if(salario <= 1500){
aumento = 0.2
}else if (salario >= 1501 && salario <= 2000){
    aumento = 0.15
}else if (salario >= 2001 && salario <= 3000){
    aumento = 0.10
}else{
    aumento = 0.05
}


    let novoSalario = (salario + (salario * aumento))
 
 


console.log("nome do colaborador" + "-" + nome)
console.log("salario r$" + ">>>" + salario)
console.log("salario novo r$" + ">>>" + novoSalario)
console.log((aumento * 100) + "%" + "--" + "AUMENTO")

desejareiniciar()
 }
function desejareiniciar(){
    let resposta = prompt("deseja reiniciar ? sim ou não")

    if(resposta == "sim"){
        perguntarColaborador()
    }else{
        console.log("programa encerrado !")
    }
} 

perguntarColaborador()
calcularAumento()
desejareiniciar()