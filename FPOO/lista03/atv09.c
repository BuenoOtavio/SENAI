#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
    int numero, multi, result, zero = 0, cont = 1;
	printf(" Exerc�cio 08: \n\n ");
	
	while(cont == 1){
		result *= 0;
		numero *= 0;
		multi *= 0;
	printf("\n Digite um numero inteiro: \n ");
	scanf("%i", &numero);
	multi = 1;
	if(numero == zero){
		while(numero == zero){
			printf("\n O numero 0 n�o esta dispon�vel! Digite outro valor que atenda as condi��es: \n ");
			scanf("%i", &numero);
			printf("\n");
		}
	}
	
	printf("\n Tabuada do %i: \n\n", numero);
    while(multi <= 10){
		result = numero * multi;
		printf(" %i x %i = %i \n\n", numero, multi, result);
		multi++;
	}
	printf("\n Deseja continuar? sim(1) ou n�o(2) \n ");
	scanf("%i", &cont);	
}
	return 0;
}
