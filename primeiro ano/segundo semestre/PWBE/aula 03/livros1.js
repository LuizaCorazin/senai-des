const livros = [
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        Paginas: "406",
        generos: "Romance",
        protagonista: "Bentinho"
    },
    {
        titulo: "O Cortiço",
        autor: "Aluísio de Azevedo",
        Paginas: "270",
        generos: "Literatura",
        protagonista: "João Romão"
    },
    {
        titulo: "Vermelho, Branco e Sangue Azul",
        autor: "Casey McQuiston",
        Paginas: "392",
        generos: "Romance",
        protagonista: "Alex"
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        Paginas: "420",
        generos: "Fantasia",
        protagonista: "Harry Potter"
    }
];

livros.forEach((livro) => {
    if (livro.titulo === "Dom Casmurro") {
        console.log("Título:", livro.titulo);
        console.log("Autor:", livro.autor);
        console.log("Número de páginas:", livro.Paginas);
        console.log("Gênero:", livro.generos);
        console.log("Protagonista:", livro.protagonista);
    }
});
