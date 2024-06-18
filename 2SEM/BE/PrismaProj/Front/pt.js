const uri = "http://localhost:3000/pontosTuristicos";
const itens = [];
const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const cadastro = document.getElementById('cadastro');
const sistema = document.getElementById('sisMsgs');

function loadItens() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            res.forEach(item => {
                itens.push(item);
            });
            preencherTabela();
        });
}

function preencherTabela() {
    dados.innerHTML = ""; // Limpar a tabela antes de preenchê-la novamente
    itens.forEach(item => {
        dados.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.endereco}</td>
                <td>${item.telefone}</td>
                <td>${item.id_destino}</td>
                <td class="botao">
                    <button onclick="del(${item.id})"> - </button>
                    <button onclick="edit(this)"> ✐ </button>
                </td>
            </tr>
        `;
    });
    sistema.innerHTML = `
       Tabela Preenchida com sucesso!
    `;
}

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        nome: criar.nome.value,
        endereco: criar.endereco.value,
        telefone: criar.telefone.value,
        id_destino: parseInt(criar.id_destino.value)
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                itens.push(res);
                preencherTabela();
                cadastro.classList.add('oculto');
                criar.reset();
                sistema.innerHTML = `Sucesso ao cadastrar!`;
            } else {
                cadastro.classList.add('oculto');
                mensagens(res.sqlMessage, 'Erro ao cadastrar item!');
            }
        });
});

function update(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].textContent.trim();
    
    let data = {
        nome: celulas[1].textContent.trim(),
        endereco: celulas[2].textContent.trim(),
        telefone: celulas[3].textContent.trim(),
        id_destino: parseInt(celulas[4].textContent.trim())
    };

    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if (res.sqlMessage == undefined) {
            for (let i = 1; i < celulas.length - 1; i++) {
                celulas[i].removeAttribute('contenteditable');
            }
            btn.innerHTML = '✐';
            btn.setAttribute('onclick', 'edit(this)');
            sistema.innerHTML = `Sucesso ao atualizar!`;
        } else {
            mensagens(res.sqlMessage, 'Erro ao atualizar Item!');
            sistema.innerHTML = `Erro ao atualizar :(!`;
        }
    });
}

function del(id) {
    mensagens(`Deseja realmente excluir o item id = ${id}?`, 'Excluir item!', id);
}

async function confirmar(id) {
    try {
        let response = await fetch(`${uri}/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 200) {
            window.location.reload();
        } else {
            let errorData = await response.json();
            console.error('Errinho', errorData.error);
        }
    } catch (error) {
        console.error('Erro aqui', error);
    }
}

function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute('contenteditable', 'true');
    }
    btn.innerHTML = '✔';
    btn.setAttribute('onclick', 'update(this)');
}

function mensagens(msg, titulo, confirma) {
    msgs.classList.remove('oculto');
    document.querySelector('#errTit').innerHTML = titulo;
    document.querySelector('#msg').innerHTML = msg;
    if (confirma != undefined) {
        document.querySelector('#confirma').classList.remove('oculto');
        document.querySelector('#confirma').setAttribute("onclick", `confirmar(${confirma})`);
    }
}
