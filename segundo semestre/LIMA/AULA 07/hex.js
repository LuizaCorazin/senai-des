const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // monta um código hexadecimal com 6 caracteres
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getrandomNumber()];
    }

    // aplica ao background e atualiza o texto visível
    document.body.style.backgroundColor = hexColor;
    if (color) color.textContent = hexColor;
});

function getrandomNumber() {
    return Math.floor(Math.random() * hex.length);
}