let lado1 = parseInt(prompt("Digite o um lado de um triângulo"));
let lado2 = parseInt(prompt("Digite o um lado de um triângulo"));
let lado3 = parseInt(prompt("Digite o um lado de um triângulo"));

if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("O triangulo é escaleno");
}else if(lado1 == lado2 && lado1 == lado2 && lado2 == lado3){
    console.log("O triângulo é equilatero");
}else{
    console.log ("O triângulo é isosceles");
}