#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int vetor[6], i, j, repos, cont = 1;
	
	printf("\n Exercício 08: \n");
	
	while(cont == 1){
		
	for(i = 0; i < 6; i++){
		vetor[i] *= 0;
	}
		
	for(i = 0; i < 6; i++){
     	printf("\n Digite o %io valor do vetor: \n ", i+1);
	    scanf("%i", &vetor[i]);
	}
	
	for(i = 5; i > -1; i--){
		for(j = 5; j > -1; j--){
  		if(i < j){
  			repos = vetor[i];
  			vetor[i] = vetor[j];
  			vetor[j] = repos;
		}
	  }
	}
	
	
	printf("\n Ordem do vetor no inverso: \n");
	
	for(i = 0; i < 6; i++){
		printf("\n %i \n", vetor[i]);
	}
	
	printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);
	}
}
