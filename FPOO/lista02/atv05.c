#include <stdio.h>

int main(){
    float valor, preco, aumento;
    char mercadoria[100];

    printf("Exercicio 5: \n");
    printf(" \n");
    printf("Digite o nome da mercadoria: \n");
    scanf("%s", mercadoria);
    printf(" \n");
    printf("Digite o preco da mercadoria: \n");
    scanf("%f", &valor);
    printf(" \n");

    if(valor < 1000){
        aumento = valor * 0.05;

        preco = valor + aumento;

        printf("%s comecara a valer R$ %.2f com o aumento de 5%%", mercadoria, preco);
    }

    if(valor >= 1000){
        aumento = valor * 0.07;

        preco = valor + aumento;

        printf("%s comecara a valer R$ %.2f com o aumento de 7%%", mercadoria, preco);
    }

    return 0;
}