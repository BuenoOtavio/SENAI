#include <stdio.h>

int main(){
	int valor;

     printf("Exercicio 7: \n");
     printf(" \n");
     printf("Digite um valor: \n");
     scanf("%i", &valor);
     
     while(valor != 14){
        printf("\nO dobro desse numero e %i!! \n",valor * 2);
     	valor = valor * 0;
     	printf("\nDigite outro valor: \n");
     	scanf("%i",  &valor);
     	
	 }
	 if(valor == 14){
	 	printf("\nAEEEEEEE voce digitou 14!! O dobro deste numero e 28, e agora o programa acabou, byeeee!!");
	 }
	
	return 0;
}
