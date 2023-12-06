
function calc(){
    let main = document.getElementById('resultado');
    let num = Number.parseInt(document.getElementById('num').value);
    let valor = num-1;
    let result = num * valor;
    main.innerHTML += `<h2>${num}! = </h2></n>`;
    main.innerHTML += `<h2>${num} x ${valor} = ${result}</h2></n>`;
    valor--;

    while(valor >= 2){
        main.innerHTML += `<h2>${result} x ${valor} = ${result * valor}</h2></n>`;
        result *= valor;
        valor--;
    }

}

