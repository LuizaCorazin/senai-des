const usuarios = [
    {
        "nome": "Botafogo",
        "vitoria": "13",
        "derrota": "3",
        "empate": "2"
    },
    {
        "nome": "Palmeiras",
        "vitoria": "12",
        "derrota": "2",
        "empate": "4"
    },
    {
        "nome": "Flamengo",
        "vitoria": "11",
        "derrota": "3",
        "empate": "4"
    },
    {
        "nome": "Athletico-PR",
        "vitoria": "10",
        "derrota": "5",
        "empate": "3"
    },
    {
        "nome": "Bahia",
        "vitoria": "9",
        "derrota": "6",
        "empate": "3"
    }
];

usuarios.forEach((usuario) => {
    if (usuario.nome === "Bahia") {
        console.log((usuario.vitoria * 3) + (+usuario.empate));
    }
});
