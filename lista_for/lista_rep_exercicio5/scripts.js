/*4) Escreva um algoritmo que imprima todos os números múltiplos de 5, no intervalo de 
1 a 500.*/

let n = 1;

while(n <= 500){ 
     if(n % 5 == 0){
        console.log(n);
    }
    n++;
}