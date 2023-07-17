/*
Faça um programa em javascript no qual o usuário digitará um número. Calcule e exiba a tabuda de multiplicação
desse número até 10.
Exemplo: 
n = 5

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
*/

let n = parseInt(prompt('Digite um número'));

// Sem estrutura de repetição
/*
console.log(`${n} x 1 = ${n*1}`);
console.log(`${n} x 2 = ${n*2}`);
console.log(`${n} x 3 = ${n*3}`);
console.log(`${n} x 4 = ${n*4}`);
console.log(`${n} x 5 = ${n*5}`);
console.log(`${n} x 6 = ${n*6}`);
console.log(`${n} x 7 = ${n*7}`);
console.log(`${n} x 8 = ${n*8}`);
console.log(`${n} x 9 = ${n*9}`);
console.log(`${n} x 10 = ${n*10}`);
*/

// Resolvendo com a estrutura de repetição for
for(let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}


// Resolvendo com a estrutura de repetição while
/*
let i = 1;
while(i <= 10){
    console.log(`${n} x ${i} = ${n*i}`);
    i++;
}
*/

// Resolvendo com a estrutura de repetição do...while
/*
let i = 1;
do{
    console.log(`${n} x ${i} = ${n*i}`);
    i++;
}while(i <= 10);
*/


