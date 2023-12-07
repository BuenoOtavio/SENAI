class Cliente{
    constructor(nome, cpf, email, telefone){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }

    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getCpf(){
        return this.cpf;
    }
    setCpf(cpf){
        this.cpf = cpf;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getTelefone(){
        return this.telefone;
    }
    setTelefone(telefone){
        this.telefone = telefone
    }
} 

const cliente01 = new Cliente("Pedro Guimarães",  "502276138-64", "gmail@gamil.com", "19998639005");
const cliente02 = new Cliente("Josias Grabalos",  "983645903-12", "batata@gamil.com", "19027493083");
const cliente03 = new Cliente("Maria Fernanda",  "093478453-14", "fefe@gamil.com", "1999862849");
const cliente04 = new Cliente("Ana Eliza",  "928374018-09", "eliza@gamil.com", "19927493028");
const cliente05 = new Cliente("Joao Gabriel",  "195012334-23", "jg@gamil.com", "13923930281");
const cliente06 = new Cliente("Felipe Araujo",  "582928393-64", "felipel@gamil.com", "81938291018");
const cliente07 = new Cliente("Beatriz Queiroz",  "912212122-12", "bee@gamil.com", "15830289408");
const cliente08 = new Cliente("Leandro da Silva",  "093345533-14", "lele@gamil.com", "18339303920");
const cliente09 = new Cliente("Julia Almeida",  "182923839-09", "julinha@gamil.com", "98193829191");
const cliente10 = new Cliente("Isac Jesus",  "102830392-23", "isac@gamil.com", "10192839018");

console.table(cliente01);
console.table(cliente02);
console.table(cliente03);
console.table(cliente04);
console.table(cliente05);
console.table(cliente06);
console.table(cliente07);
console.table(cliente08);
console.table(cliente09);
console.table(cliente10);

