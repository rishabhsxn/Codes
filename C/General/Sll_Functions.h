//PROGRAM TO CREATE AND DISPLAY A SINGLY LINKED LIST THROUGH POINTERS


#include<stdio.h>
#include<malloc.h>

//Create basic structure for node
struct node
{
  int data;
  struct node *next;
};

typedef struct node NODE;

void createSll(NODE **);
void display(NODE *);

//Use pointer of pointer to store address of first node in the main function
void createSll(NODE **f)
{
  NODE *temp=0, *l=0;
  int i = 1;
  char choice = 'Y';
  printf("Creating Singly linked list\n");
  while(choice == 'Y' || choice == 'y')
  {
    l = (NODE*) malloc(sizeof(NODE));
    printf("Enter number = ");
    scanf("%d",&l->data);
    if(i==1)
    {
      *f=temp=l;
      i=0;
    }
    else
    {
      temp->next = l;
      temp=l;
    }
    printf("Continue? (y/n)    ");
    scanf(" %c",&choice);    // **IMP** scanf for %c also treat enter as a character, so add space before %c
  }

  l->next = NULL;
}

//Display the Singly linked list by passing the content to the pointer 'first' of main,
// but dont use pointers of pointers, otherwise we will lose the value of pointer 'first'
void display(NODE *first)
{
  while(first != NULL)
  {
    printf("%d => ",first->data);
    first = first->next;
  }
  printf("NULL\n");
}
