// find missing element from the given array - elements must be sorted
// only single missing element, but multiple elements can be missing given that they are not continuous
// idea is to observe difference b/w no. and index, if difference remains constant, no missing otherwise no. is missing

#include<stdio.h>

int main(){
    int arr[] = {5, 6, 7, 9, 10, 12};
    int length = 6;

    int diff;
    for(int i=0; i<length; i++){
        if(i==0)
            diff = arr[i] - i;
        else{
            int newDiff = arr[i] - i;
            if(newDiff == diff)
                continue;
            printf("Missing: %d\n",arr[i-1]+1);
            diff = newDiff;
            
        }
    }
    return 0;
}