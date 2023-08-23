#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	
	printf(" Exercício 02: \n\n");	
	
	int numero, cont = 1;
	
	while(cont == 1){
		printf("\n Sequência de 200 a 10: \n\n");
		
		for(numero = 200; numero >= 10; numero--){
		printf(" %i \n\n", numero);
	  }
	  
	printf("\n Deseja refazer a sequência? sim(1) ou não(2) \n ");
	scanf("%i", &cont); 
}
	
		
	
	return 0;
}
