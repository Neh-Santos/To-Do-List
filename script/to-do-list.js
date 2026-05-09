let itens = [];

function adicionar() {
    const input = document.getElementById("to-do");
    const tarefa = input.value.trim();

    if(tarefa === "") {
        alert("Por favor, insira uma tarefa");
        return;
    } else if(itens.includes(tarefa)) {
        alert("Essa tarefa já foi adicionada a lista");
        return;
    }

    itens.push(tarefa);

    input.value = "";
    input.focus();

    atualizarTela();
}

function atualizarTela() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    itens.forEach((tarefa) => {
        const item = document.createElement("li");

        const check = document.createElement("input")
        check.type = "checkbox";
        check.className = "check";

        const span = document.createElement("span");
        span.className = "text-tarefa";
        span.textContent = tarefa;

        item.appendChild(check);
        item.appendChild(span);

        lista.appendChild(item);
    });
}

function limparLista() {
    itens = [];
    atualizarTela();
}