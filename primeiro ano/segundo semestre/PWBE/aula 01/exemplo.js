//var - escopo global
//let - escopo local
//const - escopo global e o valor não

var nome = "fulano"; //string
var idade = 50.5;
var habilitado = true;
var nascimento = 1875;
console.log(habilitado); //imprime no terminal

console.log(typeof(habilitado)); //typof retorna a variavel

/*
soma +
subtração -
divisão /
multiplicação *
modulo %
*/

var a = "10";
var b = 10;

console.log (a + b);

if (a == b) {
    console.log("são iguais");
} else {
    console.log("são diferentes");
}

if(a !== b) {
    console.log("São iguais");

}else{
    console.log("São diferentes");
}


switch(b){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

for(let i = 0; i < 100; i++){
    console.log(i);
}

while(a < 10){
    if(a == 5){
        break;
    }
}
do{

}while(a < 10);