#include <stdio.h>
#include <locale.h>
//Fun??o que retorna a soma de dois par?metros inteiros
int soma(int a, int b){
	return a + b;
}

//Fun??o que retorna a m?dia de dois par?metros inteiros
int media(int a, int b){
	return (a + b) / 2;
}

//Exemplo de um procedimento que escreve uma frase 100 vezes
void procedimentoBart(){
	int i;
	for(i = 0; i < 100; i++)
		printf("Não vou atormentar a Lisa\n");
}

//Procedimento que escreve uma frase qualquer N vezes
void frases(char *frase, int n){
	int i;
	for(i = 0; i < n; i++)
		printf("%s\n", frase);
}

//Fun??o que calcula a m?dia de 3 notas
float media3(float a, float b, float c){
	return (a + b + c) / 3;
}

//Fun??o que calcula a m?dia de N notas
float mediaN(float notas[], int n){
	float total = 0;
	int i;
	for(i = 0; i < n; i++)
		total += notas[i];
	return total / n;
}

void zeraElemento(int *ponteiro, int indice){
	ponteiro[indice] = 0;		
}

//Procedimento apenas para mostrar o conte?do de um vetor
void mostraVetor(int *ponteiro, int n){
	int i;
	for(i = 0; i < n; i++)
		printf("%02d [%d]\n",ponteiro[i], i);
}

int main(){
	int numeros[] = {10, 8, 7, 3};
	zeraElemento(numeros, 0);
	mostraVetor(numeros, 4);
	return 0;
}
