/*Criar um algoritmo que leia os limites inferior e superior de um intervalo. Calcule e 
imprima todos os números pares no intervalo e seu somatório.*/
let inicio = parseInt(prompt("Digite um número"));
let fim = parseInt(prompt("Digite um número"));
let somatoria = 0;

while(inicio <= fim){
    if(inicio % 2 == 0){
        console.log(inicio);
        somatoria += inicio;
    }
   inicio++;
}
console.log(somatoria);

