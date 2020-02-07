#include<stdio.h>
#include<stdlib.h>

int fibonacci(int n){
  if (n<=1)
    return n;

  else
    return fibonacci(n-1) + fibonacci(n-2);
}

int main(){
  int n;
  printf("Enter no.: ");
  scanf("%d", &n);

  int result = fibonacci(n);

  printf("Fibonacci Nth term = %d\n", result);
  return 0;
}

