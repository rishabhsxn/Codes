#include<stdio.h>

int main(){
    int integer = 10;

    char string[4];

    sprintf(string, "%d.", integer);   // also appends dot at end of the integer
    printf("our string: %s\n",string);


    return 0;
}