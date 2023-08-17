#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	char nome[30], sobrenome[30];
	int sis1, sis2, sis3, sis4, sis5, dia1, dia2, dia3, dia4, dia5;
	float mediaSIS, mediaDIA;
	
	printf("Medição de pressão: \n\n");
	printf("Digite o seu nome e apenas um dos seus sobrenomes: \n");
	scanf("%s %s", &nome, &sobrenome);
    printf(" \n");
	printf("Digite os 5 valores da sua medição de pressão SIS:\n");
	scanf("%i %i %i %i %i", &sis1, &sis2, &sis3, &sis4, &sis5);
	printf(" \n");	
	printf("Digite os 5 valores da sua medição de pressão DIA:\n");
	scanf("%i %i %i %i %i", &dia1, &dia2, &dia3, &dia4, &dia5);
	printf(" \n");
	
	strcat(nome," ");
	strcat(nome,sobrenome);
	
	mediaSIS = (sis1 + sis2 + sis3 + sis4 + sis5)/5.00;
	
    mediaDIA = (dia1 + dia2 + dia3 + dia4 + dia5)/5.00;
    
    printf("%s, a média das suas medições de pressão é igual a: \n\n", nome);
    printf("SIS: %.2f \n\n", mediaSIS);
	printf("DIA: %.2f \n\n", mediaDIA);
	
	return 0 ;
}
