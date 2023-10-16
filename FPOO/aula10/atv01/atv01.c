#include <stdio.h>

#include <locale.h>

void mostrar(int *ponteiro, int indice){
	int i;
	for(i = 0; i < indice; i++){
		printf("%d -", ponteiro[i]);
	}
}

int main(){
	setlocale(LC_ALL, "Portuguese");
	int range[] = {16, 15, 24, 32, -1, -8, 15, 0, 84, 78};
	int n = sizeof(range) / sizeof(range[0]);
	printf("Vetor Original:  ");
	mostrar(range, n);
}
