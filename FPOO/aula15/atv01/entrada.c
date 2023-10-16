#include <stdio.h>
#include <locale.h>

int main()
{
  setlocale(LC_ALL,"Portuguese");
  FILE *arquivo;
  char result[40];
  
  arquivo = fopen("entrada.csv", "r+");
  
  if(arquivo == NULL)
  printf("Erro!! Não foi possível abrir o arquivo!!\n");
  
   else{
    while((fgets(result, 80, arquivo)) != NULL){
    	printf("\n %s ", &result);
    }
    printf("\n");
    fprintf(arquivo,"\n");
    fprintf(arquivo,"5;Michael Jackson;1958-08-29");
  } 
  	fclose(arquivo);
  return 0;
}
