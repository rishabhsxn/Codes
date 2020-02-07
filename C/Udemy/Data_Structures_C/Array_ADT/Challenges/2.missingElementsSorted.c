// write a program to find multiple missing elements from the array,
// given the starting element and the array should be sorted

#include<stdio.h>

int main(){

    int arr[] = {6, 7, 8, 10, 11, 12, 16, 17};
    int length = 8;

    int diff;
    for(int i=0; i<length; i++){
        if(i==0)
            diff = arr[i] - i;
        else{
            int newDiff = arr[i] - i;
            if(newDiff == diff)
                continue;
            
            int ddiff = newDiff - diff;
            diff = newDiff;

            for(int j=1; j<=ddiff; j++)
                printf("Missing: %d\n",arr[i-1]+j);
        }
    }
    return 0;
}