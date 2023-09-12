#include<stdio.h>
#include<locale.h>
#include <stdlib.h>
#include <time.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int vetor[10], valor, posicao, i, cont = 1;
	
	srand(time(NULL));
	
	printf("\n Exercício 11: \n");
	
	while(cont == 1){
	
	for(i = 0; i < 10; i++){
		vetor[i] *= 0;
		valor *= 0;
		posicao *= 0;
	}
	
	printf(" \n");
	
	for(i = 0; i < 10; i++) {
        vetor[i] = rand() % 101; 
        printf(" %i ", vetor[i]);
    }
    
    printf("\n\n Digite o valor procurado: \n ");
    scanf("%i", &valor);
    
    for(i = 0; i < 10; i++){
    	if(vetor[i] == valor){
    		posicao = i;
		}
	}
	
	if(vetor[posicao] == valor){
		printf("\n O valor foi encontrado na %ia posição! ", posicao+1);
	}
	else{
	
	    printf("\n O valor não foi encontrado! \n ");
   }
   
    printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);
  }
	return 0;
}
