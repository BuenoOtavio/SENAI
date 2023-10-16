class imc {
    constructor(nome, peso, altura){
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;
    }
    imc(){
        return this.peso/(this.altura * this.altura);
    }
    diagnosticar(){
        if(this.imc() < 18.5){
            diagnostico = 'Baixo Peso';
        }
        else if(this.imc() >= 18.5 && this.imc() <= 24.9){
            diagnostico = 'Peso Normal';
        }
        else if(this.imc() >= 25.0 && this.imc() <= 29.9){
            diagnostico = 'Sobrepeso';
        }
        else if(this.imc() >= 30.0 && this.imc() <= 34.9){
            diagnostico = 'Obesidade Grau I';
        }
        else if(this.imc() >= 35.0 && this.imc() <= 39.9){
            diagnostico = 'Obesidade Grau II';
        }
        else if(this.imc() >= 40.0){
            diagnostico = 'Obesidade Grau III';
        }
    }
    toCard(){
        
    }
}