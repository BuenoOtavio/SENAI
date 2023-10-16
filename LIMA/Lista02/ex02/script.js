var resultado = document.getElementById('resultado')

function calc(){
    var distanc = Number.parseInt(document.getElementById('distancia').value);
    var veloc = Number.parseInt(document.getElementById('veloc').value);
  
    let result = distanc / veloc

    console.log('Resultado: ' + result + ' horas de viagem')

    resultado.innerHTML = result + ' horas de viagem'

}
