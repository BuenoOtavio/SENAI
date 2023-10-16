const triangulo = {
    angulos : [2, 3, 3],


    calc: function(){
        let num = 0;
        for(let i = 0; i < 3; i++){
            for(let j = i+1; j < 3; j++){
                if(this.angulos[i] != this.angulos[j])
                 num++;
            }
        }
        return num;
    },
    classificacao : function(){
        if(this.calc() == 0){
            tipo = 'Equilátero';
        }
        else if(this.calc() == 2){
            tipo = 'Isóceles';
        }
        else{
            tipo = 'Escaleno';
        }
        return tipo;
    },
    showHTML : function(){
        let str = `<label>Lado 1: </label><label>${this.angulos[0]}</label>`;
        str += `<label>Lado 2: </label><label>${this.angulos[1]}</label>`;
        str += `<label>Lado 3: </label><label>${this.angulos[2]}</label>`;
        str += `<label>Classificação: </label><label>${this.classificacao()}</label>`;
        return str;
    }

}

const triangulo2 = {
    angulos : [3, 3, 3],


    calc: function(){
        let num = 0;
        for(let i = 0; i < 3; i++){
            for(let j = i+1; j < 3; j++){
                if(this.angulos[i] != this.angulos[j])
                 num++;
            }
        }
        return num;
    },
    classificacao : function(){
        if(this.calc() == 0){
            tipo = 'Equilátero';
        }
        else if(this.calc() == 2){
            tipo = 'Isóceles';
        }
        else{
            tipo = 'Escaleno';
        }
        return tipo;
    },
    showHTML : function(){
        let str = `<label>Lado 1: </label><label>${this.angulos[0]}</label>`;
        str += `<label>Lado 2: </label><label>${this.angulos[1]}</label>`;
        str += `<label>Lado 3: </label><label>${this.angulos[2]}</label>`;
        str += `<label>Classificação: </label><label>${this.classificacao()}</label>`;
        return str;
    }

}

const triangulo3 = {
    angulos : [2, 4, 3],


    calc: function(){
        let num = 0;
        for(let i = 0; i < 3; i++){
            for(let j = i+1; j < 3; j++){
                if(this.angulos[i] != this.angulos[j])
                 num++;
            }
        }
        return num;
    },
    classificacao : function(){
        if(this.calc() == 0){
            tipo = 'Equilátero';
        }
        else if(this.calc() == 2){
            tipo = 'Isóceles';
        }
        else{
            tipo = 'Escaleno';
        }
        return tipo;
    },
    showHTML : function(){
        let str = `<label>Lado 1: </label><label>${this.angulos[0]}</label>`;
        str += `<label>Lado 2: </label><label>${this.angulos[1]}</label>`;
        str += `<label>Lado 3: </label><label>${this.angulos[2]}</label>`;
        str += `<label>Classificação: </label><label>${this.classificacao()}</label>`;
        return str;
    }

}

console.log(triangulo);
console.log('Classficação: ' + triangulo.classificacao());
console.log(triangulo2);
console.log('Classficação: ' + triangulo2.classificacao());
console.log(triangulo3);
console.log('Classficação: ' + triangulo3.classificacao());
const main = document.getElementById('triangulos');
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div.innerHTML = triangulo.showHTML();
div2.innerHTML = triangulo2.showHTML();
div3.innerHTML = triangulo3.showHTML();
main.appendChild(div);
main.appendChild(div2);
main.appendChild(div3);