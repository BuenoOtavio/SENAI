#include <stdio.h>
#define SIZE 6
int vetor[SIZE];
int ponteiro = 0;
int i, j, repos;

void mostraPilha(){
	printf("\nPilhaaa : \n");
	for(i = 0; i < ponteiro; i++){
		printf("%d\n", vetor[i]);
	}
}

int push(int dado){
	if(ponteiro < SIZE){
		vetor[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int pop(){
	if(ponteiro > 0){	
	ponteiro--;
	for(i = 0; i< ponteiro;i++){
		vetor[i] = vetor[i+1];
	}
					return 1;
	}
	else return 0;
}

int main(){
    push(25);
	mostraPilha();
	push(18);
	mostraPilha();
	push(10);
	mostraPilha();
	pop();
	mostraPilha();
	pop();
	mostraPilha();
}

