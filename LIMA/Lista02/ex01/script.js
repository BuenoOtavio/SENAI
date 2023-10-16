

var resultado = document.getElementById('resultado')

function calc(){
    var a = Number.parseInt(document.getElementById('a').value);
    var b = Number.parseInt(document.getElementById('b').value);
    var c = Number.parseInt(document.getElementById('c').value);
  
    let result = (a + b) / c

    console.log(result)

    resultado.innerHTML = result

}

