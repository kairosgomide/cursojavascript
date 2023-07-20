let idade = parseInt(prompt("Digite a sua idade")); 
let CNH = prompt("Tem carteira de motorista?");

if(idade > 18 && CNH == "Não"){
    console.log("Não pode dirigir");
}else if(idade > 18 && CNH == "Sim"){
    console.log("Pode dirigir");
}else{
    console.log("O país ta perdido");
}