#include<stdio.h>

int fun(int n){
  static int x = 0;    //NOTE: it is created in data section of fun() in code section of memory and is initialized only once
  if(n>0){
    x++;
    return fun(n-1)+x;
  }

  return 0;
}

void main(){
  int a = 5;

  printf("%d\n", fun(a));
}