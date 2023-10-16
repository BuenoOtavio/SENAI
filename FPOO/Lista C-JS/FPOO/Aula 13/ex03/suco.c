#include <stdio.h>
#include <locale.h>
#include <string.h>

int main()
{
  setlocale(LC_ALL, "Portuguese");
  FILE *arquivo;
  FILE *arquivo2;
  int pessoas, frutas;
  float calc;
  char result[20];

  arquivo = fopen("suco.in", "r");
  arquivo2 = fopen("suco.out", "w");
  
  if (arquivo == NULL)
    printf("Erro!! Não foi possível abrir o arquivo!!\n");
  else {
  	while(pessoas != 0  ||  frutas != 0){
    	fgets(result, 20, arquivo);
    	pessoas = atoi(strtok(result, " "));
    	frutas = atoi(strtok(NULL, "\n"));
    	calc = (frutas * 50.00) / pessoas;
    	calc /= 1000.00;
    	if(pessoas != 0  &&  frutas != 0){
         	fprintf(arquivo2, "%.2f \n", calc);
		}
		else{
			fprintf(arquivo2, "Fim do arquivo!");
		}
	  }
    }
    fclose(arquivo);
    fclose(arquivo2);
    return 0;
  }

