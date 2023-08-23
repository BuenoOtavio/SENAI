#include<stdio.h>
#include<locale.h>

int main(){
  setlocale(LC_ALL, "Portuguese");
  int valores[10], repos;
  int i, j, cont = 1;

    printf(" Exercício 10: \n\n ");
    
    while(cont==1){ 
    
    for( i = 0; i < 10; i++){
		valores[i] *= 0;			
	}
	 
    printf("\n Digite 10 valores inteiros: \n ");
    scanf("%i %i %i %i %i %i %i %i %i %i", &valores[0], &valores[1], &valores[2], &valores[3], &valores[4], &valores[5], &valores[6], &valores[7], &valores[8], &valores[9]);

    for( i = 0; i < 10; i++){
        for( j = i+1; j < 10; j++){
            if(valores[i] > valores[j]){
                repos = valores[i];
                valores[i] = valores[j];
                valores[j] = repos;
            }
        }
    } 
   
    printf("\n O maior número é %d \n", valores[9]);
    printf("\n Deseja continuar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
  } 
}
