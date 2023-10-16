#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

#define SIZE 10


int pilha[SIZE];
int fila[SIZE];
int ponteiro1 = 0;
int ponteiro2 = 0;
int i;


//Pilha

void mostraPilha() {
    printf("\n Pilha Atualizada:\n");
    for (i = 0; i < ponteiro1; i++)
        printf("\n %d \n", pilha[i]);
}

int pushPilha(int dado) {
    if (ponteiro1 < SIZE) {
        pilha[ponteiro1] = dado;
        ponteiro1++;
        return 1;
    } else
        return 0;
}

int popPilha() {
    if (ponteiro1 > 0) {
        ponteiro1--;
        return 1;
    } else
        return 0;
}

//Fila

void mostraFila(){
	printf("\n Fila Atualizada: \n");
	for(i = 0; i < ponteiro2; i++)
		printf("\n %d \n", fila[i]);
}
int pushFila(int dado){
	if(ponteiro2 < SIZE){
		fila[ponteiro2] = dado;
		ponteiro2++;
		return 1;
	} 
	else return 0;
}
int popFila(){
	if(ponteiro2 >= 0){
		ponteiro2--;
		for(i = 0; i < ponteiro2; i++){
			fila[i] = fila[i+1];
		}
		return 1;
	}else
		return 0;
}

//Lista

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

int pushLista(int dado){
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


int sliceLista(int indice){
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
    int opcao, num, dado, i;
	
	printf("\n Exercício Pilha/Fila/Lista \n");
	
    do {
        printf("\n Digite a operação desejada: \n\n 1.Pilha \n\n 2.Fila \n\n 3.Lista \n\n 0.Fim\n\n ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
		        printf("\n Digite a operação desejada: \n\n 1.Adicionar na Pilha \n\n 2.Remover na Pilha \n\n 3.Mostrar a Pilha \n\n ");
		        scanf("%d", &num);
		
		        switch (num) {
		            case 1:
		                printf("\n Digite o valor a ser adicionado: \n ");
		                scanf("%d", &dado);
		                if (pushPilha(dado)) {
		                    printf("\n Valor adcionado com sucesso! \n");
		                    mostraPilha();
		                } else {
		                    printf("\n A pilha está cheia! \n");
		                }
		                break;
		
		            case 2:
		                if (popPilha()) {
		                    printf("\n Remoção realizada com sucesso!! \n");
		                    mostraPilha();
		                } else {
		                    printf("\n A pilha está vazia! \n");
		                }
		                break;
		                
		            case 3:
		            	mostraPilha();
		            	break;
		
		            default:
		                printf("\n Opção inválida! \n");
		                break;
		       }break;
		                
            case 2:
                printf("\n Digite a operação desejada: \n\n 1.Adicionar na Fila \n\n 2.Remover na Fila \n\n 3.Mostrar a Fila \n\n ");
		        scanf("%d", &num);
		
		        switch (num) {
		            case 1:
		                printf("\n Digite o valor a ser adicionado: \n ");
		                scanf("%d", &dado);
		                if (pushFila(dado)) {
		                    printf("\n Valor adcionado com sucesso! \n");
		                    mostraFila();
		                } else {
		                    printf("\n A Fila está cheia! \n");
		                }
		                break;
		
		            case 2:
		                if (popFila()) {
		                    printf("\n Remoção realizada com sucesso!! \n");
		                    mostraFila();
		                } else {
		                    printf("\n A Fila está vazia! \n");
		                }
		                break;
		                
		            case 3:
		            	mostraFila();
		            	break;
		
		            default:
		                printf("\n Opção inválida! \n");
		                break;
		            }break;
		                
            case 3:
		        printf("\n Digite a operação desejada: \n\n 1.Adicionar na Lista \n\n 2.Slice na Lista \n\n 3.Mostrar a Lista \n\n ");
		        scanf("%d", &opcao);
		
		        switch (opcao) {
		            case 1:
		                printf("\n Digite o valor a ser adicionado: \n ");
		                scanf("%d", &dado);
		                if (pushLista(dado)) {
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
		                
		                if (sliceLista(i)) {
		                    printf("\n Remoção realizada com sucesso!! \n");
		                    mostraLista();
		                } else {
		                    printf("\n Erro na remoção! \n");
		                }
		                break;
		                
					 case 3:
		            	mostraLista();
		            	break;
		
		            default:
		                printf("\n Opção inválida! Tente novamente. \n");
		                break;
		                
		            }break;

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


