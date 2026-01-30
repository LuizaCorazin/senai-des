const container = document.querySelector(".container");

const btCadastrar = document.querySelector("#btCadastrar");

btCadastrar.addEventListener("click", (event) => {
    event.preventDefault();

    const inpNome = document.querySelector("#nome");
    const inpSobrenome = document.querySelector("#sobrenome");
    const inpCor = document.querySelector("#cor");
    const inpCor2 = document.querySelector("#cor2")
    const inpEstado = document.querySelector("#estado");

    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = inpCor.value;
    box.style.color = inpCor2.value;

    const pNome = document.createElement("p");
    pNome.innerHTML = "Nome : " + inpNome.value;

    const pSobrenome = document.createElement("p");
    pSobrenome.innerHTML = "Sobrenome : " + inpSobrenome.value;

    const pEstado = document.createElement("p");
    pEstado.innerHTML = "Estado : " + inpEstado.value;

    box.appendChild(pNome);
    box.appendChild(pSobrenome);
    box.appendChild(pEstado);

    container.appendChild(box);

    inpNome.value = "";
    inpSobrenome.value = "";
    inpCor.value = "#000";
    inpCor2.value = "#000";
    inpEstado.value = "sp";
});