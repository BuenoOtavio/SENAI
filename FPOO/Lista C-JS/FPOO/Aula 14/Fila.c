#include <stdio.h>
#include <locale.h>

#define SIZE 10
int fila[SIZE];
int ponteiro = 0;
int i;
void mostraFila(){
	printf("\n Fila Atualizada: \n");
	for(i = 0; i < ponteiro; i++)
		printf("\n %d \n", fila[i]);
}
int push(int dado){
	if(ponteiro < SIZE){
		fila[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		for(i = 0; i < ponteiro; i++){
			fila[i] = fila[i+1];
		}
		return 1;
	}else
		return 0;
}

int main() {
	setlocale( LC_ALL, "Portuguese"); 
    int opcao, dado;
	
	printf("\n Exercício Fila \n");
	
    do {
        printf("\n Digite a operação desejada: \n\n 1.Adicionar \n\n 2.Remover \n\n 3.Mostrar \n\n 0.Fim\n\n ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("\n Digite o valor a ser adicionado: \n ");
                scanf("%d", &dado);
                if (push(dado)) {
                    printf("\n Valor adcionado com sucesso! \n");
                    mostraFila();
                } else {
                    printf("\n A Fila está cheia! \n");
                }
                break;

            case 2:
                if (pop()) {
                    printf("\n Remoção realizada com sucesso!! \n");
                    mostraFila();
                } else {
                    printf("\n A Fila está vazia! \n");
                }
                break;
                
            case 3:
            	printf("\n Fim do Programa!! \n");
            	mostraFila();
            	break;

            case 0:
            	printf("\n Fim do Programa!! \n");
                break;

            default:
                printf("\n Opção inválida! Tente novamente. \n");
                break;
        }
    } while (opcao != 0);

    return 0;
}

