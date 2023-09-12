#include <stdio.h>
#include <locale.h>

int main(){
  setlocale(LC_ALL, "Portuguese");
  float precos[10], desconto[10] = {0}, precoFinal[10] = {0}, porcent;
  char nomes[10][20];
  int i, cont = 1;
  
  printf("\n Exercício 06: \n");
  
  while(cont == 1){
  	
  	for(i = 0; i < 10; i++){
  		desconto[i] *= 0;
	    precoFinal[i] *= 0;
	    porcent *= 0;
	    precos[i] *= 0;
	  }
  
  for(i = 0; i < 10; i++){
  	printf("\n Digite o nome da %ia mercadoria: \n ", i+1);
  	scanf("%s", nomes[i]);
  	printf("\n ");
  	printf("Digite o preço de %s, em R$: \n ", nomes[i]);
  	scanf("%f", &precos[i]);
  }
  
  printf("\n Digite o percentual(%%) de desconto das mercadorias: \n ");
  scanf("%f", &porcent);
  porcent /= 100;
  
  for(i = 0; i < 10; i++){
  	desconto[i] = porcent * precos[i];
  	precoFinal[i] = precos[i] - desconto[i];
  }
  
  for(i = 0; i < 10; i++){
  	printf("\n Mercadoria: %s - Preço Original: R$%.2f - Valor de Desconto: R$%.2f - Preço Final: R$%.2f \n", nomes[i], precos[i], desconto[i], precoFinal[i]);
  }
  
  printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
  scanf("%i", &cont);
}
  return 0;
}
