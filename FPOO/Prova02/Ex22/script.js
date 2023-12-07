class Marca{
    constructor(nome){
        this.nome = nome;
    }
    FalarMarca(){
        return `Eu sou o carro da marca ${this.nome}`;
    }
}

class Modelo extends Marca{
    constructor(marca, modelo){
        super(marca);
        this.modelo=modelo;
    }

    FalarModelo(){
        return `${this.FalarMarca()} e sou o modelo ${this.modelo}`;;
    }
}

const modelo1 = new Marca("Honda", "carro01");
const modelo02 = new Marca("volkswagen", "carro02");
const modelo03 = new Marca("Ford", "carro03");
const modelo04 = new Marca("volkswagen", "carro04");
const modelo05 = new Marca("Ford", "carro05");

console.table(modelo1);
console.table(modelo02);
console.table(modelo03);
console.table(modelo04);
console.table(modelo05);