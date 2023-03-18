/*
Exercício 4: Faça um programa que:
	- O usuário deve informar a base e a altura de um retângulo;
	- Calcular o perímetro do retângulo;
	- Imprimir o valor desse perímetro;
*/

let Base = prompt("Informe o valor da base do retângulo");
let Altura = prompt("Informe o valor da altura do retângulo");

let Base1 = parseInt(Base);
let Altura2 = parseInt(Altura); 
let perimetro = Base1 + Altura2 + Base1 + Altura2;
// let perimetro = 2 * Base1 + 2 * Altura2;

console.log(`O perimetro do retângulo é ${perimetro}`);

