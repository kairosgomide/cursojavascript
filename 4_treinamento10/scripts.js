/*Exercício 7) Faça um programa que leia um número em metros. 
Calcule e mostre o valor correspondente em quilômetro, centímetro e milímetro */


let m = parseInt(prompt("Digite um número em metros"));

let km = m / 1000;
let cm = m * 100;
let mm = m * 1000;

console.log(km);
console.log(cm);
console.log(mm);