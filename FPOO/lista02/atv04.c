#include <stdio.h>

int main(){
    int a,b,c;

    printf("Exercicio 4 : \n");
    printf(" \n");
    printf("Digite o lado A do triangulo: \n");
    scanf("%i", &a);
    printf(" \n");
    printf("Digite o lado B do triangulo: \n");
    scanf("%i", &b);
    printf(" \n");
    printf("Digite o lado C do triangulo: \n");
    scanf("%i", &c);
    printf(" \n");

    if (a == b && b ==c){
        printf("O triangulo e EQUILATERO! \n");
    }

    else if (a != b && b != c && a != c){
        printf("O triangulo e ESCALENO! \n");
    }

    else if (a == b && b != c){
        printf("O triangulo e ISOCELES! \n");
    }

    else if (a != b && b == c){
        printf("O triangulo e ISOCELES! \n");
    }

    else if (a == c && b != c){
        printf("O triangulo e ISOCELES! \n");
    }

    return 0;
}
