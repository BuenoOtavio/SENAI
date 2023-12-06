

function calc(){
    let main = document.getElementById('resultado');
    let num = 10;

    while(num >= 0){
        main.innerHTML += `<h2>${num}</h2></n>`;
        num--;
    }

}
