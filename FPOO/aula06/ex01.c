#include <stdio.h>
int main(){
	int cont = 1;
	
	int linha = 1;
	
	int cont2 = 0;
	
	printf("Contador de numeros impares: \n");
	
	while(cont <= 100){
	
	printf("\nlinha %i : %i \n\n", linha, cont);
	
	cont = cont + 2;
	linha++;
	}
	
	printf("Contador de numeros pares: \n");
	
	while(cont2 <= 100){
	
	printf("\nlinha %i : %i \n\n", linha, cont2);
	
	cont2 = cont2 + 2;
	linha++;
	}
	
	return 0;
}
