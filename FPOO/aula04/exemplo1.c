#include <stdio.h>

int main(){
  float prov1, prov2, proj, media, rec;
  
  printf("Calculador de medias: \n");
  printf(" \n");
  printf("Digite a nota da sua primeira prova: \n");
  scanf("%f", &prov1);
  printf(" \n");
  printf("Digite a nota da sua segunda prova: \n");
  scanf("%f", &prov2);
  printf(" \n");
  printf("Digite a nota do seu projeto: \n");
  scanf("%f", &proj);
  printf(" \n");
  media =  (prov1 + prov2 + proj)/3.0;
  
  printf("Resultado: \n ");
  printf(" \n");
  
  if(media >=  5) printf("Parabenns! Tu passou!! vc ficou com uma media de %.2f!! \n",media);
  
  else if(media <= 5 && media >= 2){
  	printf("A sua media foi %.2f, voce ficou de recuperacao!! \n", media);
  	printf(" \n");
  	printf("Digite a nota da sua recuperacao: \n");
  	scanf("%f", &rec);
  	printf(" \n");
  	float mediaFinal = (media + rec)/2.0;
  	
  	printf("Resultado FINAL: \n ");
  	
    printf(" \n");
  	
  	if(mediaFinal >= 5) printf("Parabens!! Voce passou na recuperacao!! a sua media final foi %.2f \n", mediaFinal);
  	
  	else printf("Lamento em te informar parceiro, mas tu reprovou mesmo assim! Tua media final foi %.2f! \n", mediaFinal);
  }
  
  else printf("Reprovou!! Tua media foi %.2f! (se fudeu kkk) \n ",media);
  
  return 0;
}

