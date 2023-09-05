#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int numero, i;
	printf(" Exercício 04: \n\n ");
	printf("Digite o numero de pecas diferente que você comprou: \n ");
	scanf("%i", &numero);
	printf(" \n ");
	
	float precos[numero], precoFinal[numero], porcent;
	char nomes[numero][20];
	  for (i = 0; i < numero; i++){
	  	printf("Digite o nome da %ia peca: \n ", i+1);
	  	scanf("%s", nomes[i]);
	  	printf(" \n ");
	  	printf("Digite o preco da %ia peca: \n ", i+1);
	  	scanf("%f", &precos[i]);
	  	printf(" \n ");
	  }
	  
	  printf("Digite a porcentagem(%%) de lucro esperada:\n ");
	  scanf("%f", &porcent);
	  
	  printf("\n\n Tabela de Preços: \n\n ");
	  
	  for(i = 0; i < numero; i++){
	  	precoFinal[i] = (precos[i] + ((precos[i] * porcent)/100.00));
	  	printf("Peca: %s; Preço: R$%.2f\n\n ", nomes[i], precoFinal[i]);
	  }
	  
	  return 0;
}
