#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int nota1, nota2, cont = 1;
	float media;
	
	printf(" Exerc�cio 01: \n ");
	while(cont == 1){
	
	nota1 *= 0;
	nota2 *= 0;
	media *= 0;
	printf("\n Digite a sua 1a nota: \n ");
	scanf("%d", &nota1);
	printf(" \n ");
	printf("Digite a sua 2a nota: \n ");
	scanf("%d", &nota2);
	
	media = (nota1 + nota2)/2.00;
	
	if(media < 6){
		printf("\n A sua m�dia foi %.1f , ou seja, voc� foi REPROVADO! \n", media);
	}
	else if(media >= 6){
		printf(" A sua m�dia foi %.1f , ou seja, voc� foi APROVADO! \n", media);
	}
	printf("\n Deseja continuar o programa? sim(1) ou n�o(2):\n ");
	scanf("%i", &cont);
	}
}
