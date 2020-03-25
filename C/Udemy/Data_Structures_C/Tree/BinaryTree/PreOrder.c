// This program displays the Pre-oder of a Binary tree stored using Linked Nodes - Recursive and Iterative

#include<stdio.h>
#include<stdlib.h>

#include"LinkedNodes.h"
#include"stackUsingArray.h"

#define defaultStackSize 20 

void preOrderRecursive(struct Node *);
void preOrderIterative(struct Node *); // the iterative method requires stack to backtrack nodes


int main(){
    // create a binary tree
    struct Node *root = createTree();

    // find and display Pre-order (recursive)
    printf("\n***Recursive method***\n");
    printf("Pre-order: ");
    preOrderRecursive(root);
    printf("\n");


    // find and display Pre-order (iterative)
    printf("\n***Iterative method***\n");
    preOrderIterative(root);

    return 0;
}


void preOrderRecursive(struct Node *node){
    if(node!=NULL){
        printf("%c ",node->data);
        preOrderRecursive(node->lChild);
        preOrderRecursive(node->rChild);
    }
}

void preOrderIterative(struct Node *root){
    struct Stack *S = createStack(defaultStackSize);

    struct Node *temp = root;
    printf("Pre-order: ");
    while(!isEmpty_Stack(S) || temp!=NULL){

        if(temp!=NULL){
            printf("%c ",temp->data);
            int x = push(S, temp);

            if(x==-1){
                printf("Cannot push node pointer in stack\n");
                break;
            }

            temp = temp->lChild;
        }
        else{
            temp = pop(S);
            if(temp!=NULL)
                temp = temp->rChild;
        }
    }
    printf("\n\n");
}