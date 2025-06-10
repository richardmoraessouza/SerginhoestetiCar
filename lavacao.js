const ver_mais = document.querySelectorAll(".ver_mais");
let btn_ver_mais = document.querySelector(".btn_ver_mais");
const avaliacoes = document.querySelector(".container-avaliacoes");
const novasAvaliacoes = [
  {
    nome: "Ana Costa",
    estrelas: 5,
    texto:
      "O serviço foi excepcional! Meu carro ficou impecável, super limpo e com um brilho que não esperava. A equipe foi muito atenciosa e profissional durante todo o processo.",
  },
  {
    nome: "Pedro Martins",
    estrelas: 4,
    texto:
      "Gostei muito do atendimento e do cuidado com o meu veículo. O resultado final ficou ótimo, principalmente na parte da higienização interna, onde realmente senti a diferença.",
  },
  {
    nome: "Lucas Lima",
    estrelas: 5,
    texto:
      "Recomendo para todos que querem deixar o carro com aparência de novo. O polimento técnico deu um brilho incrível na pintura.",
  },
  {
    nome: "Fernanda Souza",
    estrelas: 5,
    texto:
      "Fiquei impressionada com a qualidade do serviço. O carro ficou com um cheiro agradável e a limpeza interna foi feita com muita atenção aos detalhes.",
  },
  {
    nome: "João Pedro",
    estrelas: 5,
    texto:
      "O trabalho realizado superou minhas expectativas. Profissionais dedicados, que tratam o veículo com muito cuidado e utilizam produtos de alta qualidade.",
  },
  {
    nome: "Mariana Ribeiro",
    estrelas: 4,
    texto:
      "A lavagem completa deixou meu carro com aspecto de novo. Gostei bastante do polimento que removeu riscos leves, e o atendimento foi ótimo do começo ao fim.",
  },
  {
    nome: "Gustavo Almeida",
    estrelas: 5,
    texto:
      "O processo de descontaminação da pintura fez uma grande diferença. O carro ficou muito mais brilhante e protegido.",
  },
  {
    nome: "Camila Rocha",
    estrelas: 5,
    texto:
      "Meu carro nunca esteve tão bem cuidado. A higienização interna eliminou odores que estavam incomodando há meses.",
  },
  {
    nome: "Rafael Barbosa",
    estrelas: 4,
    texto:
      "Serviço rápido e eficiente, com ótima qualidade. Recomendo para quem quer cuidar bem do carro sem perder tempo.",
  },
  {
    nome: "Larissa Duarte",
    estrelas: 5,
    texto:
      "Excelente atendimento e serviço de qualidade. Eles são muito detalhistas e caprichosos, cuidando do carro como se fosse deles.",
  },
  {
    nome: "Mateus Ferreira",
    estrelas: 5,
    texto:
      "Polimento técnico sensacional! Meu carro parece novo, e o brilho da pintura chamou a atenção de todos. A equipe é muito educada e experiente.",
  },
  {
    nome: "Juliana Nogueira",
    estrelas: 5,
    texto:
      "A higienização interna foi feita com muito cuidado, eliminando ácaros e bactérias. Recomendo para quem tem crianças ou pessoas alérgicas em casa.",
  },
  {
    nome: "André Lopes",
    estrelas: 4,
    texto:
      "Ótimo custo-benefício e atendimento eficiente. A vitrificação protegeu bem a pintura do meu carro, que agora está com um brilho duradouro.",
  },
  {
    nome: "Isabela Cardoso",
    estrelas: 5,
    texto:
      "O carro ficou com um aspecto totalmente renovado, além do cheiro agradável no interior. Equipe super profissional e produtos de alta qualidade.",
  },
  {
    nome: "Eduardo Paiva",
    estrelas: 5,
    texto:
      "Serviço de cristalização de vidros muito eficaz, melhorando bastante a visibilidade nos dias de chuva. Recomendo a todos!",
  },
  {
    nome: "Bruna Silva",
    estrelas: 5,
    texto:
      "A descontaminação da pintura foi feita com muito cuidado e eficiência, preparando o carro para o polimento e vitrificação. Resultado excelente.",
  },
  {
    nome: "Leandro Teixeira",
    estrelas: 4,
    texto:
      "Fiquei satisfeito com o serviço de lavagem e higienização. Recomendo para quem busca qualidade e profissionalismo.",
  },
  {
    nome: "Patrícia Monteiro",
    estrelas: 5,
    texto:
      "Atendimento excepcional e serviço de primeira. Meu carro saiu parecendo zero quilômetro, super limpo e protegido.",
  },
  {
    nome: "Vinícius Mendes",
    estrelas: 5,
    texto:
      "Excelente trabalho! Meu carro ficou com brilho intenso e a pintura protegida por muito mais tempo. Equipe super dedicada.",
  },
  {
    nome: "Natália Ramos",
    estrelas: 4,
    texto:
      "O serviço atendeu minhas expectativas. O atendimento foi muito cordial e o carro ficou muito bem cuidado.",
  },
  {
    nome: "Carlos Henrique",
    estrelas: 5,
    texto:
      "Voltei a confiar em serviços de estética automotiva graças ao Serginho EstetiCar. Atendimento personalizado e resultado impecável.",
  },
  {
    nome: "Renata Farias",
    estrelas: 5,
    texto:
      "Serviço excelente e atenção aos detalhes. O carro ficou com um aspecto brilhante e limpo, além do interior higienizado com muito cuidado.",
  },
  {
    nome: "Diego Azevedo",
    estrelas: 5,
    texto:
      "Profissionalismo e qualidade em todos os serviços realizados. Meu carro está protegido e com a pintura renovada.",
  },
  {
    nome: "Vanessa Moura",
    estrelas: 4,
    texto:
      "Gostei bastante do atendimento e do resultado final. A higienização eliminou odores e deixou o carro com aspecto novo.",
  },
  {
    nome: "Tiago Oliveira",
    estrelas: 5,
    texto:
      "Os serviços de vitrificação e polimento técnico fizeram toda a diferença. Meu carro está protegido contra riscos e com brilho impecável.",
  },
  {
    nome: "Tatiane Reis",
    estrelas: 5,
    texto:
      "O serviço de lavagem completa foi feito com muito capricho e atenção. Equipe simpática e comprometida com a qualidade.",
  },
  {
    nome: "Henrique Castro",
    estrelas: 4,
    texto:
      "Excelente custo-benefício. O carro ficou limpo, com pintura protegida e interior higienizado.",
  },
  {
    nome: "Aline Moura",
    estrelas: 5,
    texto:
      "Super recomendo! Equipe muito competente e serviço de alta qualidade. Meu carro ficou parecendo novo.",
  },
  {
    nome: "Marcelo Antunes",
    estrelas: 5,
    texto:
      "Muito satisfeito com o atendimento e o resultado. O polimento técnico renovou a pintura e o carro está com brilho intenso.",
  },
  {
    nome: "Sabrina Gomes",
    estrelas: 5,
    texto:
      "Profissionais muito dedicados e atenciosos. O serviço de cristalização de vidros melhorou muito a visibilidade, principalmente em dias chuvosos.",
  },
];
let indiceAtual = 0;
const Vez_5 = 5;

