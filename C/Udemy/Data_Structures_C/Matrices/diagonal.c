#include<stdio.h>

struct Matrix{
    int a[10];
    int n;
};

void set(struct Matrix *, int, int, int);
int get(struct Matrix, int, int);
void display(struct Matrix);

int main(){
    struct Matrix m;
    m.n = 4;

    set(&m,0,0,1);
    set(&m,1,1,2);
    set(&m,2,2,3);
    set(&m,3,3,4);
    set(&m,1,2,5);

    display(m);

    printf("\nget(m,1,1) = %d\n",get(m,1,1));
    return 0;
}

void set(struct Matrix *m, int i, int j, int x){
    if(i==j && i<m->n && j<m->n)
        m->a[i] = x;
}

int get(struct Matrix m, int i, int j){
    if(i<m.n && j<m.n){
        if(i==j)
            return m.a[i];
        else
            return 0;        
    }

    return -1;
}

void display(struct Matrix m){
    for(int i=0; i<m.n; i++){
        for(int j=0; j<m.n; j++){
            if(i==j)
                printf("%d ",m.a[i]);
            else
                printf("0 ");
        }
        printf("\n");
    }
}