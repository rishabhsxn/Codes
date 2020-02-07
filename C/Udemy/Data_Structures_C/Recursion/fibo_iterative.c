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
    int t0=0, t1=1;
    if(n<=1){
        return n;
    }

    int s;
    for(int i=2; i<=n; i++){
        s=t0+t1;
        t0=t1;
        t1=s;
    }
    return s;
}