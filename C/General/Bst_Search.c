//PROGRAM TO SEARCH AN  ELEMENT IN THE USER DEFINED BST
#include<stdio.h>
#include"Dll_Functions.h"

void search_bst(NODE *, int);

void main()
{
  //create bst
  NODE *first=0, *last=0;
  printf("Enter Node data of tree in in-order\n");
  create_Dll(&first, &last);
  printf("The BST Tree in in-order is\n");
  display_Dll(first);
  printf("no. to search = ");
  int data;
  scanf("%d",&data);
  search_bst(first,data);
}

void search_bst(NODE *first, int data)
{
  
}
