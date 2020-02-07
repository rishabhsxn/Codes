// RECURSIVE PROGRAM TO FIND SUM OF DIGITS OF A NUMBER

#include<stdio.h>

//function declaration
int sum_dig(int);

// take a number from user and call the recursive sum function from main
// also if the number is negative, take its positive value
void main()
{
  int num, sum;
  printf("Enter a number : ");
  scanf("%d",&num);
  if(num < 0)
    num = -num;
  sum = sum_dig(num);
  printf("The Sum of digits of entered number = %d\n",sum);
}

// recursive sum function takes and integer and returns an integer
// in each call separate the last digit by mod of 10 and return it
// and pass the number by removing its last digit by division by 10
/* the termination condition is, if the received integer is less than 10,
   then return it as it is. */
int sum_dig(int num)
{
  if(num < 10)
    return num;

  return ( (num % 10) + sum_dig(num/10) );
}
