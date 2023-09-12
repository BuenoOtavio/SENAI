#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int vetor1[5], vetor2[5], results[5] = {0}, i, j, repos, cont = 1;
	
	printf("\n Exercício 08: \n");
	
	while(cont == 1){
		
	for(i = 0; i < 5; i++){
		vetor1[i] *= 0;
		vetor2[i] *= 0;
		results[i] *= 0;
	}
		
	for(i = 0; i < 5; i++){
     	printf("\n Digite o %io valor do vetor1: \n ", i+1);
	    scanf("%i", &vetor1[i]);
	}
	
	printf("\n ");
	
	for(i = 0; i < 5; i++){
		printf("\n Digite o %io valor do vetor2: \n ", i+1);
		scanf("%i", &vetor2[i]);
	}
	
	for(i = 4; i > -1; i--){
		for(j = 4; j > -1; j--){
  		if(i < j){
  			repos = vetor2[i];
  			vetor2[i] = vetor2[j];
  			vetor2[j] = repos;
		}
	  }
	}
	
	
	printf("\n Soma dos vetor1 com o inverso do vetor2: \n");
	
	for(i = 0; i < 5; i++){
		printf("\n %i + %i = %i \n", vetor1[i], vetor2[i], vetor1[i] + vetor2[i]);
	}
	
	printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);
	}
}
