#include<stdio.h>

struct Array{
    int *A;
};

int main(){

    int size=10, newSize=20;
    struct Array arr;
    int a[size];
    arr.A = a;    //A is of size 10

    int b[newSize];
    arr.A = b;    // A is now of size 20 and name remains same

    return 0;
}