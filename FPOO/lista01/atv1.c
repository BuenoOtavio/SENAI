#include <stdio.h>

int main() {
	int a;
	int b;
	int c;
	
	printf("Exercicio 1: \n");
	printf(" \n");
	printf("Digite o primeiro valor: \n");
	scanf("%d",&a);
	printf(" \n");
	printf("Digite o segundo valor: \n");
	scanf("%d",&b);
	printf(" \n");
	printf("Digite o terceiro valor: \n");
	scanf("%d",&c);
	printf(" \n");
	printf("Resultado: \n");
    printf(" \n");
	
	int result = (a + b)/c;
	
	printf("o resultado da equacao '( %d + %d )/ %d' e igual a %d!! \n", a,b,c,result);
	
	return 0;
}
