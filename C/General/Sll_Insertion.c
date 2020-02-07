//PROGRAM TO PERFORM INSERTION IN SINGLY LINKED LIST

#include"Sll_Functions.h"   //using existing functions to create and display singly linked list
#include<stdio.h>
#include<malloc.h>

void insert_first(NODE **,NODE *);
void insert_last(NODE **,NODE *);
void insert_after(NODE **,NODE *);
void insert_before(NODE **,NODE *);

//Create a linked list and ask what kind of insertion user want to perform (use switch)
void main()
{
  NODE *first=0;
  createSll(&first);
  display(first);
  int flag=0;

  //check if the linked list is empty
  if(first==NULL)
  {
     printf("Empty Linked List.\nCannot Insert node\n");
     flag = 1;
  }


  if(flag==0)
  {
    //take value to insert
    int val;
    printf("Enter value to be inserted =  ");
    scanf("%d", &val);

    //Create Node and add data to it
    NODE *ins;
    ins = (NODE *) malloc(sizeof(NODE));
    ins->data=val;

    int k;
    //use switch to select what type of action user want to perform
    //use goto in switch to again show the list of actions if user enter wrong input
    l:
    printf("1.Insert at beginning\n2.Insert at last\n3.Insert after an element\n4.Insert before an element\n");
    scanf("%d",&k);
    switch(k)
     {
       case 1 : insert_first(&first,ins);
       break;

       case 2 : insert_last(&first,ins);
       break;

       case 3 : insert_after(&first,ins);
       break;

       case 4 : insert_before(&first,ins);
       break;

       default :  printf("Wrong selection\n");
       goto l;
     }
   }
   printf("\nFinally Linked list is \n");
    display(first);
}

//funtion to insert at first position
//we had to pass pointer of pointer because we now have to redefine the address of "first" node
void insert_first(NODE **first, NODE *ins)
{
  ins->next= *first;
  *first=ins;
}

//function to insert at last
void insert_last(NODE **first,NODE *ins)
{
  NODE *temp;
  temp= *first;
  //move the pointer temp to last node
  while(temp->next!=NULL)
  {
    temp=temp->next;
  }
  //connect our new node to last node of existing linked list and put null and end
  temp->next=ins;
  temp->next->next=NULL;
}

//function to insert after a number, assuming the number is only present once
void insert_after(NODE **first,NODE *ins)
{
  int aft;
  //ask the value after which you want to insert
  printf("After what value you want to insert? \n");
  scanf("%d", &aft);
  NODE *temp = *first;
  //use the pointer temp to check the linked list if the value is present or not
  //if present stop the pointer on that node and connect our created node ins
  //also add the condition if number is not present then stop when null is encountered
  while(temp->data!=aft && temp->next!=NULL)
  {
    temp=temp->next;
  }

  //remember the order of operations
  //this will also work if number is present at last, no need to add null at end
  if(temp->data==aft)
  {
    ins->next=temp->next;
    temp->next=ins;
  }
  else
    printf("Number not present\n");
}

//function to insert before a number
void insert_before(NODE **first,NODE *ins)
{
  int bef;
  printf("Before what value you want to insert? \n");
  scanf("%d", &bef);
  NODE *temp = *first;
  //check if the number is present at first node
  if(temp->data==bef)
  {
    ins->next=temp;
    *first=ins;
  }

  else
  {
    //stop the pointer temp before the node in which number is present
    //remember to stop pointer temp before reaching the last node, otherwise OutOfBound error will occur
    while(temp->next->data!=bef && temp->next->next!=NULL)
    {
      temp=temp->next;
    }

    if(temp->next->data==bef)
    {
      ins->next=temp->next;
      temp->next=ins;
    }
    else
      printf("Number not present\n");
  }

}
