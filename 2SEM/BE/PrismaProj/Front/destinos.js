
const uri = "http://localhost:3000/destinos";
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
        const dataFormatada = formatarData(item.data);
        dados.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.valor}</td>
                <td>${dataFormatada}</td>
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

function formatarData(data) {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}



criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        nome: criar.nome.value,
        valor: parseFloat(criar.valor.value),
        data: new Date(criar.data.value)
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
                dados.innerHTML = "";
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
    console.log("1");

    let nome = celulas[1].textContent.trim();
    let valor = parseFloat(celulas[2].textContent.trim());
    let dataTexto = celulas[3].textContent.trim();

    // Converter data do formato dia/mês/ano para ISO
    let dataParts = dataTexto.split('/');
    let dataISO = new Date(`${dataParts[2]}-${dataParts[1]}-${dataParts[0]}`);

    if (isNaN(dataISO.getTime())) {
        console.error("Data inválida:", dataTexto);
        sistema.innerHTML = "Erro: Data inválida!";
        return;
    }

    let dadosAtualizados = {
        nome: nome,
        valor: valor,
        data: dataISO.toISOString() // Conversão para data no formato ISO
    };

    console.log(dadosAtualizados);
    console.log(id);

    fetch(uri + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(res => res.json())
    .then(res => {
        if (res.sqlMessage == undefined) {
            celulas[1].removeAttribute('contenteditable');
            celulas[2].removeAttribute('contenteditable');
            celulas[3].removeAttribute('contenteditable');
            console.log("2");
            btn.innerHTML = '✐';
            btn.setAttribute('onclick', 'edit(this)');
            sistema.innerHTML = `Sucesso ao atualizar!`;
        } else {
            mensagens(res.sqlMessage, 'Erro ao atualizar Item!');
            sistema.innerHTML = `Erro ao atualizar :(!`;
            console.log('3');
        }
    });
}



function del(id) {
    mensagens('Deseja realmente excluir o item id = ' + id + '?', 'Excluir item!', id);
}


async function confirmar(id) {
    
    try{
        let response = await fetch(`${uri}/${id}`, {
            method:'DELETE'
        });
    
        if(response.status === 200) {
            window.location.reload();

        } else {
           let errorData = await response.json();
           console.error('Errinho', errorData.error);
        }
    }

    catch(error){
        console.error('Erro aqui', error);
    };
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

