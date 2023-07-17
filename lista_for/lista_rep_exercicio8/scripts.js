/*Escreva um algoritmo no qual o usuário digitará dez números. Calcule e imprima o 
cubo de cada número.*/

let n = 1;

while(n <= 10){
    let x = parseInt(prompt("Digite um número"));
    console.log(Math.pow(x,3));
    n++;
}