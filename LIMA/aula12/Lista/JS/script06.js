
function calc(){
    let main = document.getElementById('resultado');
    let num = Number.parseInt(document.getElementById('num').value);
    let num2 = Number.parseInt(document.getElementById('num2').value);

    while(num <= num2){
        main.innerHTML += `<h2>${num}</h2></n>`;
        num++;
    }

}

