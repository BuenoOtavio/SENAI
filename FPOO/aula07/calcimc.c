#include <stdio.h>
#include <locale.h>

int main(){
	 setlocale(LC_ALL, "Portuguese");
	float altura, peso, imc;
	int continuar = 1;
	char nome[30], sobrenome[30];
	
	while(continuar == 1){
		
	altura *= 0;
	peso *= 0;
	imc *= 0;
	printf("Calculo IMC: \n");
	printf(" \n");
	printf("Digite o seu nome e um sobrenome: \n");
	scanf("%s %s", &nome, &sobrenome);
	printf(" \n");
	printf("Digite a sua altura(m): \n");
	scanf("%f", &altura);
	printf(" \n");
	printf("Digite o seu peso(kg): \n");
	scanf("%f", &peso);
	printf(" \n");
	
	strcat(nome, " ");
	strcat(nome, sobrenome);
	
	imc = peso/(altura * altura);
		
	if(imc < 17 ){
		printf("%s, o resultado do seu IMC é : %.2f (MUITO abaixo do peso) \n\n", nome, imc);
	}
	if(imc >= 17 && imc <= 18.49 ){
		printf("%s, o resultado do seu IMC é : %.2f (Abaixo do peso) \n\n", nome,imc);
	}
	if(imc >= 18.5 && imc <= 24.99 ){
		printf("%s, o resultado do seu IMC é : %.2f (Peso normal) \n\n", nome, imc);
	}
	if(imc >= 25 && imc <= 29.99 ){
		printf("%s, o resultado do seu IMC é : %.2f (Acima do peso) \n\n", nome, imc);
	}
	if(imc >= 30 && imc <= 34.99 ){
		printf("%s, o resultado do seu IMC é : %.2f (Obesidade grau I) \n\n", nome, imc);
	}
	if(imc >= 35 && imc <= 39.99){
		printf("%s, o resultado do seu IMC é : %.2f (Obesidade grau II) \n\n", nome, imc);
	}
	if(imc >= 40){
		printf("%s, o resultado do seu IMC é : %.2f (Obesidade grau III (Mórbida)) \n\n", nome, imc);
	}
	printf("Fim do programa! Digite se você quer continuar(1) ou quer fechar o programa(2): \n");
	scanf("%i", &continuar);
	printf("\n");
	
    }
	return 0;
	
}
