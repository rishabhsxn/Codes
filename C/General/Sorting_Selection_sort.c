//PROGRAM TO PERFORM SELECTION SORT

/* we traverse the whole array and find the smallest element and place it at
   index 0 by swapping, then leaving the index 0 element, find the smallest
   element and swap it at index 1, now leaving index 0 and 1, find the smallest
   element and put it at index 2 and so on till (size-1) */
// basically we have two sub-arrays, one sorted subarray and another unsorted subarray

#include<stdio.h>

void swap(int *, int *);                           // worst case = O(n^2)
void selection_sort(int *, int);                   // best case = O(n^2)
void print_array(int *, int);                      // average case = O(n^2)

void main()
{
  int size;
  printf("Enter size of array = ");
  scanf("%d",&size);
  int arr[size];
  printf("Enter %d elements = ",size);
  for(int i =0; i<size; i++)
     scanf("%d",&arr[i]);

  printf("Your array : ");
  print_array(arr,size);

  selection_sort(arr,size);

  printf("After sorting, array : ");
  print_array(arr,size);
}

void selection_sort(int arr[], int size)
{
  if(size==0)
    printf("Empty array, cannot sort\n");
  else if(size==1)
    printf("Single element in array, can not sort\n");
  else
  {
    int min, flag=0;
    for(int i = 0; i<size-1;i++)     //outer loop increase the index of sorted sub-array
    {
      min = arr[i];                     //stores 1st element of unsorted sub-array
      for(int j = i; j<size-1; j++)   //inner loop checks the unsorted sub-array for smallest element
      {
        if(arr[j+1] < min)
        {
          min = arr[j+1];          //smallest element is stored
          flag = j+1;              // index of smallest element is stored for swapping purpose
        }
      }
      if(arr[i] != min)           // ***Swapping will occur only if the last element of sorted sub-array
        swap(arr+i, arr+flag);      // is not already the smallest element ***
    }
  }
}

void swap(int *x, int *y)
{
  int temp = *x;
  *x = *y;
  *y = temp;
}

void print_array(int arr[], int size)
{
  for(int i=0; i<size; i++)
    printf("%d ",arr[i]);
  printf("\n");
}
