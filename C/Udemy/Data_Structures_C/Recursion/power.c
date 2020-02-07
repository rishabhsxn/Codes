#include<stdio.h>

int powerr(int n, int p){
  if(p>0)
    return n*powerr(n, p-1);

  return 1;
}

int powerrFaster(int n, int p){
  if(p>0){
    if(p%2==0){
      return powerrFaster(n*n, p/2);
    }

    else{
      return n*powerrFaster(n*n, p/2);
    }
  }

  return 1;
}

void main(){
  int n = 2;
  int p = 6;

  printf("%d\n",powerrFaster(n,p));
}

