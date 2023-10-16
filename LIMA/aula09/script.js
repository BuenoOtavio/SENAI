// //let = Variavel local
// //var = variavel global
// //const = variavel constatnte

// const obj = [
// {
// name:'Luis',
// age: 17,
// country: 'Brazil',
// },
// {
//     name:'Juninho',
//     age: 9,
//     country: 'Brazil',
// },
// {
//     name:'Lara',
//     age: 12,
//     country: 'Brazil',
// }
      
// ]


// console.log(obj);
// console.warn('AVISO');
// console.error('ERRO');
// console.table(obj);

// + soma
// - suntração 
// * multiplicação
// / divisão
// ** potenciação
// % resto da divisão


//Oparedores de Comparação

// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que 
// = atribuição
// == igualdade
// != diferente
// === igualdade de tipo
// !== diferença de tipo

// Exercício 01:


// var a = 4;
// var b = 6;
// var c = 2;
// var result = (a + b)/c;

// console.log(result);


// // Exercício 02:

// var veloc = 5000;
// var distanc = 10000000;
// var temp = distanc / veloc;

// console.log(temp);

// // Exercício 03:

// var nome = 'Mikey';
// var salario = 5000;
// var porcent = 50;
// var aument = (salario * porcent) / 100;
// var resultSalario = salario + aument;

// var data = new Date();

// var hora = data.getHours();
// var min = data.getMinutes();
// var dia = data.getDate();
// var mes = data.getMonth();
// var ano = data.getFullYear();

// var horario = `${hora}:${min}`
// var anoComplet = `${dia}/${mes}/${ano}`;

// console.log('Horario: |' + horario + '|' + ' Data: ' + '|' + anoComplet + '|');

// Math.ceil() -> Arredonda para cima
// Math.floor() -> Arredonda para baixo
// Math.round() -> Arredonda corretamente

// console.log(Math.round(20.6));

// var n = '10';

// Number.ParseInt() -> Converte para inteiro
// Number.ParseFloat() -> Converte para float

//console.log(n, Number.parseInt(n));

// console.log(n, Number.parseFloat(n));

// if(){}

//}else if(){}

// }else{}

//if ternario -> condição ? true : false;

// switch(){case1: break; default: break;}

// for(let i=0; i<10; i++){}

// while(){}

//do{}while()

// var lista = 'a b c d e'.split(' ');

// for(let i=0; i<lista.length; i++){
//     console.log(lista[i])
// }

// lista.forEach(item => {console.log(item)});

// for(let item of lista){console.log(item);}

// function nome(){}

//nome();

//ToFixed -> coloca duas casas decimais na hora de printar

//Lista 02:

//Exercício 01:

function produto(preco){
let porcent = (preco * 8)/100
let result = preco - porcent
if(preco > 1000){
    return result;
}
else{
    return preco
}
}

console.log('Preco atual :' + produto(1200))

function salario(salario, filhos){
    let bonus = filhos * 45;
    let result = salario + bonus
    if(salario < 2000 && filhos > 0){
       console.log('Salário com bonus: ' + 'R$' + result);
    }else{
        console.log('Salário sem bonus: ' + 'R$' + salario);
    }
}

salario(1000, 5);

//Lista 03:

//Exercício 01:

function lista(num){
    if(num > 0){
        console.log('Lista: ');
        for(let i = 0; i < num+1; i++){
            console.log( i);
        }
    }
    else{
        console.log('ERRO');
    }
}

function lista2(num1, num2){
    if(num1 > 0 && num2 > 0){
        console.log('Lista: ');
       while(num1 >= num2){
        console.log(num1);
        num1--;
       }
    }
    else{
        console.log('ERRO');
    }
}

lista(100);
lista2(200,10)