class Ingrediente{
    constructor(descricao){
        this.descricao = descricao;
    }
}

class comida{
    constructor(nome, tipo, peso){
        this.nome = nome != undefined ? nome : "Comida Genérica";
        this.tipo = tipo != undefined ? tipo : "Tipo Genérico";
        this.peso = peso != undefined ? peso : 0;
    }
}

class salgada{
    constructor(nome, peso){
        this.nome = nome != undefined ? nome : "Comida Genérica";
        this.tipo = "Salgada";
        this.peso = peso != undefined ? peso : 0;
    }
}

class doce{
    constructor(nome, peso){
        this.nome = nome != undefined ? nome : "Comida Genérica";
        this.tipo = "Doce";
        this.peso = peso != undefined ? peso : 0;
    }
}

class comidaBuilder{
    constructor(nome, tipo, peso){
        if(nome == undefined && tipo == undefined && peso != undefined){
            if(tipo == "Salgada")
            this.comida = new salgada(nome, peso);
            else if(tipo == "Doce")
            this.comida = new doce(nome, peso);
            else 
            this.comida = new comida(nome, tipo, peso);
        }else if(nome != undefined && tipo != undefined){
            if(tipo == "Salgada")
            this.comida = new salgada(nome);
            else if(tipo == "Doce")
            this.comida = new doce(nome);
            else 
            this.comida = new comida(nome, tipo);
        }else if(nome != undefined){
            this.comida = new comida(nome)
        }else{
            this.comida = new comida();
        }
    }

    addIngrediente(ingrediente){
        if(this.comida.ingredientes == undefined){
            this.comida.ingredientes = [];
        }
        this.comida.ingredientes.push(ingrediente);
        return this;
    }

    build(){
        return this.comida;
    }
}

const comidas = [
    new comidaBuilder(),
    new comidaBuilder("Arroz", "Salgada", 100),
    new comidaBuilder("Feijão"),
    new comidaBuilder("Brigadeiro", "Doce"),
    new comidaBuilder("Bolo", "Doce", 200),
    new comidaBuilder("Pudim", "Doce", 150),
    new comidaBuilder("Lasanha", "Salgada", 300),
    new comidaBuilder("Pizza", "Salgada", 400),
    new comidaBuilder("Macarrão", "Salgada", 200),
    new comidaBuilder("Salada", "Salgada", 100),
    new comidaBuilder("Sorvete", "Doce"),
    new comidaBuilder()
]

comidas[1].addIngrediente(new Ingrediente("Sal"));
comidas[1].addIngrediente(new Ingrediente("Alho"));
comidas[3].addIngrediente(new Ingrediente("Leite Condenado"));
comidas[3].addIngrediente(new Ingrediente("Chocolate em pó"));

console.log(comidas);
console.table(comidas);
console.log(JSON.stringify(comidas,null,2));