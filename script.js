
 // VETOR (ARRAY) PARA ARMAZENAR OS LIVROS
let livros = [];

// ELEMENTOS DA PÁGINA
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoCategoria = document.getElementById("categoria");
const listaLivros = document.getElementById("listaLivros");
const quantidade = document.getElementById("quantidade");

// FUNÇÃO PARA ADICIONAR UM LIVRO
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = campoNome.value.trim();
    const categoria = campoCategoria.value;

    // VERIFICAR SE OS CAMPOS FORAM PREENCHIDOS
    if (nome === "" || categoria === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // CRIAR UM OBJETO COM OS DADOS DO LIVRO
    const novoLivro = {
        nome: nome,
        categoria: categoria
    };

    // ADICIONAR O LIVRO AO ARRAY
    livros.push(novoLivro);

    // ATUALIZAR A LISTA NA TELA
    mostrarLivros();

    // LIMPAR OS CAMPOS
    formulario.reset();

    campoNome.focus();

    alert("Livro cadastrado com sucesso!");
});

// FUNÇÃO PARA MOSTRAR OS LIVROS
function mostrarLivros() {

    listaLivros.innerHTML = "";

    // ATUALIZAR O CONTADOR
    quantidade.textContent = livros.length;

    // VERIFICAR SE A LISTA ESTÁ VAZIA
    if (livros.length === 0) {

        listaLivros.innerHTML = `
            <div class="vazio">
                <span>📖</span>
                <h3>Nenhum livro cadastrado</h3>
                <p>Adicione seu primeiro livro para começar.</p>
            </div>
        `;

        return;
    }

    // PERCORRER O ARRAY
    livros.forEach(function(livro, indice) {

        const item = document.createElement("div");
        item.className = "livro";

        const informacoes = document.createElement("div");
        informacoes.className = "livro-info";

        const icone = document.createElement("span");
        icone.className = "icone-livro";
        icone.textContent = "📘";

        const detalhes = document.createElement("div");

        const nome = document.createElement("h3");
        nome.textContent = livro.nome;

        const categoria = document.createElement("p");
        categoria.textContent = "Categoria: " + livro.categoria;

        detalhes.appendChild(nome);
        detalhes.appendChild(categoria);

        informacoes.appendChild(icone);
        informacoes.appendChild(detalhes);

        // BOTÃO PARA EXCLUIR
        const botaoExcluir = document.createElement("button");
        botaoExcluir.className = "excluir";
        botaoExcluir.textContent = "Excluir";

        botaoExcluir.addEventListener("click", function() {
            excluirLivro(indice);
        });

        item.appendChild(informacoes);
        item.appendChild(botaoExcluir);

        listaLivros.appendChild(item);

    });

}

// FUNÇÃO PARA EXCLUIR UM LIVRO
function excluirLivro(indice) {

    livros.splice(indice, 1);

    mostrarLivros();

}

// MOSTRAR A LISTA INICIAL
mostrarLivros();
