#include<stdio.h>
#include<locale.h>
#include<string.h>

char nomes[5][20], reposStr[20];
int i, j, cont = 1, cpf[5], repos, opcao;

void valores() {
    for (i = 0; i < 5; i++) {
        cpf[i] = 0;
    }
 
    for (i = 0; i < 5; i++) {
        printf("\n\n Digite o nome da %ia pessoa: \n ", i + 1);
        scanf("%s", nomes[i]);
        printf(" \n");
        printf("\n Digite o cpf de %s: \n ", nomes[i]);
        scanf("%d", &cpf[i]);
        printf(" \n");
    }
}

void cpfCrescente() {
    for (i = 0; i < 5; i++) {
        for (j = i + 1; j < 5; j++) {
            if (cpf[i] > cpf[j]) {
                repos = cpf[i];
                cpf[i] = cpf[j];
                cpf[j] = repos;
                strcpy(reposStr, nomes[i]);
                strcpy(nomes[i], nomes[j]);
                strcpy(nomes[j], reposStr);
            }
        }
    }
    
    for (i = 0; i < 5; i++) {
        printf("Nome %s, CPF %d \n\n", nomes[i], cpf[i]);
    }
}

void cpfDecrescente() {
    for (i = 0; i < 5; i++) {
        for (j = i + 1; j < 5; j++) {
            if (cpf[i] < cpf[j]) {
                repos = cpf[i];
                cpf[i] = cpf[j];
                cpf[j] = repos;
                strcpy(reposStr, nomes[i]);
                strcpy(nomes[i], nomes[j]);
                strcpy(nomes[j], reposStr);
            }
        }
    }
    
    for (i = 0; i < 5; i++) {
        printf("Nome %s, CPF %d \n\n", nomes[i], cpf[i]);
    }
}

void nomeAlfabetico() {
    for (i = 0; i < 5 - 1; i++) {
        for (j = 0; j < 5 - i - 1; j++) {
            if (strcmp(nomes[j], nomes[j + 1]) > 0) {
                strcpy(reposStr, nomes[j]);
                strcpy(nomes[j], nomes[j + 1]);
                strcpy(nomes[j + 1], reposStr);
                repos = cpf[j];
                cpf[j] = cpf[j + 1];
                cpf[j + 1] = repos;
            }
        }
    }
    
    for (i = 0; i < 5; i++) {
        printf("Nome %s, CPF %d \n\n", nomes[i], cpf[i]);
    }
}

int main() {
    setlocale(LC_ALL, "Portuguese");

    printf("\n Exercicio 01: \n");

    while (cont == 1) {
        valores();
        
        printf("Qual a opcao desejada? (1) Ordem Alfabetica, (2) CPF Crescente, (3) CPF Decrescente \n");
        scanf("%d", &opcao); 
        
        if (opcao == 1) {
            nomeAlfabetico();
        } else if (opcao == 2) {
            cpfCrescente();   
        } else if (opcao == 3) {
            cpfDecrescente();
        } else {
            printf("Opcao Invalida!! \n");
        };

        printf("Deseja recomeçar? sim(1) ou não(qualquer número diferente de 1) \n ");
        scanf("%d", &cont);
    }
    
    return 0;
}
