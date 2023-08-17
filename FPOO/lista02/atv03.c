#include <stdio.h>

int main(){  
   float salario, inss; 
   printf("Digite o seu salario: \n");
   scanf("%f", &salario);
   
   if(salario <= 1320.00){ 	
   	inss = salario * 0.075; 
   }
   
   else if(salario >= 1320.01 &&  salario <= 2571.29){
    inss = salario * 0.09;
   }
   
    else if(salario >= 2571.30  &&  salario <= 3856.94){
    inss = salario * 0.12;
   }
   
   else if(salario >= 3856.95  &&  salario <= 7507.29){
    inss = salario * 0.14;
   }
   printf(" \n");
   printf("Voce tem R$%.2f de salario, oque faz que com o desconto do inss, o seu salario final seja de %.2f \n", salario, salario - inss );
   return 0;
 }