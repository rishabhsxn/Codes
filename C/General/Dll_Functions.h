// CREATES AND DISPLAY A DOUBLY LINKED LIST

#include<stdio.h>
#include<malloc.h>

struct node
{
   int data;
   struct node *prev;
   struct node *next;
};

typedef struct node NODE;
void display_Dll(NODE *);
void create_Dll(NODE **, NODE **);

//create a doubly linked list
//it place the first and last pointers to respective positions
void create_Dll(NODE **f, NODE **l)
{
   int i=1;
   NODE *first,*temp,*last;
   char choice='n';
   printf("Creating doubly linked list\n");
   printf("Do you want to enter a number in the Doubly linked list? [Y/N]   ");
   scanf("%c", &choice);
   if(choice=='Y' || choice=='y')
   {
     while(choice == 'Y' || choice == 'y')
     {
        last = (NODE *) malloc(sizeof(NODE));
        printf("Enter number = ");
        scanf("%d", &last->data);
        if(i==1)
        {
          first=temp=last;
	        first->prev = NULL;
	        i=0;
        }
        else
        {
          temp->next = last;
	        last->prev = temp;
	        temp=last;
        }
        printf("Continue? [y/n] :  ");
        scanf(" %c", &choice);   // **IMP** add space before %c otherwise it will take enter as a character
      }
      last->next= NULL;
      *f = first;
      *l = last;
    }

    else
    {
      *f=0;
      *l=0;
    }
}

void display_Dll(NODE *temp)
{
   if(temp==NULL)
     printf("The Doubly linked list is Empty\n");
   else
   {
     printf("The Doubly linked list  is = \n");
     while(temp!= NULL)
     {
        printf("%d => ",temp->data);
        temp = temp->next;
     }
     printf("NULL\n");
   }
}
