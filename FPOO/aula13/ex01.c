#include <stdio.h>
#define SIZE 6
int vetor[SIZE];
int ponteiro = 0;
int i;

void mostraPilha(){
	printf("Pilhaaa : \n\n");
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
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}else return 0;
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

