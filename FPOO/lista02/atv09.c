#include <stdio.h>

int main(){
	
	float salario, aumento, result;
	
	printf("Exercicio 9: \n");
	printf(" \n");
	printf("Digite o seu salario: \n");
	scanf("%f", &salario);
	printf(" \n");
	

   if(salario >= 1500 && salario < 1750){ 	
   	aumento = salario * 0.15; 
   }
   
   else if(salario >= 1750 &&  salario < 2000){
    aumento = salario * 0.12;
   }
   
    else if(salario >= 2000  &&  salario < 3000){
    aumento = salario * 0.09;
   }
   
   else if(salario >= 3000){
    aumento = salario * 0.06;
   }
   printf("Voce ganha R$%.2f de salario, porem com o novo reajuste salarial voce comecara a ganhar R$%.2f \n", salario, salario +  aumento );
   return 0;
	
}
