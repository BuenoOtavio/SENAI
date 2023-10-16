#include<stdio.h>

FILE *entrada, *saida;
char in[] = "comando.in";
char out[] = "comando.out";



int main(){
	entrada = fopen(in, "r");
	if(entrada == NULL)
		printf("Erro ao ler o arquivo!!");
	else{
		int num;
		saida = fopen(out, "w");
		
		do{
			fscanf(entrada, "%d", &num);
			
		}
	}
}
