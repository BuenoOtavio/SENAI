#include <stdio.h>

int main(){
    int valor1, valor2, valor3, valor4, valor5, valor6;

    printf("Exercicio 6: \n");
    printf(" \n");
    printf("Digite o 1o valor: \n");
    scanf("%i", &valor1);
    printf(" \n");
    printf("Digite o 2o valor: \n");
    scanf("%i", &valor2);
    printf(" \n");
    printf("Digite o 3o valor: \n");
    scanf("%i", &valor3);
    printf(" \n");
    printf("Digite o 4o valor: \n");
    scanf("%i", &valor4);
    printf(" \n");
    printf("Digite o 5o valor: \n");
    scanf("%i", &valor5);
    printf(" \n");
    printf("Digite o 6o valor: \n");
    scanf("%i", &valor6);
    printf(" \n");

    if(valor1 > valor2 && valor1 > valor3 && valor1 > valor4 && valor1 > valor5 && valor1 > valor6){
        printf("%i e o maior valor de todos os digitados \n", valor1);
        printf(" \n");
    }

     if(valor2 > valor1 && valor2 > valor3 && valor2 > valor4 && valor2 > valor5 && valor2 > valor6){
        printf("%i e o maior valor de todos os digitados \n", valor2);
        printf(" \n");
    }

     if(valor3 > valor2 && valor3 > valor1 && valor3 > valor4 && valor3 > valor5 && valor3 > valor6){
        printf("%i e o maior valor de todos os digitados \n", valor3);
        printf(" \n");
    }

     if(valor4 > valor2 && valor4 > valor3 && valor4 > valor1 && valor4 > valor5 && valor4 > valor6){
        printf("%i e o maior valor de todos os digitados \n", valor4);
        printf(" \n");
    }

     if(valor5 > valor2 && valor5 > valor3 && valor5 > valor4 && valor5 > valor1 && valor5 > valor6){
        printf("%i e o maior valor de todos os digitados \n", valor5);
        printf(" \n");
    }

     if(valor6 > valor2 && valor6 > valor3 && valor6 > valor4 && valor6 > valor5 && valor6 > valor1){
        printf("%i e o maior valor de todos os digitados \n", valor6);
        printf(" \n");
    }

    return 0;
}