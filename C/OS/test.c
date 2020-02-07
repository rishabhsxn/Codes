#include<stdio.h>
#include<string.h>
#include<stdlib.h>

void main()
{
  char a[4]="";
  printf("%s\n",a);
  char b[10];
  //int x = 10;
  sprintf(b, "%d", 42);
  strcat(a,b);
  printf("%s\n",a);
}
