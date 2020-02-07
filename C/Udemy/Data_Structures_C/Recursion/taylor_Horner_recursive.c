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

// we have to compute from inside of brackets, so we need a variable to hold result
// so use a static variable
double taylor(int x, int n){
	static double r = 1;
  if(n==0){
    return r;
  }
  else{
    r = r * (double)x/(double)n + 1;
    return taylor(x, n-1);
  }
}