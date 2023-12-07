


function calc(){
    let main = document.getElementById('resultado');
    let num = 0;

    while(num <= 10){
        if(num % 2 == 0){
            main.innerHTML += `<h2>${num}</h2></n>`;
        }
        else{
            main.innerHTML += `<p>${num}</h3></n>`;
        }
        num++;
    }

}

