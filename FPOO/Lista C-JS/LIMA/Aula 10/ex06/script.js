var result = document.getElementById('result');

function calc(){
    var distanc = Number.parseInt(document.getElementById('distanc').value);
    var veloc = 900;

    let tempo = (distanc / veloc);

    console.log('Demorará cerca de ' + tempo + ' horas para chegar em seu destino usando um avião 747-300!');

    result.innerHTML = 'Demorará cerca de ' + tempo + ' horas para chegar em seu destino usando um avião 747-300!';
}