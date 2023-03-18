/*
let idade = prompt("Qual a sua idade?");

console.log(idade);

let nome = prompt("Qual o seu nome?");

console.log(`O meu nome é ${nome}`);

let idadeMenos = idade - 4;
console.log(`A idade subtraída ${idadeMenos}`);
*/

//Entrada
let numero1 = prompt("Escreva um número");
let numero2 = prompt("Escreva um número");
let n1 = parseInt(numero1);
let n2 = parseInt(numero2);
//Processamento
let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
//Saída
console.log(`A soma entre o numero 1 e 2 é ${soma}`);
console.log(`A subtração do numero 1 e 2 é ${subtracao}`);
console.log(`A multiplicação do numero 1 e 2 é ${multiplicacao}`);
console.log(`A divisao do numero 1 e 2 é ${divisao}`);
