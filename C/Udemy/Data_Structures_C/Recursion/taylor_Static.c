#include<stdio.h>

double taylor(int, int);
double taylor2(int, int);

int main(){
	int x, n;
	printf("Enter power of e: ");
	scanf("%d",&x);
	printf("Enter no. of terms to be calculated in Taylor series: ");
	scanf("%d",&n);
	// double result = taylor(x, n);
	double result = taylor2(x, n);
	printf("Answer = %f\n",result);
  return 0;
}

double taylor(int x, int n){
	static double x0 = 2, f=1, a=1;  // not a good program because we are hardcoding the value of x;
	double r;
	if(n>0){
		r = taylor(x, n-1) + x0/f;
		printf("r: %f\n",r);

		x0 = x0 * x;
		printf("x0: %f\n",x0);
		a++;
		printf("a: %f\n",a);
		f = f*(a);
		printf("f: %f\n",f);

		return r;
	}
	return 1;
}

double taylor2(int x, int n){   // better approach
	static double x0=1, f=1;
	double r;
	if(n>0){
		r = taylor2(x, n-1);
		x0 = x0 * x;
		f = f*n;
		return r + x0/f;
	}

	return 1;
}
