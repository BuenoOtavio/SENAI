#include <stdio.h>

int main(){
	char posicoes[] = {'N', 'L', 'S', 'O'};
	int i;
	FILE *arquivo = fopen("esquerda.in", "r");
	
	if (arquivo == NULL)
    printf("Erro!! Não foi possível abrir o arquivo!!\n");
    
    else{
	FILE *arquivo2 = fopen("esquerda.out", "w");
	int n = 0;
	
	do{
	fscanf(arquivo,"%d", &n);
	
	if(n != 0){	
	char comandos[n];
	fscanf(arquivo,"%s",&comandos[i]);
	int posicao = 0;
	for(i = 0; i< n; i++){
	  if(comandos[i] == 'E'){
	  	if(posicao == 0) posicao = 3;
	  	else posicao--;
	  }else{
	  	if(posicao == 3) posicao = 0;
	  	else posicao++;
	  }
	}
	fprintf(arquivo2,"%c\n", posicoes[posicao]);
	}
	}while(n != 0);
	fclose(arquivo2);
}
    fclose(arquivo);
	return 0;
}

