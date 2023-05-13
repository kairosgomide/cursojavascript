let salario_bruto = parseInt(prompt("Digite o valor do salário bruto"));
let prestacao = parseInt(prompt("Digite o valor da prestação"));

let resultado = salario_bruto * 0.3;

if(resultado > prestacao){
    console.log("Não empresta");
}else{
    console.log("Empresta");
}