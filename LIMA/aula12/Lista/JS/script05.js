
function calc(){
    let main = document.getElementById('resultado');
    let num = Number.parseInt(document.getElementById('num').value);
    let valor = 0;

    while(valor <= num){
        main.innerHTML += `<h2>${valor}</h2></n>`;
        valor++;
    }

}

