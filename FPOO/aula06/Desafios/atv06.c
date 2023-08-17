#include <stdio.h>

int main(){
	int valor;

     printf("Exercicio 6: \n");
     printf(" \n");
     printf("Digite um valor: \n");
     scanf("%i", &valor);
     
     while(valor != 14){
     	valor = valor * 0;
     	printf("\nDigite outro valor, quem sabe.... o 14?? \n");
     	scanf("%i",  &valor);
	 }
	 if(valor == 14){
	 	printf("\nAEEEEEEE voce digitou 14!!, parabens!!");
	 }
	
	return 0;
}
