class Item {
    constructor(i) {
        this.id = i.id;
        this.nome = i.nome;
        this.descricao = i.descricao;
        this.valor = i.valor;
    }
    create() {
        return `insert into item value ('${this.id}',
            '${this.nome}',
            '${this.descricao}',
            '${this.valor}');`
    }
    read(){
        if(this.id == undefined)
            return `select * from item `
        else
            return `select * from item where od = '${this.id}'`
    }

    update(){
        return `update item set
        nome = '${this.nome}',
        descricao = '${this.descricao}',
        valor = '${this.valor}'
        where id = '${this.id}'`
    }
}