let n = parseInt(prompt("Digite um número"));
let contador = 0;
let i = 1;

while(i <= n){
    if(n % i == 0){
        contador++;
    }
    i++;
}
if(contador == 2){
    console.log(`O ${n} é número primo`);
}else{
    console.log(`O ${n} não é primo`);
}