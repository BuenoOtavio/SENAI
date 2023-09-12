#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese");
    float valores[10], somaPar = 0, somaImpar = 0, totalPar = 0, totalImpar = 0;
    int i, cont = 1;
    
    printf("\n Exercício 09: \n");
    
    while(cont == 1){
    for(i = 0; i < 10; i++){
    	valores[i] *= 0;
    	somaPar *= 0;
    	somaImpar *= 0;
    	totalPar *= 0;
    	totalImpar = 0;
	}
    	
    for (i = 0; i < 10; i++) {
        printf("\n Digite o %do valor:\n ", i + 1);
        scanf("%f", &valores[i]);
    }

    for (i = 0; i < 10; i++) {
        if ((int)valores[i] % 2 == 0) { 
            somaPar += valores[i];
            totalPar++;
        } else {
            somaImpar += valores[i];
            totalImpar++;
        }
    }

    if (totalPar > 0) {
        somaPar /= totalPar;
    }

    if (totalImpar > 0) {
        somaImpar /= totalImpar;
    }

    printf("\n Resultado: Média Pares: %.1f - Média Ímpares: %.1f - Total de Pares: %.0f - Total de Ímpares: %.0f\n", somaPar, somaImpar, totalPar, totalImpar);
    
    printf("\n\n Deseja recomeçar? sim(1) ou não(2) \n ");
    scanf("%i", &cont);
  }
    return 0; 
}
