#include<stdio.h>

int fibo(int);
int mfibo(int);

int mt[20] = {[0 ... 19]=-1};

int main(){
    mt[0] = 0;
    mt[1] = 1;
    int n;
    printf("term to print: ");
    scanf("%d",&n);
    printf("result: %d\n",mfibo(n));

    for(int i=0; i<=19; i++)
        printf("%d ",mt[i]);
    printf("\n");

    return 0;
}

int mfibo(int n)
{
    if(n<=1)
    {
        return mt[n];
    }
    else
    {
        if(mt[n-2]==-1)
            mt[n-2] = mfibo(n-2);

        if(mt[n-1]==-1)
            mt[n-1] = mfibo(n-1);

        mt[n]=mt[n-2]+mt[n-1];

        return mt[n];
    }
}

/* this is not the best logic because we are still calling the functions and the checking the table,
a goog solution can be to check the table before calling a function */
int fibo(int n){                          
                                          
    if(n>=0 && n<=1){
        return mt[n];
    }
    else{
        if(mt[n] == -1){
            mt[n-2] = fibo(n-2);
            mt[n-1] = fibo(n-1);
            return mt[n-2] + mt[n-1];
        }
        else{
            return mt[n];
        }
    }
}