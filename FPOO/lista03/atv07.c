#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int numero = 0, soma = 1, result, cont = 1;
	printf(" Exercício 07: \n\n ");
	
	while(cont == 1){
		soma*=0;
		numero *= 0;
	printf("\n Sequência de soma dos valores inteiros de 0 a 100 \n\n");
	while(soma <= 100){
	   result = numero + soma;
	   printf(" %i + %i = %i \n\n",numero, soma,result);
	   numero+=soma;
	   soma++;
	}
	printf("\n Deseja refazer a sequência? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
}
	return 0;
}

