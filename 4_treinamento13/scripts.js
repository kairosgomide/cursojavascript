/*
Faça um programa que dada uma nota imprima se o aluno está Aprovado, de 
Recuperação ou Reprovado.

Aprovado => a nota tem que ser maior ou igual a 7.5
Recuperação => a nota tem que ser maior ou igual a 5.0 e menor 7.5
Reprovado => a nota tem que ser menor que 5.0

*/

let nota = 4.0
 
if(nota >= 7.5){
    console.log("Aluno aprovado!");
}else if(nota >= 5.0 && nota < 7.5){
    console.log("Aluno de recuperação");
}else if(nota < 5.0){
    console.log("Aluno reprovado!");
}


