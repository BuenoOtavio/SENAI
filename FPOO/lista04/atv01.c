#include<stdio.h>
#include<locale.h>


int main(){
	setlocale(LC_ALL, "Portuguese");
	char nome[5][10];
	float salarios[5], porcent;
	int i, cont = 1;
	
	printf("\n Exerc�cio 01:\n\n ");
	
	while(cont == 1){		
	porcent *= 0;
	
	for(i = 0; i < 5; i++){
	    salarios[i] *= 0;
	}
	
	for(i = 0; i < 5; i++){
		printf("\n Digite o nome da %ia pessoa: \n ", i+1);
		scanf("%s", nome[i]);
		printf("\n ");
		printf("Digite o sal�rio da %ia pessoa: \n ", i+1);
		scanf("%f", &salarios[i]);
	}
	
	printf("\n Digite a porcentagem(%%) do reajuste salarial: \n ");
	scanf("%f", &porcent);
	porcent /= 100.00;
	
	printf("\n Reajuste de Sal�rios: \n\n ");
	for(i = 0; i < 5; i++){
		salarios[i] += (salarios[i] * porcent);
	}
	
	for(i = 0; i < 5; i++){
	    printf("Nome: %s => Sal�rio novo: $%.2f \n\n ",nome[i], salarios[i]);	
	}
	
	printf("Deseja recome�ar? sim(1) ou n�o(2) \n ");
	scanf("%i", &cont);
  }
	return 0;
}
