#include <stdio.h>
#include <locale.h>

int main()
{
  setlocale(LC_ALL,"Portuguese");
  FILE *arquivo;
  char result[80];
  int dados[10] = {0}, i, soma = 0;
  
  arquivo = fopen("Dados.txt", "r");
  
  if(arquivo == NULL)
  printf("Erro!! N�o foi poss�vel abrir o arquivo!!\n");
  
  else{
    while((fgets(result, 80, arquivo)) != NULL){
	
     dados[0] = atoi(strtok(result, " "));
     soma += dados[0];
     for(i = 1; i<10; i++){
     	dados[i] = atoi(strtok(NULL, " "));
     	soma += dados[i];
	 }
	 printf("Valores: %d ", dados[0]);
	 for(i = 1; i < 10 ; i++){
	 	printf("- %d ", dados[i]);
	 }
	 
	 printf("|| Soma Valores: %d", soma);
	 }
	 
 }
 return 0;
}
