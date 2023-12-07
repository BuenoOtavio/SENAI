

function calc(){
    let main = document.getElementById('resultado');
    let num = Number.parseInt(document.getElementById('num').value);
    let valor = 1;

    while(valor <= 9){
        main.innerHTML += `<h2>${num} x ${valor} = ${num * valor}</h2></n>`;
        valor++;
    }

}

