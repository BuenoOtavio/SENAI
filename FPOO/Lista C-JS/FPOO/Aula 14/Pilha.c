#include <stdio.h>
#include <locale.h>

#define SIZE 10

int pilha[SIZE];
int ponteiro = 0;
int i;

void mostraPilha() {
    printf("\n Pilha Atualizada:\n");
    for (i = 0; i < ponteiro; i++)
        printf("\n %d \n", pilha[i]);
}

int push(int dado) {
    if (ponteiro < SIZE) {
        pilha[ponteiro] = dado;
        ponteiro++;
        return 1;
    } else
        return 0;
}

int pop() {
    if (ponteiro > 0) {
        ponteiro--;
        return 1;
    } else
        return 0;
}

int main() {
	setlocale( LC_ALL, "Portuguese"); 
    int opcao, dado;

	printf("\n Exercício Pilha \n");

    do {
        printf("\n Digite a operação desejada: \n\n 1.Adicionar \n\n 2.Remover \n\n 3.Mostrar \n\n 0.Fim\n\n ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("\n Digite o valor a ser adicionado: \n ");
                scanf("%d", &dado);
                if (push(dado)) {
                    printf("\n Valor adcionado com sucesso! \n");
                    mostraPilha();
                } else {
                    printf("\n A pilha está cheia! \n");
                }
                break;

            case 2:
                if (pop()) {
                    printf("\n Remoção realizada com sucesso!! \n");
                    mostraPilha();
                } else {
                    printf("\n A pilha está vazia! \n");
                }
                break;
                
            case 3:
            	mostraPilha();
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

