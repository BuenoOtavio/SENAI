#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int numero;
	int zero = 0, cont = 1;
	printf(" Exerc�cio 03: \n");
	
	while(cont == 1){
	numero *= 0;
	zero *= 0;
	printf("\n\n Digite um numero inteiro MAIOR que 0: \n");
	scanf("%i", &numero);
	printf("\n");
	
	if(numero == zero){
		while(numero == zero){
			printf(" Voce digitou 0! Digite outro valor que atenda as condi��es: \n ");
			scanf("%i", &numero);
			printf("\n");
		}
	}
	
	printf(" Sequ�ncia de 0 a %i: \n\n", numero);
	while(numero >= zero){
		printf(" %i \n\n", zero);
		zero++;
	}
	printf("\n Deseja refazer a sequ�ncia? sim(1) ou n�o(2) \n ");
	scanf("%i", &cont); 
 }
	
	
	return 0;
}
