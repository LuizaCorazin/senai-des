
const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.style.left = (nav.style.left === "" || nav.style.left === "-200px") ? "0" : "-200px";
});

const consultas = [
  { img: "julia.png", 
    id: 1, 
    paciente_nome: "Ana Julia", 
    telefone: "(11) 99999-1234", 
    medico_nome: "Dra. Camila", 
    especialidade: "Cardiologia", 
    data: "2024-09-25", 
    hora: "14:00", 
    status: "Agendada" },


  { img: "clara.png",
     id: 2, paciente_nome: "Clara Ntonacci",
      telefone: "(11) 98888-5678",
       medico_nome: "Dr. Rodrigo",
        especialidade: "Clínico Geral",
         data: "2024-09-26",
          hora: "09:30",
           status: "Finalizada" },

  { img: "giovana.png", 
    id: 3, 
    paciente_nome: "Giovana Correa", 
    telefone: "(11) 97777-4321", 
    medico_nome: "Dra. Camila", 
    especialidade: "Cardiologia", 
    data: "2024-09-27", 
    hora: "10:15", 
    status: "Em andamento" },


  { img: "juliou.png", 
    id: 4, 
    paciente_nome: "Julia", 
    telefone: "(11) 96666-1111", 
    medico_nome: "Dr. Rodrigo", 
    especialidade: "Clínico Geral", 
    data: "2024-09-28", 
    hora: "15:00", 
    status: "Agendada" },

  { img: "leao.png", 
    id: 5, 
    paciente_nome: "Seu Leão", 
    telefone: "(11) 95555-8888", 
    medico_nome: "Dr. Bruno", 
    especialidade: "Ortopedia", 
    data: "2024-09-29", 
    hora: "13:45", 
    status: "Agendada" }
];


const content = document.querySelector(".content");
const boxTemplate = document.querySelector(".box");

consultas.forEach(consulta => {
    let box = boxTemplate.cloneNode(true);
    box.style.display = "flex";
    box.querySelector("img").src = consulta.img;

    box.querySelector(".id").textContent = "ID: " + consulta.id;

    box.querySelector(".paciente_nome").textContent = consulta.paciente_nome;

    box.querySelector(".telefone").textContent = "Telefone: " + consulta.telefone;

    box.querySelector(".medico_nome").textContent = "Médico: " + consulta.medico_nome;

    box.querySelector(".especialidade").textContent = "Especialidade: " + consulta.especialidade;

    box.querySelector(".data").textContent = "Data: " + consulta.data;

    box.querySelector(".hora").textContent = "Hora: " + consulta.hora;

    box.querySelector(".status").textContent = "Status: " + consulta.status;
    content.appendChild(box);
});


const buscar = document.querySelector("#buscar");
buscar.addEventListener("keyup", () => {
    const filtro = buscar.value.toLowerCase();
    content.querySelectorAll(".box").forEach(box => {
        const especialidade = box.querySelector(".especialidade").textContent.toLowerCase();
        box.style.display = especialidade.includes(filtro) ? "flex" : "none";
    });
});
