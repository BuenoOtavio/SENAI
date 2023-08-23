#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int numero, cont = 1;
	
	printf(" Exercício 06: \n\n");
	while(cont == 1){
		numero *= 0;
	printf("\n Digite um numero: \n ");
	scanf("%i", &numero);
	printf(" \n");
	
	if(numero % 2 == 0){
		printf(" Sequência de numeros ÍMPARES entre %i a 0: \n\n", numero);
		numero--;
	    for(; numero >= 1; numero -= 2){
	    	printf(" %i \n", numero);
		}
	}
	else if(numero % 2 == 1){
		
		printf(" Sequência de numeros ÍMPARES entre %i a 0: \n\n", numero);
	    for(; numero >= 1; numero -=2){
	    	printf(" %i \n\n", numero);
		}
	}
	printf("\n Deseja continuar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
}
	
	return 0;
}