function mostrarMais() {
  if (btn_ver_mais.textContent === "Fechar") {
    avaliacoes.innerHTML = "";
    indiceAtual = 0;
    btn_ver_mais.textContent = "Ver mais";
    mostrarMais();
    return;
  }

  for (let i = 0; i < Vez_5; i++) {
    if (indiceAtual >= novasAvaliacoes.length) {
      btn_ver_mais.textContent = "Fechar";
      return;
    }

    const avaliacao = novasAvaliacoes[indiceAtual];
    const MostraAvalicoes = document.createElement("article");
    MostraAvalicoes.classList.add("avaliacao");
    MostraAvalicoes.innerHTML = `
      
        <div class="pessoa">
          <h3>${avaliacao.nome}</h3>
        </div>
        <p class="estrelas">${'<i class="fas fa-star"></i>'.repeat(
          avaliacao.estrelas
        )}</p>
        <p class="pessoa_avaliacao">${avaliacao.texto}</p>
     
    `;
    avaliacoes.appendChild(MostraAvalicoes);
    indiceAtual++;
  }
}

mostrarMais();
btn_ver_mais.addEventListener("click", mostrarMais);
// =================carrossel===========
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn.next");
  const prevButton = document.querySelector(".carousel-btn.prev");

  let slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0;

  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    moveToSlide(currentIndex);
  });

  function moveToSlide(index) {
    if (index < 0) index = 0;
    if (index > slides.length - visibleSlides())
      index = slides.length - visibleSlides();

    currentIndex = index;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  function visibleSlides() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  nextButton.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
  });

  prevButton.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
  });

  const focoImg = document.querySelectorAll(".carousel-slide");
  const img_selecionado = document.querySelector(".focarImg");
  const sair_model = document.querySelector(".sair-model");
  sair_model.addEventListener("click", () => {
    img_selecionado.classList.remove("ativo");
  });

  focoImg.forEach((img) => {
    img.addEventListener("click", () => {
      img_selecionado.classList.add("ativo");
    });
  });
  moveToSlide(0);
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
