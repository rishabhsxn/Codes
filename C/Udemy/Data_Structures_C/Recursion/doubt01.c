#include<stdio.h>

int fun(int);

void main(){
  int a = 3;
  printf("%d\n",fun(a));
}

int fun(int n){
  if(n>0){
    return fun(n-1) + fun(n-2); 
  }

  return 0;

}