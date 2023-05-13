let atual_estoque = parseInt(prompt("Digite o valor atual do estoque"));
let max_estoque = parseInt(prompt("Digite o valor máximo do estoque"));
let min_estoque = parseInt(prompt("Digite o valor atual do estoque"));

let media = (max_estoque + min_estoque) / 2;

if(atual_estoque >= media){
    console.log("Não efetuar compra");
}else{
    console.log("Efetuar compra");
}

    