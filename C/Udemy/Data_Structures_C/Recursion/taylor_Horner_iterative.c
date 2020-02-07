#include<stdio.h>

double taylor(int, int);

int main(){
  int x, n;
  printf("Enter power of e: ");
  scanf("%d",&x);
  printf("Enter no. of terms to be calculated in Taylor series: ");
  scanf("%d",&n);
  double result = taylor(x, n);
  printf("Answer = %f\n",result);
  return 0;
}

double taylor(int x, int n){
  double r=1;
  while(n>0){
    r = r * ((double)x/(double)n) + 1;
    n--;
  }

  return r;
}