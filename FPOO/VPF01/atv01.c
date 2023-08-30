#include<stdio.h>
#include<locale.h>
#include<string.h>

int main(){
	 setlocale(LC_ALL, "Portuguese");
    int numero, cont = 1;
    
    while(cont == 1){
	numero *= 0;
	
    printf("\nDigite o número de doadores: \n");
    scanf("%i", &numero);
    printf("\n\n");

    if (numero <= 0) {
        printf("Nenhum doador detectado!!");
    } else {
        char nome[numero][20], status[numero][20], sexo[numero][10];
        int idade[numero], dias[numero], sexoNum[numero], i;

        for (i = 0; i < numero; i++) {
        	strcpy(sexo[i], "");
        	strcpy(status[i], "");
            printf("Digite o nome do(a) %iº Doador(a): \n", i + 1);
            scanf("%s", nome[i]);
            printf("\n");
            printf("Digite a idade do(a) %iº Doador(a): \n", i + 1);
            scanf("%i", &idade[i]);
            printf("\n");
            printf("Digite o numero de dias desde a última doação do(a) %iº Doador(a): \n", i + 1);
            scanf("%i", &dias[i]);
            printf("\n");
            printf("Digite o sexo do(a) %iº Doador(a), Masculino(1) ou Feminino(2): \n", i + 1);
            scanf("%i", &sexoNum[i]);
            printf("\n");
            
            switch(sexoNum[i]){
            	case 1:
            		 strcpy(sexo[i], "Masculino");
            		 break;
            	case 2:
            		 strcpy(sexo[i], "Feminino");
            		 break;
			}
        }

        for (i = 0; i < numero; i++) {

            if (dias[i] < 60 && sexoNum[i] == 1) {
                strcpy(status[i], "Inapto");
            } 
		    else if (dias[i] >= 60 && sexoNum[i] == 1) {
                strcpy(status[i], "Apto");
            } 
			else if (dias[i] < 90 && sexoNum[i] == 2) {
                strcpy(status[i], "Inapto");
            }
			else if (dias[i] >= 90 && sexoNum[i] == 2) {
                strcpy(status[i], "Apto");
            }
        }

        printf("Lista de Doadores: \n\n");
        for (i = 0; i < numero; i++) {
            printf("Nome: %s, Idade: %i anos, Sexo: %s, Status: %s \n\n", nome[i], idade[i], sexo[i], status[i]);
        }
        printf("Você deseja continuar? Sim(1) ou Não(2): \n");
        scanf("%i", &cont);
     }
     
   }
    return 0;
}
