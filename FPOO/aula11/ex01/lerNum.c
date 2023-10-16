#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
  setlocale(LC_ALL,"Portuguese");
  FILE *arquivo;
  char result[80];
  char *nome;
  int n1, n2, n3;
  char status[15];
  float media;
  
  arquivo = fopen("arquivo.txt", "r");
  
  if(arquivo == NULL)
  printf("Erro!! Não foi possível abrir o arquivo!!\n");
  
  else{  	
  	while((fgets(result, 80, arquivo)) != NULL){	  
	nome = strtok(result," ");
	n1 = atoi(strtok(NULL, " "));
    n2 = atoi(strtok(NULL, " "));
    n3 = atoi(strtok(NULL, " "));
    media = (n1 + n2 +n3)/3.00; 
    
  	if(media >= 6 ){
  		strcpy(status, "Aprovado!!");
	  }
	  else{
	  	strcpy(status, "Reprovado!!");
	  }
	  
	  
     printf("nome: %s - média: %.2f - status: %s \n", nome, media, status);
	 } 	
  	}
  	
  fclose(arquivo);
  return 0;
}
