#include <stdio.h>
#include <locale.h>

int main(){
  setlocale(LC_ALL,"Portuguese");
  FILE *arquivo;
  char result[20];
  char c;
  
  arquivo = fopen("arquivo.txt", "r");
  if(arquivo == NULL)
  printf("Erro!! N�o foi poss�vel abrir o arquivo!!\n");
  else{
  	while((fgets(result, 20, arquivo)) != NULL)
  	printf("%s", result);
  }
  fclose(arquivo);
  return 0;
}
