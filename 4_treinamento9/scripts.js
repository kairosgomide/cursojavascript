/*Exercício 6) Faça um programa que leia dois números e mostre:
	O primeiro número elevado pelo segundo número;
r=〖n1〗^n2
	O primeiro número vezes o segundo número;
r=n1*n2
	O número inverso do primeiro número;
r=1/n1
	A soma do segundo número com a metade do primeiro número;
r=n2+n1/2
	A diferença do primeiro número com o segundo;
r=n1-n2
	O valor oposto do segundo número;
r=n2*-1
*/

let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite um número"));

console.log(Math.pow(n1, n2));
console.log(n1 * n2);
console.log(1/n1);
console.log(n2+n1/2);
console.log(n1-n2);
console.log(n2*-1);
/* ou console.log(-n2);*/