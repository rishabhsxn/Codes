// Header file for implementing stack using ARRAY storing Node pointers

#include<stdio.h>
#include<stdlib.h>

// already defined in queueUsingArray.h
// struct Node{
//     struct Node *lChild;
//     char data;
//     struct Node *rChild;
// };

struct Stack{
    int size;
    int top;
    struct Node **s;
};

struct Stack* createStack(int);        // returns the address of the stack
// void displayStack(struct Stack *);
int push(struct Stack *, struct Node *);          // returns 0, if push is successful otherwise -1
struct Node * pop(struct Stack *);                // returns NULL if stack is empty
int isFull_Stack(struct Stack *);             // return 1 if stack is full otherwise 0
int isEmpty_Stack(struct Stack *);            // returns 1 if stack is empty otherwise 0


struct Stack * createStack(int size){
    struct Stack *S = (struct Stack *)malloc(sizeof(struct Stack));
    S->size = size;
    S->top = -1;
    S->s = (struct Node **)malloc(S->size*sizeof(struct Node *));

    return S;
}

int isFull_Stack(struct Stack *S){
    if(S->top == S->size-1)
        return 1;
    
    return 0;
}

int isEmpty_Stack(struct Stack *S){
    if(S->top == -1)
        return 1;

    return 0;
}

int push(struct Stack *S, struct Node *node){
    if(isFull_Stack(S)){
        printf("\nStack Overflow. Push operation failed\n");
        return -1;
    }
    else{
        S->top++;
        S->s[S->top] = node;
        return 0;
    }
}

struct Node * pop(struct Stack *S){
    if(isEmpty_Stack(S))
        return NULL;

    struct Node *node = S->s[S->top];
    S->top--;
    return node;
}

// void displayStack(struct Stack *S){
//     if(S->top == -1)
//         printf("\nStack is Empty!!\n");
//     else{
//         int topTemp = S->top;
//         printf("\n");
//         while(topTemp>=0){
//             if(topTemp==0)
//                 printf("|_%d_|\n",S->s[topTemp]);
//             else
//                 printf("| %d |\n",S->s[topTemp]);

//             topTemp--;
//         }
//         printf("\n");
//     }
// }