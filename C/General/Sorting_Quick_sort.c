// PROGRAM TO DEMONSTRATE QUICK SORT ALGORITHM

/* in this sorting method we select an element of array(call it pivot)
   then we put the elements that are smaller than pivot to its left
   and elements greater than pivot, to right of pivot. This is called
   partition. Now repeat the same for both partitions. */
//we can select first, last or random element of array as PIVOT.
// in this program, using last element as pivot.

#include<stdio.h>                                                                    //worst case = O(N^2)
                                                                                    //best case = O(NlogN)
// function declaration                                                             //average case = O(NlogN)
// quicksort(array pointer, lowerbound, upperbound)
void quicksort(int *, int, int);
void swap(int *,int *);

//inside main take array from user
// pass the array pointer, upper and lower bound to the quicksort function
void main()
{
  int size, lb=0 ,ub;
  printf("Enter size of array = ");
  scanf("%d",&size);
  int arr[size];
  ub = size - 1;
  printf("Enter %d elements = ",size);
  for(int i=0 ; i<size ; i++)
    scanf("%d",&arr[i]);

  printf("Your Array : ");
  for(int i=0; i<size ; i++)
    printf("%d ",arr[i]);

  quicksort(arr,lb,ub);

  printf("\n\nAfter sorting : ");
  for(int i=0; i<size; i++)
    printf("%d ",arr[i]);
}

//inside quicksort select the last element as PIVOT
//we take two variables - one is loop variable, other is index of smaller element(initially lb-1)
/* start from (lowerbound + 1) , compare
   if it is larger than pivot ,then perform no action.
   if it is smaller, then increment index of smaller element and swap it
   with the element at that position */
//stop when loop variable reaches pivot element index
//swap pivot element with element at (index of smaller element + 1)
//repeat the same for both partitions using recursion
void quicksort(int ar[], int lb, int ub)
{
  if(lb < ub)
  {
    int i,s=lb-1,pv=ub;
    for(i=lb; i<ub ; i++)
    {
      if(ar[i]<ar[pv])
      {
        if(i==lb)
          s++;
        else
        {
          s++;
          swap(ar+s,ar+i);
        }
      }
    }
    //printf("Loop Ended\n");
    swap(ar+s+1,ar+pv);
    quicksort(ar,lb,s);
    //printf("1st quicksort ended\n");
    quicksort(ar,s+2,ub);
  }
}

void swap(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}
