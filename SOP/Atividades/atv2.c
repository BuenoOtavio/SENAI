#include <stdio.h>

int main()
{
  int velocidade;
  int distancia;
  
  printf("CALCULADOR DE TEMPO: \n");
  printf(" \n");
  printf("Bem vindo ao CALCULADO DE TEMPO! o programa que calcula quanto tempo voce vai demorar em relacao a sua velocidade e distancia!! \n");
  printf(" \n");
  printf("Vamos la! digite a sua velocidade (km/h): \n");
  scanf("%i", &velocidade);
  printf(" \n");
  printf("Agora, digite a sua distancia (km): \n");
  scanf("%i", &distancia);
  printf(" \n");
  printf("Muito bem! Agora vamos calcular:");
  printf(" \n");
  int calc = distancia/velocidade;
  printf("Voce ira demorar %i hora(s) para chegar ao seu destino!",calc);
  return 0;
}

