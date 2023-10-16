var result = document.getElementById('result');

function calc(){
    var nome = document.getElementById('cidade').value;
    var pop = Number.parseFloat(document.getElementById('pop').value);
    var votos = Number.parseFloat(document.getElementById('votos').value);

    var media = (votos / pop) * 100.00;

    console.log('A média de votos na cidade ' + nome + ' é de ' + media.toFixed(1) + '%!!');

    result.innerHTML = 'A média de votos na cidade ' + nome + ' é de ' + media.toFixed(1) + '%!!';
}