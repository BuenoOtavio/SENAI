#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

struct Lista{
    int dado;
    struct Lista *prox;
};

struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;

void mostraLista(){
    aux = inicio;
    printf("\n Lista Atualizada: \n");
    while(aux != NULL){
        printf("\n %d \n", aux->dado);
        aux = aux->prox;
    }
}

int push(int dado){
    aux = (struct Lista*) malloc(sizeof(struct Lista));
    if(aux == NULL) return 0;
    aux->dado = dado;
    aux->prox = NULL;
    if(inicio == NULL){
        inicio = aux;
        fim = aux;
    }else{
        fim->prox = aux;
        fim = aux;
    }
    return 1;
}


int slice(int indice){
    int i;
    aux = inicio;
    if(indice == 0){
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else{
        for(i = 0; i < indice-1; i++){
            aux = aux->prox;
        }
        struct Lista *aux2 = aux->prox;
        aux->prox = aux2->prox;
        free(aux2);
        return 1;
    }
    return 0;
}

int main() {
	setlocale( LC_ALL, "Portuguese"); 
    int opcao, dado, i;

	printf("\n Exercício Lista \n");

    do {
        printf("\n Digite a operação desejada: \n\n 1.Adicionar \n\n 2.Slice \n\n 3.Mostrar \n\n 0.Fim\n\n ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("\n Digite o valor a ser adicionado: \n ");
                scanf("%d", &dado);
                if (push(dado)) {
                    printf("\n Valor adcionado com sucesso! \n");
                    mostraLista();
                } else {
                    printf("\n Erro na Lista! \n");
                }
                break;

            case 2:
                printf("\n Digite a posição do valor a ser removido: \n ");
                scanf("%d", &i);
                i--;
                
                if (slice(i)) {
                    printf("\n Remoção realizada com sucesso!! \n");
                    mostraLista();
                } else {
                    printf("\n Erro na remoção! \n");
                }
                break;
                
			 case 3:
            	mostraLista();
            	break;
            	
            case 0:
            	printf("\n Fim do Programa!! \n");
                break;

            default:
                printf("\n Opção inválida! Tente novamente. \n");
                break;
        }
    } while (opcao != 0);

    while (inicio != NULL) {
        aux = inicio;
        inicio = inicio->prox;
        free(aux);
    }

    return 0;
}

