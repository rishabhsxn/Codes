#include<stdio.h>

void swap(int *, int *);

void main()
{
  int ar[] = {1,2,3,5};
  swap(ar+0,ar+3);
  for(int i=0;i<4;i++)
  {
    printf("%d ",ar[i]);
  }

}

void swap(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}
