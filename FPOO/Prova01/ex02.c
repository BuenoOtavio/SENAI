#include<stdio.h>
#include<locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	int tempo, segundos, minutos, horas, calc, cont = 1;
	
	printf(" Exercício 02: \n ");
	while(cont == 1){
	
	segundos *= 0;
	minutos *= 0;
	horas *= 0;
	calc *= 0;

	printf("\n Digite o tempo em segundos: \n ");
	scanf("%i", &tempo);
	segundos = tempo; 
	if(segundos <= 0){
		printf("Não houve tempo! \n\n ");
		printf("Tempo: %d:%d:%d", horas, minutos, segundos);
	}		
	else if(segundos > 0){
		
		if(segundos < 60)
		{
		tempo = 0;
		printf("\n Tempo: 00:00:%d ", segundos);
		}
		else if(segundos > 60 && segundos < 3600){
		tempo = tempo - 60;
		 calc = segundos / 60;
		 segundos -= calc * 60;
		 minutos = calc;
		 printf("\n Tempo: 00:%d:%d",minutos, segundos );
		}
		else if(segundos >= 3600){
			tempo = tempo-3600;
			horas = segundos / 3600;
			minutos = segundos / 60;
			
			if(minutos >= 60){
				minutos -= 60 * horas;
			}
			
			calc = 3600 * horas;
			segundos -= calc;
			
			if(segundos >= 60){
				while(segundos >= 60){
					segundos -= 60;
				}
			}
			
			printf("\n Tempo: %i:%i:%i", horas, minutos, segundos);
		 }
		}
		printf("\n\n Deseja continuar o programa? sim(1) ou não(2):\n ");
	    scanf("%i", &cont);
	}
	printf("\n Fim do programa! \n\n");
	return 0;
}
