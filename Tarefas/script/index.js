let tarefas = [];
let proximoId = 1;

function adicionar() {
    const input = document.getElementById("tarefaInput");
    const texto = input.value;
    const textoLimpo = texto.trim().toLowerCase();

    if(texto === "") {
        alert("❌ Digite uma tarefa!");
        return;
    }

    if (tarefas.some(tarefa => tarefa.titulo.trim().toLowerCase() === textoLimpo)) {
        alert("Essa tarefa já foi adicionada a lista");
        return;
    }

    let tarefa = {
        id: proximoId,
        titulo: texto,
        status: "Pendente"
    }

    tarefas.push(tarefa);
    proximoId++;

    input.value = "";
    input.focus();

    mostrarTarefa();
}

function mostrarTarefa() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach(function(tarefa) {
        let item = document.createElement("li");
        item.innerHTML = 
        `${ tarefa.id} - ${ tarefa.titulo} [${ tarefa.status}] ` +
        `<button onclick="concluirTarefa(${tarefa.id})">✔️</button> ` +
        `<button onclick="removerTarefa(${tarefa.id})">❌</button>`

        lista.appendChild(item);
    });
}

function concluirTarefa(id) {
    tarefas.forEach((tarefa) => {
        if(tarefa.id === id) {
            tarefa.status = "Concuída";
        }
    });

    mostrarTarefa();
}

function removerTarefa(id) {
    let novaLista = [];

    tarefas.forEach((tarefa) => {
        if(tarefa.id !== id) {
            novaLista.push(tarefas);
        }
    });

    tarefas = novaLista;
    
    mostrarTarefa();
}