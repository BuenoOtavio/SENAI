var result = document.getElementById('result');

function calc(){
    var raio = Number.parseFloat(document.getElementById('raio').value);
    var altura = Number.parseFloat(document.getElementById('altura').value);

    var pi = 3.14;

    var area = 2 * raio * pi * (raio+altura);

    var volume = pi * (raio * raio) * altura;

    console.log('Volume = ' + volume.toFixed(2) + ' - Area = ' + area.toFixed(2));

    result.innerHTML = 'Volume = ' + volume.toFixed(2) + ' - Area = ' + area.toFixed(2);

}