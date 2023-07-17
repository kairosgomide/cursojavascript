/* Criar  um  algoritmo  que  leia  um  número  ( N ),  e  depois  leia  N   números  inteiros. 
Imprima o maior deles. Suponha que todos os números lidos sejam positivos maiores 
que zero. */

let n = parseInt(prompt("Digite um número"));
let i = 1; 
let numeros = 0;

while(i <= n){
    let x = parseInt(prompt("Digite um número"));
    if(x > numeros){
        numeros = x;
    }

    i++;
}
console.log(numeros);