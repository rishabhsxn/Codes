#include<stdio.h>
#include<stdlib.h>

int fibonacci(int);

int main(){
  int n;
  printf("Enter no. N: ");
  scanf("%d", &n);

  int result = fibonacci(n);

  printf("Fibonacci Nth term = %d\n", result);
  return 0;
}

int fibonacci(int n){
  if(n==1)
    return 0;
  if(n==2)
    return 1;
  
  int n1=0, n2=1;
  int n3;

  for(int i=1; i<n-1 ; i++){
    n3=n1+n2;
    n1=n2;
    n2=n3;
  }

  return n3;

}