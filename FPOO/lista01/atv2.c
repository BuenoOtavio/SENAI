#include <stdio.h>

int main()
{
  int velocidade;
  int distancia;
  
  printf("Exercicio 2: \n");
  printf(" \n");
  printf("Digite a sua velocidade (km/h): \n");
  scanf("%d", &velocidade);
  printf(" \n");
  printf("Digite a sua distancia (km): \n");
  scanf("%d", &distancia);
  printf(" \n");
  printf("Resultado: \n");
  printf(" \n");
  int calc = distancia/velocidade;
  printf("Voce ira demorar %d hora(s) para chegar ao seu destino!! \n",calc);
  return 0;
}
