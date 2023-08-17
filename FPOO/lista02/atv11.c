#include <stdio.h>

int main(){
   float calca, shorts, camiseta, descontCalca, descontShorts, descontCamiseta, precoPromo, preco;

   printf("Exercicio 11: \n");
   printf(" \n");
   printf("Digite a soma dos valores das calcas que voce esta comprando: \n");
   scanf("%f", &calca);
   printf(" \n");
   printf("Digitea soma dos valores dos shorts que voce esta comprando: \n");
   scanf("%f", &shorts);
   printf(" \n");
   printf("Digite a soma dos valores das camisetas que voce esta comprando: \n");
   scanf("%f", &camiseta);
   printf(" \n");
   
   descontCalca = calca - (calca * 0.15);
   
   descontCamiseta = camiseta - (camiseta * 0.2);
   
   descontShorts = shorts - (shorts * 0.1);
   
   precoPromo = descontCalca + descontCamiseta + descontShorts;
   
   preco = calca + camiseta + shorts;
   
   if(precoPromo == 0){
   	printf("Voce nao comprou NADA \n\n");
   }
   else{
   	printf("O preco original da sua compra seria R$%.2f, mas com a nossa promocao o valor de sua compra ficou para R$%.2f \n\n", preco, precoPromo);
   }
   
   return 0;
}
