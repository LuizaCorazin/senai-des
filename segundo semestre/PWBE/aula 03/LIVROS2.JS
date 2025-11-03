var livros = [
    {
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis",
        "Paginas": 406,
        "generos": "Romance",
        "protagonista": "Bentinho"
    },
    {
        "titulo": "O Cortiço",
        "autor": "Aluísio de Azevedo",
        "Paginas": 270,
        "generos": "Literatura",
        "protagonista": "João Romão"
    },
    {
        "titulo": "Vermelho, Branco e Sangue Azul",
        "autor": "Casey McQuiston",
        "Paginas": 392,
        "generos": "Romance",
        "protagonista": "Alex"
    },
    {
        "titulo": "Harry Potter e a Pedra Filosofal",
        "autor": "J.K. Rowling",
        "Paginas": 420,
        "generos": "Fantasia",
        "protagonista": "Harry Potter"
    },
];

livros.forEach((livro) => {
    if (livro.titulo === "Harry Potter e a Pedra Filosofal") {
        console.log(livro);
    }
});

   
    livros.forEach((livro, i) => {
    if (livro.titulo === "Harry Potter e a Pedra Filosofal") {
        livros.splice(i, 1);
    }
    });
 console.log(livros);