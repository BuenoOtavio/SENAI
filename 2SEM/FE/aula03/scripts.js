

function colocarDadosNaTela(dados){

    document.querySelector(".logradouro").innerHTML = "Logradouro: " + dados.logradouro
    document.querySelector(".complemento").innerHTML = "Complemento: " + dados.complemento
    document.querySelector(".bairro").innerHTML = "Bairro: " + dados.bairro
    document.querySelector(".localidade").innerHTML = "Localidade: " + dados.localidade
    document.querySelector(".uf").innerHTML = "Uf: " + dados.uf
    document.querySelector(".ibge").innerHTML = "Ibge: " + dados.ibge
    document.querySelector(".gia").innerHTML = "Gia: " + dados.gia
    document.querySelector(".ddd").innerHTML = "DDD: " + dados.ddd
    document.querySelector(".siafi").innerHTML = "Siafi: " + dados.siafi
}

async function buscarCidade(cep){

    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then (resposta => resposta.json ())

    colocarDadosNaTela(dados)

    

}


function clickBotao() {
    const cep = document.querySelector(".cep").value

    buscarCidade(cep)
}