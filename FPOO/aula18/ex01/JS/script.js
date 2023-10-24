// function inss(salario) {
//     if (salario < 1320.01)
//         return salario * 7.5 / 100;
//     else if (salario < 2571.30)
//         return salario * 9 / 100;
//     else if (salario < 3856.95)
//         return salario * 12 / 100;
//     else if (salario < 7507.49)
//         return salario * 14 / 100;
//     else
//         return 1051.05;
// }

// function irrf(salario) {
//     if (salario < 1903.99)
//         return 0;
//     else if (salario < 2826.66)
//         return salario * 7.5 / 100 - 142.8;
//     else if (salario < 3751.06)
//         return salario * 15 / 100 - 354.8;
//     else if (salario < 4664.69)
//         return salario * 22.5 / 100 - 636.13;
//     else
//         return salario * 27.5 / 100 - 869.36;
// }

// //Testando as funções:
// let salario = 1000;
// let inss = inss(salario);
// let salarioBase = salario - inss;
// let irrf = irrf(salarioBase);
// let salarioLiquido = salarioBase - irrf;

// console.log("Salário: " + salario);
// console.log("INSS: " + inss);
// console.log("Salário Base: " + salarioBase);
// console.log("IRRF: " + irrf);
// console.log("Salário Líquido: " + salarioLiquido);

class salario{
    constructor(salario, nome){
        this.salario = salario;
        this.nome = nome;
    }

    inss(){
        if (this.salario < 1320.01)
                return this.salario * 7.5 / 100;
            else if (this.salario < 2571.30)
                return this.salario * 9 / 100;
            else if (this.salario < 3856.95)
                return this.salario * 12 / 100;
            else if (this.salario < 7507.49)
                return this.salario * 14 / 100;
            else
                return 1051.05;
    }

    irrf(){
        if (this.salario < 1903.99)
                return 0;
            else if (this.salario < 2826.66)
                return this.salario * 7.5 / 100 - 142.8;
            else if (this.salario < 3751.06)
                return this.salario * 15 / 100 - 354.8;
            else if (this.salario < 4664.69)
                return this.salario * 22.5 / 100 - 636.13;
            else
                return this.salario * 27.5 / 100 - 869.36;
    }

    salarioBase(){
        return this.salario - this.inss();
    }

    salarioLiquido(){
        return this.salarioBase() - this.irrf();
    }

    showHTML(){
        let str =`<div class="dados"><h1>Nome:</h1><h1>'${this.nome}'</h1>`; 
        console.log(this.salario);
        str += `<h3>Salário:</h3><h3>R$${this.salario.toFixed(2)}</h3>`;
        str += `<h3>INSS:</h3><h3>R$${this.inss().toFixed(2)}</h3>`;
        str += `<h3>Salário Base:</h3><h3>R$${this.salarioBase().toFixed(2)}</h3>`;
        str += `<h3>IRRF:</h3><h3>R$${this.irrf().toFixed(2)}</h3>`;
        str += `<h3>Salário Liquido:</h3><h3>R$${this.salarioLiquido().toFixed(2)}</h3></div>`;
        return str;
    }
}   

 

    // const obj1 = new salario(1000.00, 'Pedro');
    // const obj2 = new salario(18000.00, 'Fefe');
    // const obj3 = new salario(15000.00, 'Jacira');

    // console.log(obj1);
    // console.log(obj1.showHTML());
    // console.log(obj2);
    // console.log(obj2.showHTML());
    // console.log(obj3);
    // console.log(obj3.showHTML());

    // const main = document.getElementById('card');
    // const div1 = document.createElement('div');
    // const div2 = document.createElement('div');
    // const div3 = document.createElement('div');

    // div1.innerHTML = obj1.showHTML();
    // div2.innerHTML = obj2.showHTML();
    // div3.innerHTML = obj3.showHTML();

    // main.appendChild(div1);
    // main.appendChild(div2);
    // main.appendChild(div3);
const valores = document.querySelector('#formSal');
const info = [];

valores.addEventListener('submit', (e) =>{
  e.preventDefault;
  info.push(new salario(valores.sal.value, valores.pessoa.value));

 }
)

function mandaCard(){
    const card = document.querySelector('#card');
    card.innerHTML = '';

    info.forEach( valor => {
        card.innerHTML = `
        
        `;
    })

}