/*
Faça um programa que dada três valores: A, B e C. Calcule o valor de 
delta:

delta = b² - 4ac

Imprima o valor de x:

Se delta for menor que 0:

    Não há raízes reais;

Se delta for igual a 0:

    x = -b / 2a

Se delta for maior do que 0:

    x' = -b + \|delta / 2a

    x'' = -b - \|delta / 2a


*/

let a = parseFloat(prompt("Digite o valor de A"));
let b = parseFloat(prompt("Digite o valor de B"));
let c = parseFloat(prompt("Digite o valor de C"));

let delta = Math.pow(b,2) - 4 * a * c;

if(delta < 0){
    console.log("Não tem raízes");
} else if(delta == 0){
    let x = -b / (2 * a);
    console.log(`O valor de x é ${x}`);
}else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt (delta)) / (2 * a);
    console.log(`O valor de x1 é ${x1}` );
    console.log (`O valor de x2 é ${x2}`);
}    
