#include <stdio.h>

int main(){
    int filhos, salarioFilhos;
    float salario , salarioFinal;

    printf("Exercicio 2: \n");
    printf(" \n");
    printf("Digite o seu salario: \n");
    scanf("%f",&salario);
    printf(" \n");
    printf("Digite quantos filhos voce: \n");
    scanf("%i",&filhos);
    printf(" \n");

    if(salario <= 2000 && filhos >= 1){
       
       salarioFilhos = filhos * 45;

       salarioFinal = salario + salarioFilhos;

       printf("Como o seu salario e menor ou igual a R$2000 e voce tem filhos, voce ganhara um salario familia de %i, oque resultara em um salario final de R$ %.1f",salarioFilhos,salarioFinal);
    }

    else if(salario <= 2000 && filhos == 0){
        printf("Voce ate teria direito a um salario familia, mas como nao tem filhos, entao o seu salario continuara sendo R$ %.2f", salario);
    }

    else{
        printf("Como o seu salario e maior R$2000 voce nao tera um salario familia, sendo assim, o seu salario continuara sendo R$ %.2f", salario);
    }

    return 0;
}
