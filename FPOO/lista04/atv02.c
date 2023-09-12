#include<stdio.h>
#include<locale.h>

int main(){
   setlocale(LC_ALL, "Portuguese");
   char times[5][20], reposStr[20];
   int pontos[5] = {0}, vitorias[5], empates[5], i, j, repos, cont = 1;
   
   printf("\n Exercício 02: \n");
   
  while(cont == 1){

  	for(i = 0; i < 5; i++){
	    pontos[i] *= 0;
	    vitorias[i] *= 0;
	    empates[i] *= 0;
	}
	
  for( i = 0; i < 5; i++){
		printf("\n Digite o nome do %iº Time: \n ", i+1);
		scanf("%s", &times[i]);
		printf(" \n");
		printf("\n Digite o numero de vitórias do %s: \n ", times[i]);
		scanf("%i", &vitorias[i]);
		printf(" \n");
		printf("\n Digite o numero de empates do %s: \n ", times[i]);
		scanf("%i", &empates[i]);
		printf(" \n");		
	}
	
   for( i = 0; i < 5; i++){
	    vitorias[i] *= 3;
	    pontos[i] += vitorias[i];
	    pontos[i] += empates[i];
   }
  for(i = 0; i < 5; i++){
  	for(j = i+1; j<5; j++){
  		if(pontos[i] > pontos[j]){
  			repos = pontos[i];
  			pontos[i] = pontos[j];
  			pontos[j] = repos;
  			strcpy(reposStr, times[i]);
  			strcpy(times[i], times[j]);
  			strcpy(times[j], reposStr);
		}
	  }
	}
	
	printf("\n Resultado Brasileirão: \n\n");
    for(i = 4; i > -1; i--){
    	printf(" Time: %s - Pontos: %i \n\n", times[i], pontos[i]);
	}
	
	printf(" Deseja recomeçar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
    }
    
    return 0;
}
