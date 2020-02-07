#include<stdio.h>
#include<stdlib.h>

void factorial(int n);

int main(){
  int n;
  printf("Enter no.: ");
  scanf("%d", &n);

  factorial(n);
  return 0;
}

void factorial(int n){
  int result=n;

  for(int i=n-1; i>0 ; i--)
    result *= i;

  printf("Factorial: %d\n",result);
}