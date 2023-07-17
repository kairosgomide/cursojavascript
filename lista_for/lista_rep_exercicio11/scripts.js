/*11) Escreva um algoritmo que receba 15 números. Calcule e imprima quantos números 
maiores que 30 foram digitados.*/

let i = 1;
let c = 0;

while(i <= 15){
    let x = parseInt(prompt("Digite um número"));
    if(x > 30){
        c++;
    }
    i++;
}
console.log(c);
