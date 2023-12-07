class decoracao{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class livro{
    constructor(titulo){
        this.titulo = titulo;
    }
}

class estante{
    constructor(){
        this.decoracoes = [];
        this.livros = [];
    }

    addLivro(livro){
        this.livros.push(livro);
    }

    addDecoracao(decoracao){
        this.decoracoes.push(decoracao);
    }
}



const estante01 = new estante;
const estante02 = new estante;
const estante03 = new estante;

estante02.addLivro('Livro01');
estante02.addLivro('Livro02');
estante02.addLivro('Livro03');
estante02.addDecoracao('Decoracao01');
estante02.addDecoracao('Decoracao02');

estante03.addLivro('Livro01');
estante03.addLivro('Livro02');
estante03.addDecoracao('Decoracao01');
estante03.addDecoracao('Decoracao02');
estante03.addDecoracao('Decoracao03');
estante03.addDecoracao('Decoracao04');

console.log(estante01);
console.log(estante02);
console.log(estante03);

