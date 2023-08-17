#include <stdio.h> 

int main(){
	unsigned int x = 0x076543210;
	char*c = (char*) &x;
	printf ("*C is 0x%x \n\n", *c);
	if(*c == 0x10){
		printf("Litle-endian \n");
	}
	else{
		printf("Big-endian \n");
	}
	return 0;
	
}
