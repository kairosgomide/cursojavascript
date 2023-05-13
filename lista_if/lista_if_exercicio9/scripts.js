let idade = parseInt(prompt("Digite sua idade"));

if(idade >= 5 && idade <= 7){
    console.log("Categoria: Infantil A");
}else if(idade >= 8 && idade <= 10){
    console.log("Categoria: Infantil B");
}else if(idade >= 11 && idade <= 13){
    console.log("Categoria: Juvenil A");
}else if(idade >= 14 && idade <= 17){
    console.log("Categoria: Juvenil B");
}else{
    console.log("Categorai: Sênior");
}

