#include<stdio.h>
#include<stdlib.h>

int factorial(int n);

int main(){
  int n;
  printf("Enter no.: ");
  scanf("%d", &n);

  int result = factorial(n);

  printf("Factorial = %d\n", result);
  return 0;
}

int factorial(int n){
  if (n==0){
    return 1;
  }
  else{
    return n*factorial(n-1);
  }
}