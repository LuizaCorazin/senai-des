const btCadastrar = document.querySelector('#btCadastrar');
const tabelaCorpo = document.querySelector('#tabelaCorpo');

btCadastrar.addEventListener('click', (event) => {
  event.preventDefault();

  const inpImagem = document.querySelector('#imagem');
  const inpNome = document.querySelector('#nome');
  const inpValor = document.querySelector('#valor');

  const novaLinha = document.createElement('tr');

  const tdImagem = document.createElement('td');
  const img = document.createElement('img');
  img.src = inpImagem.value;
  img.style.width = "100px";
  img.alt = inpNome.value;
  tdImagem.appendChild(img);

  const tdNome = document.createElement('td');
  tdNome.textContent = inpNome.value;

  const tdValor = document.createElement('td');
 tdValor.textContent = 'R$ ' + inpValor.value;

  novaLinha.appendChild(tdImagem);
  novaLinha.appendChild(tdNome);
  novaLinha.appendChild(tdValor);

  tabelaCorpo.appendChild(novaLinha);
});
