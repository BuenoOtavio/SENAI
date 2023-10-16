#include <stdio.h>
#include <locale.h>
#include <string.h>

int main()
{
  setlocale(LC_ALL,"Portuguese");
  FILE *arquivo;
  char result[20];
  
  arquivo = fopen("entrada.csv", "r");
  if(arquivo == NULL)
  printf("Erro!! Não foi possível abrir o arquivo!!\n");
  else{
  	while((fgets(result, 20, arquivo)) != NULL)
  	printf("%s", result);
  }
  fclose(arquivo);
  return 0;
}
