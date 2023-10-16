var result = document.getElementById('result')

function calc(){
    var nome = document.getElementById('time').value;
    var vitorias = Number.parseInt(document.getElementById('vitorias').value);
    var empates = Number.parseInt(document.getElementById('empates').value);

    let pontos = (vitorias*3) + empates;

    console.log('"O time ' + nome + ' tem ' + pontos + ' pontos!"');

    result.innerHTML = 'O time ' + nome + ' tem ' + pontos + ' pontos';
}
