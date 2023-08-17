#include <stdio.h>

int main(){
    int a,b;

    printf("Exercicio 8: \n");
    printf(" \n");
    printf("Digite o valor A: \n");
    scanf("%i", &a);
    printf(" \n");
    printf("Digite o valor B: \n");
    scanf("%i", &b);
    printf(" \n");

    if(a > b){
        printf("%i(A) e maior que %i(B)", a, b);
    }

    else if(b > a){
        printf("%i(B) e maior que %i(A)", b, a);
    }

    else if(a == b){
        printf("%i(a) e %i(b) sao iguais", a, b);
    }

    return 0;
}
