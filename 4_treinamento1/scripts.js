/*
Exercício 2: Faça um programa que:
	- O usuário deve digitar três números;
	- Calcule e guarde em variáveis o maior e menor número digitado;
	- Imprima na tela esses números.
*/

let n1 = prompt("digite um número");
let n2 = prompt("digite um número");
let n3 = prompt("digite um número");

console.log(n1);
console.log(n2);
console.log(n3);

let maior = Math.max(n1, n2, n3);
let menor = Math.min(n1, n2 ,n3);

console.log(`O maior número é ${maior}`);
console.log(`O menor número é ${menor}`);

