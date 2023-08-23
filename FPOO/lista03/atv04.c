#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int numero1, numero2, cont = 1;
	
	printf(" Exercício 04: \n");
	
	while(cont == 1){ 
	numero1 *= 0;
	numero2 *= 0;
	printf ("\n Digite 2 valores inteiros DIFERENTES: \n ");
	scanf("%i %i", &numero1, &numero2);
	printf("\n");
	
	if(numero1 == numero2){
		while(numero1 == numero2){
			printf("Você digitou dois numeros IGUAIS! digite novamente dois numeros DIFERENTES: \n ");
			scanf("%i %i", &numero1, &numero2);
			printf("\n");
		}
	}
	
	if(numero1 > numero2){
		printf(" Sequência de %i a %i: \n\n", numero1, numero2);
		while(numero1 >= numero2){
			printf(" %i \n\n", numero1);
			numero1--;
		}
	}
    else if(numero2 > numero1){
		printf(" Sequência de %i a %i: \n\n", numero2, numero1);
		while(numero2 >= numero1){
			printf(" %i \n\n", numero2);
			numero2--;
		}
     }
    printf("\n Deseja continuar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
	
	}	
	return 0;
}
