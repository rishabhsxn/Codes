// find the missing elements in an unsorted array
// in time complexities - O(n2) and O(n)(Hashtable/Bitset}

#include<stdio.h>

int min(int [], int);
int max(int [], int);
void hashing(int [],int );

int main(){
    int arr[] = {3, 7, 4, 9, 15, 6, 1, 11, 2, 10};
    int length = 10;
    
    hashing(arr, length);

    return 0;
}

int min(int arr[], int length){
    int min = arr[0];
    for(int i=1; i<length; i++){
        if(arr[i]<min)
            min = arr[i];
    }

    return min;
}

int max(int arr[], int length){
    int max = arr[0];
    for(int i=1; i<length; i++){
        if(arr[i] > max)
            max=arr[i];
    }
    return max;
}

void hashing(int arr[], int length){
    int ub = max(arr, length);
    int h[ub+1];
    for(int i=0 ; i<=ub; i++)
        h[i] = 0;
    int lb = min(arr, length);

    for(int i=0; i<length; i++)
        h[arr[i]]++;
    
    for(int i=lb; i<=ub; i++){
        if(h[i] == 0)
            printf("Missing: %d\n",i);
    }
    
}