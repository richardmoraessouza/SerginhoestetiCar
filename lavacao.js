// ══════════════════════════════════════
//  AVALIAÇÕES
// ══════════════════════════════════════
const avaliacoesContainer = document.querySelector(".container-avaliacoes");
const btnVerMais = document.querySelector(".btn-ver-mais");
let todasAvaliacoes = [];
let indiceAtual = 0;
const POR_VEZ = 6;

fetch("avaliacoes.json")
  .then((r) => r.json())
  .then((data) => {
    todasAvaliacoes = data;
    mostrarComentarios();
  })
  .catch((err) => console.error("Erro ao carregar avaliações:", err));

function getInitial(nome) {
  return nome ? nome.charAt(0).toUpperCase() : "?";
}

function mostrarComentarios() {
  const proximo = indiceAtual + POR_VEZ;
  const lote = todasAvaliacoes.slice(indiceAtual, proximo);

  lote.forEach((c) => {
    const art = document.createElement("article");
    art.classList.add("avaliacao");
    art.innerHTML = `
      <div class="pessoa">
        <div class="pessoa-avatar">${getInitial(c.nome)}</div>
        <h3>${c.nome}</h3>
      </div>
      <p class="estrelas">${'<i class="fas fa-star"></i>'.repeat(c.estrelas)}</p>
      <p class="pessoa_avaliacao">${c.texto}</p>
    `;
    avaliacoesContainer.appendChild(art);
    indiceAtual++;
  });

  if (indiceAtual >= todasAvaliacoes.length) {
    btnVerMais.textContent = "Fechar avaliações";
  }
}

function resetarAvaliacoes() {
  avaliacoesContainer.innerHTML = "";
  indiceAtual = 0;
  btnVerMais.textContent = "Ver mais avaliações";
  mostrarComentarios();
}

btnVerMais?.addEventListener("click", () => {
  if (btnVerMais.textContent.startsWith("Fechar")) {
    resetarAvaliacoes();
  } else {
    mostrarComentarios();
  }
});

// ══════════════════════════════════════
//  CARROSSEL
// ══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track?.children || []);
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  if (!track || slides.length === 0) return;

  let slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  function visibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function moveTo(index) {
    const max = slides.length - visibleCount();
    currentIndex = Math.max(0, Math.min(index, max));
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    moveTo(currentIndex);
  });

  nextBtn?.addEventListener("click", () => moveTo(currentIndex + 1));
  prevBtn?.addEventListener("click", () => moveTo(currentIndex - 1));

  moveTo(0);

  // ── Modal ──
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("model_img");
  const fecharBtn = document.querySelector(".sair-model");

  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    img?.addEventListener("click", () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add("ativo");
      document.body.style.overflow = "hidden";
    });
  });

  fecharBtn?.addEventListener("click", fecharModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  function fecharModal() {
    modal.classList.remove("ativo");
    document.body.style.overflow = "";
  }

  // Fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) fecharModal();
  });
});

// ══════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════
function revelar() {
  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revelar, { passive: true });
window.addEventListener("load", revelar);

// ══════════════════════════════════════
//  NAVBAR — compactar no scroll
// ══════════════════════════════════════
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar?.classList.add("scrolled");
  } else {
    navbar?.classList.remove("scrolled");
  }
}, { passive: true });