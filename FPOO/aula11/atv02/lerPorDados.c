#include <stdio.h>
#include <locale.h>

int main()
{
  setlocale(LC_ALL,"Portuguese");
  FILE *arquivo;
  FILE *resultado;
  char result[20];
  int dados[10] = {0}, i, soma = 0;
  float media;
  
  arquivo = fopen("Dados.txt", "r");
  resultado = fopen("resultado.txt", "w");
  
  if(arquivo == NULL)
  printf("Erro!! Não foi possível abrir o arquivo!!\n");
  
  else{
    while((fgets(result, 80, arquivo)) != NULL){
	
     dados[0] = atoi(strtok(result, " "));
     soma += dados[0];
     for(i = 1; i<10; i++){
     	dados[i] = atoi(strtok(NULL, " "));
     	soma += dados[i];
	 }
	 media = soma/10.00;
	 
	 printf("%.1f", media);
	 }
	 
	 fprintf(resultado," média dos valores: %.1f", media);
	 fclose(arquivo);
	 fclose(resultado);
 return 0;
  } 
}
