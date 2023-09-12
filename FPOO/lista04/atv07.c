#include<stdio.h>
#include<locale.h>
int main(){
  setlocale(LC_ALL, "Portuguese");
  int valores[5], i, j, repos, cont = 1;
  
  printf("\n Exercício 07: \n");
  
  while(cont == 1){
  
  	for(i = 0; i < 5; i++){
  		valores[i] *= 0;
	  }
  
  for( i = 0; i < 5; i++){
		printf("\n Digite o %io valor: \n ", i+1);
		scanf("%i", &valores[i]);
		printf(" \n ");		
	}
  for(i = 0; i < 5; i++){
  	for(j = i+1; j<5; j++){
  		if(valores[i] > valores[j]){
  			repos = valores[i];
  			valores[i] = valores[j];
  			valores[j] = repos;
		}
	  }
	}
	
	printf("Valores em ordem decrescente: \n");
	
	for(i = 4; i > -1; i--){
		printf("\n %i \n", valores[i]);
	}
	
	printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);
}
	return 0;
}
