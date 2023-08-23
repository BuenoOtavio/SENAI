#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
  setlocale(LC_ALL, "Portuguese");
  char times[5][20], reposStr[20];
  int pontos [5], i, j, repos;
  
  for( i = 0; i < 5; i++){
		printf("\n Digite o nome do %iº Time: \n", i+1);
		scanf("%s", &times[i]);
		printf(" \n");		
	}
  for( i = 0; i < 5; i++){
		printf("\n Digite a quantidade de pontos do %s: \n", times[i]);
		scanf("%i", &pontos[i]);
		printf(" \n");		
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
	printf(" Campeão: %s, com %i pontos \n\n", times[4], pontos[4]);
	printf(" Rebaixado: %s, com %i pontos", times[0], pontos[0]);
	
	return 0;
}
