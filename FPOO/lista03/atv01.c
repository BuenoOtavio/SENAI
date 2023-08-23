#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	int numero, cont = 1;
	
	printf(" Exercício 01: \n\n");
	
	while(cont == 1){
	
	
	printf("\n Sequência de 10 a 200: \n\n");
	
	for(numero = 10; numero <= 200; numero++){
		printf(" %i \n\n", numero);
	  }	
	  
	printf("\n Deseja refazer a sequência? sim(1) ou não(2) \n ");
	scanf("%i", &cont); 
	}	
	
	return 0;
}
