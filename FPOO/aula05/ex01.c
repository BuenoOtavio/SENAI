#include <stdio.h>

int main(){
	int idade;
	
	printf("Exercício 1: \n");
	printf(" \n");
	printf("Digite a sua idade: \n");
	scanf("%i", &idade);
	printf(" \n");
	
	if(idade <= 12){
		printf("Voce tem %i ano(s), oque significa que voce ainda e considerado uma crianca, oooo que fofinhooo! \n", idade);
		return 0;
	}
	
	else if(idade >= 13 & idade <= 17){
		printf("Voce tem %i anos, oque significa que voce e considerado um(a) adolescente, ta ficando grandinho(a) ja hein!", idade); 
		return 0;
	}
	
	else if(idade >= 18 & idade <= 44){
		printf("Voce tem %i anos, oque significa que voce e considerado um(a) adulto(a), parabéns! voce ja pode ser preso!  :)", idade);
		return 0;
	}
	
	else if(idade >= 45 & idade <= 58){
		printf("Voce tem %i anos, oque significa que voce esta na meia idade, ta quase um vovo ja kkkkkkkkk ", idade);
		return 0;
	}
	
	else if(idade >= 59 & idade <= 74){
	    printf("Voce tem %i anos, oque significa que voce e um(a) idoso(a), agora voce definitivamente e um vovo kkkkkk", idade);
		return 0;
	}
	
	else if(idade >= 90 & idade <= 120){
		printf("Taporra %i anos!? tu e literalmente um monumento historico man kkkkkkkkk", idade);
		return 0;
	}
	
	else if(idade >= 120){
	    printf(" Voce tem %i anos, oque significa que tu e tao velho quanto o proprio big bang, \n \n jesus nasceu tu tava la, \n \n tu era parca da cleopatra no egito antigo, \n \n e tu e a rainha elizabeth do msm lado kkkkkkkk \n", idade);
		return 0;
	}
	
	return 0;

}
