#include <stdio.h>

int main() {
    int a, b, c, d, e;
    int repos;

    printf("Exercicio 7: \n");
    printf(" \n");
    printf("Digite o 1o valor: \n");
    scanf("%i", &a);
    printf(" \n");
    printf("Digite o 2o valor: \n");
    scanf("%i", &b);
    printf(" \n");
    printf("Digite o 3o valor: \n");
    scanf("%i", &c);
    printf(" \n");
    printf("Digite o 4o valor: \n");
    scanf("%i", &d);
    printf(" \n");
    printf("Digite o 5o valor: \n");
    scanf("%i", &e);
    printf(" \n");

    if(a > b){
    	  repos = a;
          a = b;
          b = repos;
	}
    
     if(a > c){
    	  repos = a;
          a = c;
          c = repos;
	}
	
	 if(a > d){
    	  repos = a;
          a = d;
          d = repos;
	}
	
	 if(a > e){
    	  repos = a;
          a = e;
          e = repos;
	} 
	
    if(b > a){
    	  repos = b;
          b = a;
          a = repos;
	}
    
     if(b > c){
    	  repos = b;
          b = c;
          c = repos;
	}
	
	 if(b > d){
    	  repos = b;
          b = d;
          d = repos;
	}
	
	 if(b > e){
    	  repos = b;
          b = e;
          e = repos;
	} 
	
	 if(c > a){
    	  repos = c;
          c = a;
          a = repos;
	}
    
     if(c > b){
    	  repos = c;
          c = b;
          b = repos;
	}
	
	 if(c > d){
    	  repos = c;
          c = d;
          d = repos;
	}
	
	 if(c > e){
    	  repos = c;
          c = e;
          e = repos;
	} 
	
	 if(d > a){
    	  repos = d;
          d = a;
          a = repos;
	}
    
     if(d > b){
    	  repos = d;
          d = b;
          b = repos;
	}
	
	 if(d > c){
    	  repos = d;
          d = c;
          c = repos;
	}
	
	 if(d > e){
    	  repos = d;
          d = e;
          e = repos;
	} 
	
	if(e > a){
    	  repos = e;
          e = a;
          a = repos;
	}
    
     if(e > b){
    	  repos = e;
          e = b;
          b = repos;
	}
	
	 if(e > c){
    	  repos = e;
          e = c;
          c = repos;
	}
	
	 if(e > d){
    	  repos = e;
          e = d;
          d = repos;
	} 

    printf("Ordem Crescente dos valores: \n\n");
    printf("%i \n", e);
    printf("%i \n", d);
    printf("%i \n", c);
    printf("%i \n", b);
    printf("%i \n", a);

    return 0;
}
