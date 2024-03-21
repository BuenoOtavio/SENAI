#include<stdio.h>
#include<locale.h>
#include<string.h>

char gabarito[] = {'A', 'C', 'B', 'D', 'D', 'E', 'A', 'C', 'B', 'D'}, resposta[10];
int i, erros = 0, acertos = 0, cont = 1;

void valores() {
    for (i = 0; i < 10; i++) {
        resposta[i] = 0;
    }
 
    for (i = 0; i < 10; i++) {
        printf("\n Digite a alternativa do item em MAIUSCULO %d: \n ", i+1);
        scanf(" %c", &resposta[i]);
        printf(" \n");
    }
}

void correcao() {
    erros = 0;
    acertos = 0;
     
    for (i = 0; i < 10; i++){
        if(gabarito[i] == resposta[i]){
            acertos++;
        } else {
            erros++;
        }
    }
     
    if (erros  == 10) {
        printf("\n Infelizmente você ZEROU a prova :( \n");
    } else if (acertos == 10) {
        printf("\n PARABÉNS! Você GABARITOU a prova :D \n");
    } else {
        printf("\n Resultado: \n\n Acertos: %d; \n\n Erros: %d \n", acertos, erros);       
    }
}

int main(){
    while(cont == 1){
        valores();
        correcao();
        
        printf("\n Deseja recomeçar? sim(1) ou não(qualquer número diferente de 1) \n ");
        scanf("%d", &cont);
    }   
    return 0;
}

