#include<stdio.h>
#include<locale.h>

int main(){
  setlocale(LC_ALL, "Portuguese");
  float precos[5], porcent;
  char nomes[5][20];
  int i, cont = i;
  
  printf("\n Exerc�cio 03: \n");
  
  while(cont == 1){
  
  for(i = 0; i < 5; i++){
	    precos[i] *= 0;
	}
	
	porcent *= 0;
  
  for(i = 0; i < 5; i++){
  	printf("\n Digite o nome do %io produto: \n ", i+1);
  	scanf("%s", nomes[i]);
  	printf(" \n ");
  	printf("Digite o pre�o do(a) %s: \n ", nomes[i]);
  	scanf("%f", &precos[i]);
  }
  
  for(i = 0; i < 5; i++){
  	if(precos[i] < 1000){
  		porcent = precos[i] * 0.05;
  		precos[i] += porcent;
	  }
	  else{
	  	porcent = precos[i] * 0.07;
	  	precos[i] += porcent;
	  }
  }
  
  printf("\n Novos pre�os: \n\n ");
  
  for(i = 0; i < 5; i++){
  	printf("Produto : %s - Pre�os: R$%.2f \n\n ", nomes[i], precos[i]);
  }
  
  printf("Deseja recome�ar? sim(1) ou n�o(2) \n ");
  scanf("%i", &cont);
}
  return 0;
}
