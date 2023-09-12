#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese");
    float porcent[5];
    char nomes[5][20];
    int i, eleitores[5], votos[5], cont = 1;

    printf("\n Exercício 05: \n");
    
    while(cont == 1){
	
	for(i = 0; i < 5; i++){
	    eleitores[i] *= 0;
	    votos[i] *= 0;
	    porcent[i] *= 0;
	}

    for (i = 0; i < 5; i++) {
        printf("\n Digite o nome da %ia cidade:\n ", i + 1);
        scanf("%s", nomes[i]);
        printf("\n Digite o total de eleitores em %s:\n ", nomes[i]);
        scanf("%i", &eleitores[i]);
        printf("\n Digite o total de votos na última eleição de %s:\n ", nomes[i]);
        scanf("%i", &votos[i]);
    }

    for (i = 0; i < 5; i++) {
        porcent[i] = ((float)votos[i] / eleitores[i]) * 100;
    }

    for (i = 0; i < 5; i++) {
        printf("\n Cidade: %s - Porcentagem de Votos: %.2f%%\n", nomes[i], porcent[i]);
    }
    
    printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);

  }
    return 0;
}
