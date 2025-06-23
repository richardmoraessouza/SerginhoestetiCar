const ver_mais = document.querySelectorAll(".ver_mais");
let btn_ver_mais = document.querySelector(".btn_ver_mais");
const avaliacoes = document.querySelector(".container-avaliacoes");
let novasAvaliacoes = [];

fetch("avaliacoes.json")
  .then((response) => response.json())
  .then((data) => {
    novasAvaliacoes = data;
    mostrarComentarios();
  })
  .catch((error) => console.error("Erro ao carregar JSON", error));

let indiceAtual = 0;
let quantidade_comentarios = 5;
function mostrarComentarios() {
  let proximo = indiceAtual + quantidade_comentarios;
  let comentarios_mostrar = novasAvaliacoes.slice(indiceAtual, proximo);
  comentarios_mostrar.forEach((comentario) => {
    const mostrarAvalicoes = document.createElement("article");
    mostrarAvalicoes.classList.add("avaliacao");
    mostrarAvalicoes.innerHTML = `
    <div class="pessoa">
          <h3>${comentario.nome}</h3>
        </div>
        <p class="estrelas">${'<i class="fas fa-star"></i>'.repeat(
          comentario.estrelas
        )}</p>
        <p class="pessoa_avaliacao">${comentario.texto}</p>
    `;
    avaliacoes.appendChild(mostrarAvalicoes);
    indiceAtual++;
    if (indiceAtual >= novasAvaliacoes.length) {
      btn_ver_mais.textContent = "Fechar";
    }
  });
}

function resetar() {
  avaliacoes.innerHTML = "";
  indiceAtual = 0;
  btn_ver_mais.textContent = "Ver mais";
  mostrarComentarios();
}

btn_ver_mais.addEventListener("click", () => {
  if (btn_ver_mais.textContent === "Fechar") {
    resetar();
  } else {
    mostrarComentarios();
  }
});
// mostrarComentarios();

// =================carrossel===========
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn.next");
  const prevButton = document.querySelector(".carousel-btn.prev");

  let slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  function visibleSlides() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function moveToSlide(index) {
    if (index < 0) index = 0;
    if (index > slides.length - visibleSlides())
      index = slides.length - visibleSlides();

    currentIndex = index;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    moveToSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
  });

  prevButton.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
  });

  moveToSlide(0);

  // ======== Modal das imagens ========
  const focoImgs = document.querySelectorAll(".carousel-slide img");
  const modal = document.querySelector(".focarImg");
  const imagemNoModal = modal.querySelector("img");
  const botaoFechar = modal.querySelector(".sair-model");

  focoImgs.forEach((img) => {
    img.addEventListener("click", () => {
      imagemNoModal.src = img.src;
      imagemNoModal.alt = img.alt;
      modal.classList.add("ativo");
    });
  });

  botaoFechar.addEventListener("click", () => {
    modal.classList.remove("ativo");
  });
});

// ==========mostrar-itens===========
function revelarAoScroll() {
  const elementos = document.querySelectorAll(".scroll-reveal");

  elementos.forEach((el) => {
    const topoElemento = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (topoElemento < alturaTela - 100) {
      el.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", revelarAoScroll);
window.addEventListener("load", revelarAoScroll);

// ========model=============
