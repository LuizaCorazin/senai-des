
const consultas = [
  { "status": "Agendada", "especialidade": "Cardiologia" },
  { "status": "Finalizada", "especialidade": "Clínico Geral" },
  { "status": "Em andamento", "especialidade": "Cardiologia" },
  { "status": "Agendada", "especialidade": "Clínico Geral" },
  { "status": "Agendada", "especialidade": "Ortopedia" }
];


const totalConsultas = consultas.length;


const statusCount = {};
consultas.forEach(c => {
    statusCount[c.status] = (statusCount[c.status] || 0) + 1;
});


const especialidadeCount = {};
consultas.forEach(c => {
    especialidadeCount[c.especialidade] = (especialidadeCount[c.especialidade] || 0) + 1;
});


document.querySelector("#totalConsultas").innerHTML = `<p>${totalConsultas}</p><span>Total de Consultas</span>`;

document.querySelector("#consultasStatus").innerHTML = `<p>${JSON.stringify(statusCount).replace(/,/g,'<br>').replace(/{|}/g,'').replace(/"/g,'')}</p><span>Consultas por Status</span>`;


document.querySelector("#consultasEspecialidade").innerHTML = `<p>${JSON.stringify(especialidadeCount).replace(/,/g,'<br>').replace(/{|}/g,'').replace(/"/g,'')}</p><span>Consultas por Especialidade</span>`;
