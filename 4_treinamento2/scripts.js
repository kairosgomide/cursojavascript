/*
Exercício 3: Dada a equação ax² + bx + c faça um programa que:
	- O usuário deve informar os valores de a, b e c;
	- Calcule o valor de delta:
		
		b² - 4ac
	
	- Imprima na tela o valor de delta.
*/

let A = prompt("digite o número para A");
let B = prompt("digite o número para B");
let C = prompt("digite o número para C");

let delta = Math.pow(B , 2) - 4 * A * C ;
console.log(delta);

/*
A= 2 
B= 4
C= 1 

16 - 8 = 8
*/

