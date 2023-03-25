/*Exercício 5) Faça um programa que calcule a área de um trapézio. O usuário 
deve ler a base maior, base menor e a altura

*/

let baseMenor = parseInt(prompt("Digite a base menor do trápezio"));
let baseMaior = parseInt(prompt("Digite a base maior do trápezio"));
let altura = parseInt(prompt("Digite a altura do trápezio"));

let area = (baseMaior + baseMenor) * altura;
console.log(area);
