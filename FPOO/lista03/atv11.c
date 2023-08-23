#include<stdio.h>
#include<locale.h>

int main(){
  setlocale(LC_ALL, "Portuguese");
  int valores[5], repos;
  int i, j, cont = 1;

    printf(" Exercício 11: \n ");
    
    while(cont == 1){ 
    
    for( i = 0; i < 5; i++){
		valores[i] *= 0;			
	}
	 
    printf("\n Digite 5 valores inteiros: \n ");
    scanf("%i %i %i %i %i", &valores[0], &valores[1], &valores[2], &valores[3], &valores[4]);

    for( i = 0; i < 5; i++){
        for( j = i+1; j < 5; j++){
            if(valores[i] > valores[j]){
                repos = valores[i];
                valores[i] = valores[j];
                valores[j] = repos;
            }
        }
    } 
   
    printf("\n Ordem crescente dos numeros: \n\n");
    printf(" %i\n", valores[0]);
    printf(" %i\n", valores[1]);
    printf(" %i\n", valores[2]);
    printf(" %i\n", valores[3]);
    printf(" %i\n", valores[4]);
    printf("\n Deseja continuar? sim(1) ou não(2) \n ");
	scanf("%i", &cont);
  } 
}
