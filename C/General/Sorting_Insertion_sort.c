#include<stdio.h>

void insertionSort(int *, int);
void printArray(int *, int);

int main()                                        // worst case =  O(n^2)
{                                                 // best case = O(n)
    int size;                                     // average case = O(n^2)
    printf("Enter size of array = ");
    scanf("%d",&size);
    int arr[size];
    printf("Enter %d elements = ",size);
    for(int i =0; i<size; i++)
       scanf("%d",&arr[i]);

    printf("Your array : ");
    printArray(arr,size);

    insertionSort(arr, size);

    printf("\n\nAfter sorting : ");
    printArray(arr, size);

    return 0;
}


void insertionSort(int arr[], int n)
{
   int i, key, j;
   for (i = 1; i < n; i++)
   {
       key = arr[i];
       j = i-1;

       /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
       while (j >= 0 && arr[j] > key)
       {
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key;
   }
}


void printArray(int arr[], int n)
{
   int i;
   for (i=0; i < n; i++)
       printf("%d ", arr[i]);
   printf("\n");
}
