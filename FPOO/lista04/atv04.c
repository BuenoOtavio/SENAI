#include<stdio.h>
#include<locale.h>

int main(){
  setlocale(LC_ALL, "Portuguese");
  char nomes[5][20], reposStr[20];
  float precos[5], repos;
  int  i, j, cont = 1;
  
  printf("\n Exercício 04: \n");
  
  while(cont == 1){
  
  for(i = 0; i < 5; i++){
	    precos[i] *= 0;
	}
	
  
  for( i = 0; i < 5; i++){
		printf("\n\n Digite o nome do %io produto: \n ", i+1);
		scanf("%s", nomes[i]);
		printf(" \n");		
		printf("\n Digite o preço do(a) %s: \n ", nomes[i]);
		scanf("%f", &precos[i]);
		printf(" \n");		
	}

  for(i = 0; i < 5; i++){
  	for(j = i+1; j<5; j++){
  		if(precos[i] > precos[j]){
  			repos = precos[i];
  			precos[i] = precos[j];
  			precos[j] = repos;
  			strcpy(reposStr, nomes[i]);
  			strcpy(nomes[i], nomes[j]);
  			strcpy(nomes[j], reposStr);
		}
	  }
	}
	
	printf("\n Resultado Preços: \n\n");
	printf(" Mais caro: %s, R$%.2f \n\n", nomes[4], precos[4]);
	printf(" Mais barato: %s, R$%.2f\n\n ", nomes[0], precos[0]);
	
	printf("Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);
}
	return 0;
}
