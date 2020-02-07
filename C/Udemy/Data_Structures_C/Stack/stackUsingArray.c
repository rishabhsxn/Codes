// we will be implementing stack using structure and array.

#include<stdio.h>
#include<stdlib.h>

struct Stack{
    int size;
    int top;
    int *arr;
};

struct Stack* createStack(int);        // returns the address of the stack
void displayStack(struct Stack *);
void push(struct Stack *, int);          // returns 0, if push is successful otherwise -1
int pop(struct Stack *);                // returns -__INT16_MAX__ if stack is empty
int isFull(struct Stack *);             // return 1 if stack is full otherwise 0
int isEmpty(struct Stack *);            // returns 1 if stack is empty otherwise 0

int main(){

    int size1;
    printf("Enter size of stack: ");
    scanf("%d",&size1);

    struct Stack *s1 = createStack(size1);

    for(int i=1; i<7; i++)
        push(s1, i);
        
    // push(s1, 1);
    // push(s1, 2);
    // push(s1, 3);
    // push(s1, 4);
    // push(s1, 5);

    // int x = pop(s1);
    // if(x == -__INT16_MAX__)
    //     printf("\nStack Empty!!\n");
    // else
    //     printf("Popped number: %d\n", x);
    
    displayStack(s1);

    return 0;
}


struct Stack * createStack(int size){
    struct Stack *s = (struct Stack *)malloc(sizeof(struct Stack));
    s->size = size;
    s->top = -1;
    s->arr = (int *)malloc(s->size*sizeof(int));

    return s;
}

int isFull(struct Stack *s){
    if(s->top == s->size-1)
        return 1;
    
    return 0;
}

int isEmpty(struct Stack *s){
    if(s->top == -1)
        return 1;

    return 0;
}

void push(struct Stack *s, int key){
    if(isFull(s)){
        printf("\nStack Overflow. Push operation failed\n");
    }
    else{
        s->top++;
        s->arr[s->top] = key;
    }
}

int pop(struct Stack *s){
    if(s->top == -1)
        return -__INT16_MAX__;

    int key = s->arr[s->top];
    s->top--;
    return key;
}

void displayStack(struct Stack *s){
    if(s->top == -1)
        printf("\nStack is Empty!!\n");
    else{
        int topTemp = s->top;
        printf("\n");
        while(topTemp>=0){
            if(topTemp==0)
                printf("|_%d_|\n",s->arr[topTemp]);
            else
                printf("| %d |\n",s->arr[topTemp]);

            topTemp--;
        }
        printf("\n");
    }
}