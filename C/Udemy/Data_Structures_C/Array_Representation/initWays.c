#include<stdio.h>
#include<stdlib.h>

int main(){
    int **A;
    A = (int **) malloc(2*sizeof(int *));
    A[0] = (int *) malloc (2*sizeof(int));
    A[1] = (int *) malloc(2*sizeof(int));

    A[0][0] = 0;
    A[0][1] = 1;
    A[1][0] = 2;
    A[1][1] = 3;

    for(int i=0; i<2; i++){
        for(int j=0; j<2; j++){
            printf("%d ",A[i][j]);
        }
        printf("\n");
    }

    return 0;
}