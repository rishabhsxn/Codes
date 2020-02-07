// RECURSIVE PROGRAM TO FIND POWER OF A NUMBER (integers), (positive power)

#include<stdio.h>

//function declaration
int power_num(int , int);

//take number and its power from user, pass it to power_num function
// also if ex < 0 , tell wrong input and take input again
int main()
{
  int num,ex;
  printf("In format (a)^b \nEnter a = ");
  scanf("%d",&num);
  do
  {
    printf("Enter b = ");
    scanf("%d",&ex);
    if(ex<0)
      printf("Invalid Input\n");
  }
  while(ex<0);

  printf("Result = %d\n",power_num(num,ex));
  return 0;
}

// multiply the num by power_num with arguements as num and (ex-1)
// termination condition is, when ex = 1, return num
// also if ex = 0, return 1
// also if num = 0, just return 0

int power_num(int num, int ex)
{
  if(num == 0)
    return 0;
  if(ex == 0)
    return 1;
  if(ex == 1)
    return num;

  return( num*power_num(num,ex-1) );
}
