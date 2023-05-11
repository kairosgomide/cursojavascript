let a = parseFloat(prompt("Digite o valor de A"));
let b = parseFloat(prompt("Digite o valor de B"));
let c = parseFloat(prompt("Digite o valor de C"));

/* 
Depois de fala o valor de A, B e C temos que resolver a equação de segundo grau: Ax² + bx + c = 0, e depois resolver Delta e achar as raízes
*/
let passo1 = Math.pow(b,2);
let passo2 = - 4 * a * c;
let delta = Math.pow(b,2) - 4 * a * c;

let x = -b / (2 * a);
let passo_x_1 = 2 * a;

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

let x11 = ((-b + delta) /  (2 * a));
let x22 = ((-b - delta) /  (2 * a));

if(delta < 0){
    console.log(`Δ= ${b} - 4 * ${a} * ${c}`);
    console.log(`Δ= ${passo1}${passo2}`);
    console.log(`Δ= ${delta}`);

    console.log("Não tem raízes");
}
else if(delta == 0){
    console.log(`Δ= ${b} - 4 * ${a} * ${c}`);
    console.log(`Δ= ${passo1}${passo2}`);
    console.log(`Δ= ${delta}`);

    console.log(`X= -b / (2 * a)`);
    console.log(`X= ${-b} / (2 * ${a})`);
    console.log(`X= ${-b} / ${passo_x_1}`);

    console.log(`O valor de x é ${x}`);
}
else{
    console.log(`Δ= ${b} - 4 * ${a} * ${c}`);
    console.log(`Δ= ${passo1}${passo2}`);
    console.log(`Δ= ${delta}`);

    console.log(`X= -b ± √Δ / (2 * a)`);
    console.log(`X1= ${-b} + ${delta} / (2 * ${a})`);
    console.log(`X2= ${-b} + ${-delta} / (2 * ${a})`);
    console.log(`O valor de x1 é ${x11}` );
    console.log (`O valor de x2 é ${x22}`);
}
