const vagas = [
    {
        titulo: "Estágio em Desenvolvimento Web",
        empresa: "TechStart",
        tipo: "Remoto",
        tecnologias: "HTML, CSS e JavaScript"
    },
    {
        titulo: "Desenvolvedor Front-end Júnior",
        empresa: "WebCode",
        tipo: "Híbrido",
        tecnologias: "JavaScript e React"
    },
    {
        titulo: "Estágio em Python",
        empresa: "Data Minas",
        tipo: "Presencial",
        tecnologias: "Python e MySQL"
    },
    {
        titulo: "Suporte de TI",
        empresa: "InfoHelp",
        tipo: "Presencial",
        tecnologias: "Redes e Windows"
    },
    {
        titulo: "Desenvolvedor Back-end Júnior",
        empresa: "CodeLab",
        tipo: "Remoto",
        tecnologias: "Node.js e MySQL"
    },
    {
        titulo: "Estágio em Banco de Dados",
        empresa: "DevSolutions",
        tipo: "Híbrido",
        tecnologias: "SQL e MySQL"
    }
];

const jobsGrid = document.getElementById("jobs-grid");
const inputBusca = document.getElementById("busca");
const resultadoContagem = document.getElementById("resultado-contagem");
const botaoTema = document.getElementById("theme-toggle");

function   mostrarVagas(lista) {
    jobsGrid.innerHTML = "";

    if (lista.length === 0) {
        jobsGrid.innerHTML = "<p>Nenhuma vaga encontrada.</p>";
        resultadoContagem.textContent = "0 vagas encontradas";
        return;
    }

    lista.forEach(function(vaga) {
        const card = document.createElement("article");
        card.className = "job-card";

        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = vaga.tipo;

        const titulo = document.createElement("h3");
        titulo.textContent = vaga.titulo;

        const empresa = document.createElement("p");
        empresa.className = "company";
        empresa.textContent = vaga.empresa;

        const tecnologias = document.createElement("p");
        tecnologias.className = "tech";
        tecnologias.textContent = vaga.tecnologias;

        const botao = document.createElement("button");
        botao.className = "btn";
        botao.textContent = "Ver vaga";

        botao.addEventListener("click", function() {
            alert("Vaga selecionada: " + vaga.titulo);
        });

        card.appendChild(badge);
        card.appendChild(titulo);
        card.appendChild(empresa);
        card.appendChild(tecnologias);
        card.appendChild(botao);

        jobsGrid.appendChild(card);
    });

    resultadoContagem.textContent = lista.length + " vaga(s) encontrada(s)";
}

function filtrarVagas() {
    const texto = inputBusca.value.toLowerCase();

    const vagasFiltradas = vagas.filter(function(vaga) {
        return vaga.titulo.toLowerCase().includes(texto) ||
               vaga.empresa.toLowerCase().includes(texto) ||
               vaga.tipo.toLowerCase().includes(texto) ||
               vaga.tecnologias.toLowerCase().includes(texto);
    });

    mostrarVagas(vagasFiltradas);
}

function trocarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "☀️";
        localStorage.setItem("tema", "dark");
    } else {
        botaoTema.textContent = "🌙";
        localStorage.setItem("tema", "claro");
    }
}

inputBusca.addEventListener("input", filtrarVagas);
botaoTema.addEventListener("click", trocarTema);

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    botaoTema.textContent = "☀️";
}

mostrarVagas(vagas);
