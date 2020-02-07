// PROGRAM TO IMPLEMENT STACK USING ARRAY

#include<stdio.h>

//function declaration for pop and push and display stack
void push(int);  //insertion in stack
int pop();  // deletion in stack
void display(); // display the stack
int isFull();  // check if stack if full
int isEmpty(); // check if stack if empty

// outside main create stack using array and perform pop and push
int stack[20], tos = -1, flag1=0; //global scope
//its values will change after each function call

// inside main check if the stack is empty before pop
// also check if the stack is full before push
// use do while and switch
void main()
{
  int choice=0, flag=0;
  do
  {
    printf("1.Insert in stack(push)\n2.Delete top element of stack (pop)\n3.Check if stack is Full\n4.Check if stack is Empty\n5.Exit\n");
    scanf("%d", &choice);

    switch(choice)
    {
      case 1 : printf("Enter number to insert ");
               int num;
               scanf("%d", &num);
               push(num);
               printf("Now stack\n");
               display();
               printf("\n");
      break;

      case 2 : printf("\n");
               int number;
               number = pop();
               if(flag1==0)
               {
                 printf("Deleted element = %d\n", number);
                 printf("Now stack\n");
               }

               display();
               printf("\n");
      break;

      case 3 : printf("\n");
               if(isFull())
                 printf("   ***Stack is Full***\n\n");
               else
                 printf("   ***Stack is not Full***\n\n");
      break;

      case 4 : printf("\n");
               if(isEmpty())
                 printf("  ***Stack is Empty***\n\n");
               else
                 printf("   ***Stack is not Empty***\n\n");
      break;

      case 5 :
      break;

      default : flag = 1;
                printf("    Wrong input!!!\n   Enter again....\n\n");
    }
  } while(choice == 1 || choice == 2 || choice == 3 || choice == 4 || flag==1);

   printf("   ***PROGRAM CLOSED***\n\n");

}

//definition of pop and push functions
void push(int num)
{
  if(tos == 19)
    printf("   ***Stack is Full***\n");
  else
  {
    tos++;
    stack[tos] = num;
  }
}

int pop()
{
  if(tos == -1)
  {
    printf("   ***Stack is Empty***\n");
    flag1=1;
    return NULL;
  }

  tos--;
  return stack[tos+1];
}

void display()
{
  if(tos >= 0)
  {
    int j;
    for(j=tos;j>=0;j--)
    {
        printf("|  %d  |\n",stack[j]);
        if(j == 0)
           printf("|_____|\n");
    }

  }
}

int isFull()
{
  if(tos == 19)
    return 1;
  return 0;
}

int isEmpty()
{
  if(tos == -1)
    return 1;
  return 0;
}
