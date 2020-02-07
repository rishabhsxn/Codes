#include<stdio.h>
#include<stdlib.h>

int main(){
    int *a = (int *)malloc(3*sizeof(int));
    a[0]=0;
    a[1]=1;
    a[2]=2;
    
    //suppose now we need larger array for storing additional data with already present data
    int *b = (int *)malloc(5*sizeof(int));

    for(int i=0; i<3; i++)
        b[i]=a[i];

    b[3]=3;
    b[4]=4;

    //make sure to delete previous array after copying, otherwise there will be memory leak in program
    free(a);   //IMPORTANT:

    a=b;
    b=NULL;

    for(int i=0; i<5; i++)
        printf("%d ",a[i]);

    printf("\n");

    return 0;
}