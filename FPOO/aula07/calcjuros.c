#include <stdio.h>
#include <locale.h>

int main(){
	float investimento, calcInvestimentos, juros, result, somaCalc, calc;
	int  meses, contMeses = 1;
	setlocale(LC_ALL, "Portuguese");
	printf("Calculadora Investimentos: \n\n");
	printf("Digite o quanto você quer investir por mês (R$): \n");
	scanf("%f",&investimento);
	printf("\n");
	printf("Digite em quanto meses você quer investir: \n");
	scanf("%i",&meses);
	printf("\n");
	printf("Digite o quanto você deseja de juros (%%): \n");
	scanf("%f",&juros);
	printf("\n");

     calcInvestimentos = investimento;
     
     printf("  Tabela de Ganhos e Lucros com um investimento de R$%.2f, com %.2f%% de juros, em %i meses: \n\n\n", investimento, juros, meses);
     
    while(contMeses <= meses){
    	calc = (calcInvestimentos * juros)/100;
    	somaCalc = (calcInvestimentos + calc);
    	
    	result = somaCalc + investimento;
    	
    	calcInvestimentos *= 0;
    	calcInvestimentos += result;
    	
    	printf("  Mes%i - Ganho: R$%.2f Lucro: R$%.2f \n\n", contMeses, result, result-100);
    	
    	contMeses++;
    	
	}
	return 0;
}
