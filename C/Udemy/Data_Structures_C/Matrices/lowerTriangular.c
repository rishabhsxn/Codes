// storing lower triangular matrix in an array using Row-major representation

#include<stdio.h>
#include<stdlib.h>

struct Matrix{
    int *a;
    int n;
    int arraySize;
};

void set(struct Matrix *, int, int, int);
int get(struct Matrix, int, int);
void display(struct Matrix);

int main(){
    struct Matrix m;
    // printf("Enter size of matrix: ");
    // scanf("%d",&m.n);
    m.n = 3;

    m.arraySize = (m.n * (m.n+1))/2;

    m.a = (int *)malloc(m.arraySize * sizeof(int));

    int z=1;
    for(int i=0; i<m.n; i++){
        for(int j=0; j<m.n; j++){
            set(&m, i, j, z);
            z++;
        }
    }

    display(m);

    printf("get(m, 1, 2) = %d\n",get(m, 1, 2));
    printf("get(m, 2, 1) = %d\n",get(m, 2, 1));
    printf("get(m, 2, 2) = %d\n",get(m, 2, 2));

    return 0;
}

void set(struct Matrix *m, int i, int j, int x){
    if(j<=i && i<m->n){
        int index = (i*(i+1))/2 + j;
        m->a[index] = x;
    }
    else if(i>=m->n && j>=m->n)
        printf("Invalid\n");
}

int get(struct Matrix m, int i, int j){
    if(i<m.n && j<m.n){
        if(j>i)
            return 0;
        
        int index = (i*(i+1))/2 + j;
        return m.a[index];
    }
}

void display(struct Matrix m){
    for(int i=0; i<m.n; i++){
        for(int j=0; j<m.n; j++){
            if(j>i)
                printf("0 ");
            else{
                int index = (i*(i+1))/2 + j;
                printf("%d ",m.a[index]);
            }
        }
        printf("\n");
    }
}