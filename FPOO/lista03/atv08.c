#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese"); 
    int numero, multi, result, valor, zero = 0, cont = 1;
	printf(" Exercício 08: \n\n ");
	
	while(cont == 1){
		multi *= 0;
		valor *= 0;
	printf("\n Digite um numero inteiro: \n ");
	scanf("%i", &numero);
	multi = 1;
	if(numero == zero){
		while(numero == zero){
			printf("\n Voce digitou 0! Digite outro valor que atenda as condições: \n ");
			scanf("%i", &numero);
			printf("\n");
		}
	}
	
	valor = numero;	
	printf("\n Fatorial de %i: \n\n", numero);
    while(multi < numero){
		result = valor * multi;
		printf(" %i x %i = %i \n\n", valor, multi, result);
		valor *= multi;
		multi++;
	}
    printf("\n Deseja continuar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);	
}
	return 0;
}
