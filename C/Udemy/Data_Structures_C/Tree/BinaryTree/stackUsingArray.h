// Header file for implementing stack using ARRAY storing Node pointers

#include<stdio.h>
#include<stdlib.h>

// already defined in queueUsingArray.h
// struct Node{
//     struct Node *lChild;
//     char data;
//     struct Node *rChild;
// };

struct Stack_Char{
    int size;
    int top;
    struct Node_Char **s;
};

struct Stack_Char* createStack_Char(int);        // returns the address of the stack
// void displayStack(struct Stack *);
int push_Char(struct Stack_Char *, struct Node_Char *);          // returns 0, if push is successful otherwise -1
struct Node_Char * pop_Char(struct Stack_Char *);                // returns NULL if stack is empty
int isFull_Stack_Char(struct Stack_Char *);             // return 1 if stack is full otherwise 0
int isEmpty_Stack_Char(struct Stack_Char *);            // returns 1 if stack is empty otherwise 0


struct Stack_Char * createStack_Char(int size){
    struct Stack_Char *S = (struct Stack_Char *)malloc(sizeof(struct Stack_Char));
    S->size = size;
    S->top = -1;
    S->s = (struct Node_Char **)malloc(S->size*sizeof(struct Node_Char *));

    return S;
}

int isFull_Stack_Char(struct Stack_Char *S){
    if(S->top == S->size-1)
        return 1;
    
    return 0;
}

int isEmpty_Stack_Char(struct Stack_Char *S){
    if(S->top == -1)
        return 1;

    return 0;
}

int push_Char(struct Stack_Char *S, struct Node_Char *node){
    if(isFull_Stack_Char(S)){
        printf("\nStack Overflow. Push operation failed\n");
        return -1;
    }
    else{
        S->top++;
        S->s[S->top] = node;
        return 0;
    }
}

struct Node_Char * pop_Char(struct Stack_Char *S){
    if(isEmpty_Stack_Char(S))
        return NULL;

    struct Node_Char *node = S->s[S->top];
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