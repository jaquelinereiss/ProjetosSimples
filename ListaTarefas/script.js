const inputTarefa = document.getElementById("tarefa");
const botaoAdicionarTarefa = document.getElementById("adicionar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
let tarefaEditando = null;

inputTarefa.addEventListener("input", function () {
    const limiteCaracteres = 40;
    if (inputTarefa.value.length > limiteCaracteres) {
        inputTarefa.value = inputTarefa.value.slice(0, limiteCaracteres);
    }
});

botaoAdicionarTarefa.addEventListener("click", gerenciarTarefa);

inputTarefa.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        gerenciarTarefa();
    }
});

function gerenciarTarefa() {
    const tarefaTexto = inputTarefa.value.trim();

    if (tarefaTexto === "") {
        return;
    }

    const totalTarefas = listaTarefas.getElementsByTagName("li").length;
    if (totalTarefas >= 10) {
        alert("Você não pode adicionar mais de 10 tarefas.");
        return;
    }

    if (tarefaEditando) {
        const ultimoTextoEditado = tarefaEditando.querySelector("span").textContent;
        tarefaEditando.querySelector("span").textContent = tarefaTexto;
        tarefaEditando = null;
        inputTarefa.value = ultimoTextoEditado;
        inputTarefa.value = "";
        botaoAdicionarTarefa.textContent = "Adicionar";
    } else {

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${tarefaTexto}</span>
            <div class="botoes">
                <button class="botao-editar">Editar</button>
                <button class="botao-remover">Remover</button>
            </div>
        `;
        listaTarefas.appendChild(li);

        inputTarefa.value = "";
        inputTarefa.focus();

        li.querySelector(".botao-remover").addEventListener("click", function () {
            li.remove();
        });

        li.querySelector(".botao-editar").addEventListener("click", function () {
            tarefaEditando = li;
            inputTarefa.value = tarefaEditando.querySelector("span").textContent;
            botaoAdicionarTarefa.textContent = "Editar";
        });
    }
}