var result = document.getElementById('result');

function calc(){
    var alqueires= Number.parseInt(document.getElementById('alqueires').value);
    var caminhoes = Number.parseInt(document.getElementById('caminhoes').value);

    let conta = (alqueires * 250) / (caminhoes * 18);

    console.log('Será necessário ' + Math.round(conta) + ' viagens por caminhão');

    result.innerHTML = 'Será necessário ' + Math.round(conta) + ' viagens por caminhão';

}