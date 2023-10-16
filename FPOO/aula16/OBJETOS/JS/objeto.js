//Objeto declarado iretamente

const obj = {};

//Atributos dinamicamente

obj.nome = 'Bola';
obj.preco = 39.90;
obj.qtd = 10;

//Métodos

obj.total = function () {   
  return obj.preco * obj.qtd;
}

//Método com arrow function

obj.showHTML = () => {
    let str = `<label>Nome:</label><label> ${obj.nome} </label>`;
    str += `<label>Preço:</label><label>${obj.preco}</label>`;
    str += `<label>Quantidade:</label><label>${obj.qtd}</label>`;
    str += `<label>Total:</label><label>${obj.total()}</label>`;
    return str;
}

const obj2 = {
    nome: 'Mesa de ecritório',
    preco: 349.90,
    qtd : 2,
    total: function (){
        return this.preco * this.qtd;
    },
    showHTML: function(){
        let str = `<label>Nome:</label><label> ${this.nome} </label>`;
        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;
        return str;
    }
}

const obj3 = {
    nome: 'Fantasia',
    preco: 120.00,
    qtd : 3,
    total: function (){
        return this.preco * this.qtd;
    },
    showHTML: function(){
        let str = `<label>Nome:</label><label> ${this.nome} </label>`;
        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;
        return str;
    }
}

//Saidas no console 

console.log(obj);
console.log('Valor total = R$' + obj.total().toFixed(2));
console.log(obj2);
console.log('Valor total = R$' + obj2.total().toFixed(2));
console.log(obj3);
console.log('Valor total = R$' + obj3.total().toFixed(2));

//Saida no HTML

const main = document.getElementById('objetos');
const div = document.createElement('div');
div.innerHTML = obj.showHTML();
main.appendChild(div);

const main2 = document.getElementById('objetos');
const div2 = document.createElement('div');
div2.innerHTML = obj2.showHTML();
main.appendChild(div2);

const main3 = document.getElementById('objetos');
const div3 = document.createElement('div');
div3.innerHTML = obj3.showHTML();
main.appendChild(div3);
