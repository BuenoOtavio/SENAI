#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	int numero, cont = 1;
	
	printf(" Exerc�cio 01: \n\n");
	
	while(cont == 1){
	
	
	printf("\n Sequ�ncia de 10 a 200: \n\n");
	
	for(numero = 10; numero <= 200; numero++){
		printf(" %i \n\n", numero);
	  }	
	  
	printf("\n Deseja refazer a sequ�ncia? sim(1) ou n�o(2) \n ");
	scanf("%i", &cont); 
	}	
	
	return 0;
}
