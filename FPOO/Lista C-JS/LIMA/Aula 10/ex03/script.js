var resultado = document.getElementById('resultado')

function calc(){
    var nome = document.getElementById('nome').value;
    var salario = Number.parseInt(document.getElementById('salario').value);
    var percent = Number.parseInt(document.getElementById('percent').value);
  
    let aumento = (salario * percent)/100

    let result = salario + aumento

    console.log(result)

    resultado.innerHTML = nome + ', o seu salário com aumento de R$' + aumento + ' é : ' + result

}