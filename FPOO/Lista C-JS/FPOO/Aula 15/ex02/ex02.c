#include <stdio.h>
#include <locale.h>
#include <string.h>

int main()
{
  setlocale(LC_ALL, "Portuguese");
  FILE *arquivo;
  FILE *arquivo2;
  char result[50], colunas[5][50];
  char nome[50];
  int id[4], ano[4], anoAtual = 2023, mes[4], dia[4], i = 0, idade[4] = {0};

  arquivo = fopen("entrada.csv", "r");
  arquivo2 = fopen("saida.csv", "w");
  if (arquivo == NULL)
    printf("Erro!! Não foi possível abrir o arquivo!!\n");
  else {

    fgets(result, 49, arquivo);
    strcpy(colunas[0],strtok(result, ";"));
    strcpy(colunas[1],strtok(NULL, ";"));
    strcpy(colunas[2],strtok(NULL, "\n"));
    strcat(colunas[3], "idade");
    fprintf(arquivo2, "%s; %s; %s; %s:\n", colunas[0], colunas[1], colunas[2], colunas[3]);
    while ((fgets(result, 50, arquivo)) != NULL) {
      id[i] = atoi(strtok(result, ";"));
      strcpy(nome, strtok(NULL, ";"));
      ano[i] = atoi(strtok(NULL, "-"));
      mes[i] = atoi(strtok(NULL, "-"));
      dia[i] = atoi(strtok(NULL, " "));
      idade[i] = anoAtual - ano[i];
      fprintf(arquivo2, "%d; %s; %d-%d-%d; %d anos\n", id[i], nome, ano[i], mes[i], dia[i], idade[i]);
      i++;
    }
  }
  fclose(arquivo);
  fclose(arquivo2);
  return 0;
}


