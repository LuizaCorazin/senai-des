const menu = document.querySelector("#menu");

menu.addEventListener("click", function() {
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

const aluno = [
    {
        nome: "bea",
        turma: "Turma: 1 EM",
        nota1: 3,
        nota2: 2,
        nota3: 5
    },
    {
        nome: "gio",
        turma: "Turma: 3 EM",
        nota1: 7,
        nota2: 8,
        nota3: 9
    },
    {
        nome: "ju",
        turma: "Turma: 2 EM",
        nota1: 4,
        nota2: 3,
        nota3: 1
    }
];

aluno.forEach((aluno) => {
    let novoCartao = box.cloneNode(true);

   
    novoCartao.querySelector(".nome").innerHTML = aluno.nome;
    novoCartao.querySelector(".turma").innerHTML = aluno.turma;
    novoCartao.querySelector(".nota1").innerHTML = aluno.nota1;
    novoCartao.querySelector(".nota2").innerHTML = aluno.nota2;
    novoCartao.querySelector(".nota3").innerHTML = aluno.nota3;

    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

    if (media >= 7) {
        novoCartao.style.backgroundColor = "green";
    } else {
        novoCartao.style.backgroundColor = "red";
    }

    novoCartao.querySelector("#media").innerHTML = `Média: ${media.toFixed(2)}`;

    content.appendChild(novoCartao);
});

const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let conteudo = node.innerHTML;
        if (conteudo) {
            if (conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                node.style.display = "block";
            } else {
                node.style.display = "none";
            }
        }
    });
});
