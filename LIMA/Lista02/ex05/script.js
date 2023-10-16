var result = document.getElementById('result');

function calc(){
    var num = Number.parseInt(document.getElementById('num').value);


    let menos = num - 1;

    let mais = num + 1;

    console.log(num + '+ 1 = ' + mais + ' / ' + num + ' -  1 = ' + menos);

    result.innerHTML = num + '+ 1 = ' + mais + ' / ' + num + ' -  1 = ' + menos;
}