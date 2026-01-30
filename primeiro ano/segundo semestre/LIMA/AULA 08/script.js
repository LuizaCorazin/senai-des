const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const leftNav = nav.style.left;

    if (leftNav === "" || leftNav === "-200px") {
        nav.style.left = "0";
    } else {
        nav.style.left = "-200px";
    }

});

const content = document.querySelector(".content");
const box = document.querySelector(".box");

const produtos = [
    {
        img: "produto.jpg",
        nome: "salto spike",
        valor:899.00
    },

    {
        img: "calça.jpg",
        nome: "Calça Jeans Brilho",
        valor: 499.00
    },

    {
        img: "blusa renda.jpg",
        nome: "Blusa Renda",
        valor:299.00
    },

    {
        img: "blusa renda.jpg",
        nome: "Blusa Renda",
        valor:299.00
    }
]

produtos.forEach((produto) => {
    let novoCartao = box.cloneNode(true);

    novoCartao.querySelector("img").src = produto.img;
    novoCartao.querySelector("#nome").innerHTML = produto.nome;
    novoCartao.querySelector("#valor").innerHTML = "R$ " + produto.valor;

    content.appendChild(novoCartao);
});

const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {

        let conteudo = node.innerHTML;

        if (conteudo) {

             if (conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                node.style.display = "block";
             }else {
                    node.style.display = "none";
                }
             }
        });
    });

const alunos = [
    {
        nome: "",
        turma: "",
        nota1: 0,
        nota2: 0,
        nota3: 0
    }
];