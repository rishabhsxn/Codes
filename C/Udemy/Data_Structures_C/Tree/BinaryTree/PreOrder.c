// This program displays the Pre-oder of a Binary tree stored using Linked Nodes - Recursive and Iterative

#include<stdio.h>
#include<stdlib.h>

#include"LinkedNodes.h"
#include"stackUsingArray.h"

#define defaultStackSize 20 

void preOrderRecursive_Char(struct Node_Char *);
void preOrderIterative_Char(struct Node_Char *); // the iterative method requires stack to backtrack nodes


int main(){
    // create a binary tree
    struct Node_Char *root = createTree_Char();

    // find and display Pre-order (recursive)
    printf("\n***Recursive method***\n");
    printf("Pre-order: ");
    preOrderRecursive_Char(root);
    printf("\n");


    // find and display Pre-order (iterative)
    printf("\n***Iterative method***\n");
    preOrderIterative_Char(root);

    return 0;
}


void preOrderRecursive_Char(struct Node_Char *node){
    if(node!=NULL){
        printf("%c ",node->data);
        preOrderRecursive_Char(node->lChild);
        preOrderRecursive_Char(node->rChild);
    }
}

void preOrderIterative_Char(struct Node_Char *root){
    struct Stack_Char *S = createStack_Char(defaultStackSize);

    struct Node_Char *temp = root;
    printf("Pre-order: ");
    while(!isEmpty_Stack_Char(S) || temp!=NULL){

        if(temp!=NULL){
            printf("%c ",temp->data);
            int x = push_Char(S, temp);

            if(x==-1){
                printf("Cannot push node pointer in stack\n");
                break;
            }

            temp = temp->lChild;
        }
        else{
            temp = pop_Char(S);
            if(temp!=NULL)
                temp = temp->rChild;
        }
    }
    printf("\n\n");
}