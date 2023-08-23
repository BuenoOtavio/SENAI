#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[30];
	float notas[5], media;
	int i , cont = 1;
	
	while(cont == 1){
	
	for( i = 0; i < 5; i++){
			notas[i] *= 0;			
	}
	
	printf("\n Digite o seu nome: \n  ");
	scanf("%s", nome);
	printf("\n Digite as suas 5 notas de 0 a 10: \n ");
	scanf("%f %f %f %f %f", &notas[0], &notas[1], &notas[2], &notas[3], &notas[4]);
	printf(" \n");	
	
	for( i = 0; i < 5; i++){
			while(notas[i] > 10 || notas[i] < 0){ 
			printf("Você digitou uma nota errada, digite novamente: \n ");
		    scanf("%f %f %f %f %f", &notas[0], &notas[1], &notas[2], &notas[3], &notas[4]);
		    printf(" \n");
	    	}			
	}
	
	media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/5.0;
	
	printf(" %s, a sua média é %.1f \n\n", nome, media);
	printf(" Deseja continuar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
  
  }	
	return 0;
}
