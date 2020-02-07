#include<stdio.h>

int fibo(int);

int main(){
    int n;
    printf("term to print: ");
    scanf("%d",&n);
    printf("result: %d\n",fibo(n));
    return 0;
}

int fibo(int n){
    if(n<=1){
        return n;
    }

    return fibo(n-2)+fibo(n-1);
}