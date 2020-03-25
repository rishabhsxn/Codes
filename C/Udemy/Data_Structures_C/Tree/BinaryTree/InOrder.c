// recursive and Iterative methods for In-Order traversal  (In-order = left, root, right)

#include<stdio.h>
#include<stdlib.h>

#include"LinkedNodes.h"
#include"stackUsingArray.h"

#define defaultStackCapacity 20

void inOrderRecursive(struct Node *);
void inOrderIterative(struct Node *);

int main(){

    struct Node *root = createTree();

    printf("\n***Recursive method***\n");
    printf("In-order: ");
    inOrderRecursive(root);
    printf("\n");


    printf("\n***Iterative method***\n");
    inOrderIterative(root);

    return 0;
}


void inOrderRecursive(struct Node *node){
    if(node){
        inOrderRecursive(node->lChild);
        printf("%c ",node->data);
        inOrderRecursive(node->rChild);
    }
}


void inOrderIterative(struct Node *root){
    struct Stack *S = createStack(defaultStackCapacity);

    struct Node *node = root;
    printf("In-order: ");
    while(!isEmpty_Stack(S) || node){

        if(node){
            int x = push(S, node);
            if(x==-1){
                printf("Cannot push node pointer in stack\n");
                break;
            }
            node = node->lChild;
        }
        else{
            node = pop(S);
            if(node){
                printf("%c ",node->data);
                node = node->rChild;
            }
        }
    }
    printf("\n\n");
}