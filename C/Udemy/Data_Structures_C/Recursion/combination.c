#include<stdio.h>

int comb(int n, int r);

int main(){
    int n, r;
    printf("Enter n: ");
    scanf("%d",&n);
    printf("Enter r: ");
    scanf("%d",&r);
    if(n>=r)
        printf("Result: %d\n",comb(n,r));
    else
        printf("Invalid\n");
    return 0;
}

int comb(int n, int r){
    if(r==0 || r==n)
        return 1;

    return comb(n-1, r-1) + comb(n-1, r);
}