//write a function to create Singly linked List
//calculate the mid of linked List
// take input data from user to insert in the middle

#include<stdio.h>
#include<malloc.h>

//Create basic structure for node
struct node
{
  int data;
  struct node *next;
};

typedef struct node NODE;

void createSll(NODE **, int);
void display(NODE *);
void insert_mid(NODE *, int, int);


void main()
{
  NODE *first = 0;
  int size=0;
  printf("Creating Singly linked list\n");
  do
  {
    printf("Input the number of nodes (3 or more) : ");
    scanf("%d",&size);
    if(size<3)
      printf("Invalid Input, Enter Again....\n");
  } while(size < 3);

  createSll(&first, size);
  display(first);

  int num;
  printf("Input data to insert in the middle of the list : ");
  scanf("%d",&num);

  insert_mid(first,size,num);
  printf("Insertion Completed successfully.\n");

  printf("The new list are : \n");
  display(first);

}

//Use pointer of pointer to store address of first node in the main function
void createSll(NODE **f, int size)
{
  NODE *temp=0, *l=0;
  int i = 1;

  for(int k = 1; k<= size ; k++)
  {
    l = (NODE*) malloc(sizeof(NODE));
    printf("Input data for node %d : ",k);
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
  }

  l->next = NULL;
}

void insert_mid(NODE *first, int size, int num)
{
  int bef_mid = size/2;
  printf("Position to insert new node : %d\n",(bef_mid+1));

  NODE *ins = 0;
  ins = (NODE *) malloc(sizeof(NODE));
  ins->data = num;

  for(int i = 1; i<bef_mid; i++)
  {
    first = first->next;
  }

  ins->next = first->next;
  first->next = ins;
}

//Display the Singly linked list by passing the content to the pointer 'first' of main,
// but dont use pointers of pointers, otherwise we will lose the value of pointer 'first'
void display(NODE *first)
{
  while(first != NULL)
  {
    printf("Data = %d\n",first->data);
    first = first->next;
  }
}
