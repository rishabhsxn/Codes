
// C program for implementation of Bubble sort
#include <stdio.h>

void swap(int *, int*);
void bubbleSort(int *, int);
void printArray(int *, int);

// Driver program to test above functions                 // worst case = O(n*n)
int main()                                                // best case = O(n)
{                                                         // average case = O(n*n)
  int size;
  printf("Enter size of array = ");
  scanf("%d",&size);
  int arr[size];
  printf("Enter %d elements = ",size);
  for(int i =0; i<size; i++)
     scanf("%d",&arr[i]);

  printf("Your array : ");
  printArray(arr,size);

  bubbleSort(arr, size);

  printf("\nAfter sorting : ");
  printArray(arr, size);

  return 0;
}

void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
   int i, j;
   for (i = 0; i < n-1; i++)

       // Last i elements are already in place
       for (j = 0; j < n-i-1; j++)
           if (arr[j] > arr[j+1])
              swap(&arr[j], &arr[j+1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
