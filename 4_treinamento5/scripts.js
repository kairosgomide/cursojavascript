/* Exercício 2) Faça um programa que leia a idade de uma pessoa em anos. Calcule e imprima a idade em meses e dias.
Exemplo: idade = 20
20 anos
240 meses
7300 dias
*/

let n = parseInt(prompt("Digite sua idade"));

let m = (n * 12);
let d = (n * 365);

console.log(`${n} anos`);
console.log(`${m} meses`);
console.log(`${d} dias`);
