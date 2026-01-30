// const numeros = [1, 2, 3, 4, 5];

// for(let i = 0; i < numeros.length; i++){
//     console.log("[" + i +  "] -> " + numeros[i]);
// }

// function soma(a, b){
//     // return a + b;
//     console.log(a + b);
// }

// // console.log(soma(2, 3));
// soma(5, 5);

// const soma = (a, b) => {
//     return a + b;
// }

// console.log(soma(8, 2));
// console.log(soma(7, 30));

const numeros = [1, 2, 3, 4, 5];
const marcas = ["Nike", "Addidas", "Jaguar"];
const usuarios = [
    {
        "nome": "fulano",
        "sobrenome": "amaral",
        "matricula": "1234",
        "telefone": "(12) 1234-4321"
    },
    {
        "nome": "Beltreno",
        "sobrenome": "corazin",
        "matricula": "5678",
        "telefone": "(67) 45698-2345"
    }
];

// function imprime(value){
//     console.log("Value = " + value);
// }

// marcas.forEach(imprime);

// marcas.forEach( (value) => {
//     console.log("Value - " + value);
// } );

marcas.forEach( (value) => {
    if(value === "Nike"){
        console.log("Encontrei");
    }
});

usuarios.forEa
ch((usuario) => {
    if(usuario.matricula === "1234"){
        console.log(usuario.nome);
        console.log(usuario.sobrenome);
        console.log(usuario.telefone);
    }
})



// const carro = {
//     "Ano": 2000,
//     "Cor": "vermelho",
//     "Modelo": "Uno",
//     "Marca": "Fiat",
//     "Escada": true,
//     "Placa": "15H02FJ"
// }

// console.log(carro.Placa);