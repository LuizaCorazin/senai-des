var nome = "luiza";
console.log("olá," ,nome);

console.log("----------------------");
//exercicio 2

var a = 10;
var b = 10;


console.log (a + b);
console.log (a * b);
console.log (a - b);
console.log (a / b);
console.log("----------------------");
//exercicio 3

var altura = 5;
var largura = 6;

console.log ("a area do retangulo é", altura*largura);
console.log("----------------------");
//exercicio 4

var nascimento = 20;
 var ano = 2025;


console.log ( ano - nascimento);

if (ano - nascimento>= 18) {
    console.log("de maior");
} else {
    console.log("de menor");
}
console.log("----------------------");
//exercicio 5

var numero = 50;

if (numero % 2 == 0) {
    console.log("par");
} else {
    console.log("impar");
}
console.log("----------------------");

//exercicio 6 

var a = 10;
var b = 9;
var c = 8;
var media = (a+b+c)/3;

console.log((a+b+c)/3);

if (media >= 9) {
    console.log("A");
} 
else if (media >= 7) {
    console.log("B");
} 
else if  (media <=5){
    console.log("C");
}
else{ 
    console.log("reprovado");
}
//exercicio 7


for(let i = 1; i <= 200; i++){
    if( i % 2 == 0){
       console.log(i);  
    }
   
}
console.log("----------------------");

 //exercicio 8
 var i = 0;
var f = 1;

for(i = 6 ; i > 0; i--){
    f = f * i;
   
}
console.log(f);

 console.log("---------------");

 //exercicio 9
var numeros = 1;

for(let i = 0; i <= 1000; i+= 3){
        console.log(i);
}