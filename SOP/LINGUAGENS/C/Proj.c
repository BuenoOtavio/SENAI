#include <stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int opcao;
	
	printf("Voce È CALVO??! SIM(1) ou N¬O(2) : \n");
	scanf("%i", &opcao);
	printf(" \n");
	
	if(opcao == 1){
		printf("CARACA VOC  … CALVO KKKKKK \n\n");
	}
	else if(opcao == 2){
		printf("CARACA VOC  TEM CABELOO \n\n");
	}
	else{
		printf("ERA PRA TER FALADO SIM OU N√√√√OO! \n\n");
	}
	return 0;
}
