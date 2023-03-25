/*Exercício 1) Faça um programa que leia um número inteiro e imprima seu antecessor e seu sucessor.
Exemplo: n = 50
49   50   51
*/


let n = prompt("digite um número");
let n0 = parseInt(n);


//let n = parseInt(prompt("Digite um número"));


let n1 = (n0 + 1)
let n2 = (n0 - 1);

console.log(`${n2} ${n0} ${n1}`);
