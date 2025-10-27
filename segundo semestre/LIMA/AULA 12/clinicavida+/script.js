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

const consultas = [

  {
    "img": "julia.png",
    "id": 1,
    "paciente_nome": "Ana Julia",
    "telefone": "(11) 99999-1234",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
    "data": "2024-09-25",
    "hora": "14:00",
    "status": "agendada"
  },
  {
    "img": "clara.png",
    "id": 2,
    "paciente_nome": "Clara Ntonacci",
    "telefone": "(11) 98888-5678",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-26",
    "hora": "09:30",
    "status": "finalizada"
  },
  {
    "img": "giovana.png",
    "id": 3,
    "paciente_nome": "Giovana Correa",
    "telefone": "(11) 97777-4321",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
    "data": "2024-09-27",
    "hora": "10:15",
    "status": "em andamento"
  },
  {
    "img": "juliou.png",
    "id": 4,
    "paciente_nome": "Julia",
    "telefone": "(11) 96666-1111",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-28",
    "hora": "15:00",
    "status": "agendada"
  },
  {
    "img": "leao.png",
    "id": 5,
    "paciente_nome": "Seu Leão",
    "telefone": "(11) 95555-8888",
    "medico_nome": "Dr. Bruno",
    "especialidade": "Ortopedia",
    "data": "2024-09-29",
    "hora": "13:45",
    "status": "agendada"
  }

];

consultas.forEach((consulta) => {
    let novoCartao = box.cloneNode(true);
    
    novoCartao.querySelector("img").src = consulta.img;
    novoCartao.querySelector(".id").innerHTML = consulta.id;
    novoCartao.querySelector(".paciente_nome").innerHTML = consulta.paciente_nome;
    novoCartao.querySelector(".telefone").innerHTML = consulta.telefone;
    novoCartao.querySelector(".medico_nome").innerHTML = consulta.medico_nome;
    novoCartao.querySelector(".especialidade").innerHTML = consulta.especialidade;
    novoCartao.querySelector(".data").innerHTML = consulta.data;
    novoCartao.querySelector(".hora").innerHTML = consulta.hora;
    novoCartao.querySelector(".status").innerHTML = consulta.status;

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

let totalConsultas = consultas.length;

let agendadas = 0;
let finalizadas = 0;
let emAndamento = 0;

let especialidades = {};

consultas.forEach((c) => {
    if (c.status === "agendada") agendadas++;
    if (c.status === "finalizada") finalizadas++;
    if (c.status === "em andamento") emAndamento++;
});

document.querySelector("")
    .innerHTML = agendadas;