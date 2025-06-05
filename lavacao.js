
function mostrarMais() {
  const ver_mais = document.querySelectorAll(".ver_mais");
  let btn_ver_mais = document.querySelector(".btn_ver_mais");
  ver_mais.forEach((el) => {
    el.style.display = "block";
  });
  btn_ver_mais.style.display = "none";

  const avaliacoes = document.querySelector(".container-avaliacoes");
  const novasAvaliacoes = [
    {
      nome: "João da Silva",
      estrelas: 5,
      texto: "Muito bom atendimento, serviço impecável!",
    },
    {
      nome: "Maria Oliveira",
      estrelas: 5,
      texto: "O melhor lugar para higienização de carros na região!",
    },
    {
      nome: "Carlos Alberto",
      estrelas: 4,
      texto: "Bom preço e serviço de qualidade.",
    },
  ];

  novasAvaliacoes.forEach((avaliacao) => {
    const div_avaliacao = document.createElement("div");
    div_avaliacao.classList.add("avaliacao");
    div_avaliacao.innerHTML = `
    <div class="pessoa">
    <h3>${avaliacao.nome}</h3>
    </div>
    <p class="estrelas">${'<i class="fas fa-star"></i> '.repeat(
      avaliacao.estrelas
    )}</P>
    <p class="pessoa_avaliacao">${avaliacao.texto}</p>
    `;
    avaliacoes.appendChild(div_avaliacao);
  });
}

// =================carrossel===========
const img = document.querySelector("#img");
const imgs = document.querySelectorAll("#img img");
let idx = 0;

function carrossel() {
  idx++;
  if (idx >= imgs.length - 1) {
    idx = 0;
  }
  img.style.transform = `translateX(${-idx * 500}px)`;
  img.style.transition = "transform 1s ease-in-out";
}
setInterval(carrossel, 3000);
