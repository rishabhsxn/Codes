//PROGRAM TO SEARCH A NUMBER IN A GIVEN SPECIAL TYPE OF ARRAY MOST EFFICIENTLY

#include<stdio.h>
void search(int * , int, int, int);
void main()
{
   int arr[] = {24,60,99,134,112,166};
   int lb,ub,val;
   lb = 0;
   ub = 5;
   printf("Enter number to search = ");
   scanf("%d",&val);
   search(arr,lb,ub,val);
}

void search(int b[], int lb, int ub, int val)
{
   int fl = ub/2;     //index of last element of first part of array
   if(val == b[fl])
      printf("The no. is at position = %d\n",(fl+1));

   else if(val > b[fl])    //performing linear search for second part
   {
      int i,flag=0;
      for(i = fl+1 ; i<=ub ; i++)
      {
	 if(val==b[i])
	 {
	    printf("The no. is at position = %d\n",i+1);
	    flag=1;
	    break;
	 }
      }

      if(flag==0)
	 printf("The number is not present\n");
   }

   else                   //performing binary search for first part
   {
      int j,mid,flag2=0;
      ub = fl;
      for(; lb<=ub ;)
      {
	 mid = (lb+ub)/2;

	 if(val == b[mid])
	 {
	    printf("The no. is at position = %d\n",mid+1);
	    flag2=1;
	    break;
	 }

	 else if(val>b[mid])
	    lb=mid+1;

	 else
	    ub=mid-1;
      }

      if(flag2==0)
	 printf("No. not found\n");
   }
}
