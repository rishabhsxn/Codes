// We can generate a BST from only Pre-order, there are two ways -
// 1. Sort the keys in ascending order, that is the InOrder, using InOrder and Preorder BST can be generated
// 2. Generating BST only from Preorder using a STACK
// PreOrder = Root, Left, Right


#include<stdio.h>
#include<stdlib.h>
#include"../BinaryTree/stackUsingArray.h"
#include"../BinaryTree/LinkedNodes.h"           // to access display function

#define defaultStackCapacity 40


struct Node_Int * bstFromPreorder(int [], int);         // returns the root of BST


int main(){
    printf("\n\n******************BST from Pre-Order******************\n\n");
    int n;
    printf("Enter number of keys: ");
    scanf("%d",&n);
    int keys[n];

    printf("Enter %d keys in Pre-Order: ",n);
    for(int i=0; i<n; i++)
        scanf("%d",&keys[i]);

    struct Node_Int *root = bstFromPreorder(keys, n);

    displayBinaryTree_Int(root);

    return 0;
}


struct Node_Int * bstFromPreorder(int keys[], int size){
    struct Stack_Int *stack_int = createStack_Int(defaultStackCapacity);
    int keypointer = 0;
    struct Node_Int *temp;

    struct Node_Int *root = (struct Node_Int *)malloc(sizeof(struct Node_Int));
    temp = root;
    root->data = keys[keypointer];
    root->lChild = root->rChild = NULL;
    keypointer++;


    while(keypointer<size){
        if(keys[keypointer] < temp->data){
            push_Int(stack_int, temp);          // we will need it later
            
            struct Node_Int *newChild = (struct Node_Int *)malloc(sizeof(struct Node_Int));
            newChild->data = keys[keypointer];
            newChild->lChild = newChild->rChild = NULL;

            temp->lChild = newChild;        // attach the lChild
            temp = newChild;            // move temp to this node
            keypointer++;
        }
        else if(keys[keypointer] > temp->data){
            struct Node_Int *previousNode = pop_Int(stack_int);
            push_Int(stack_int, previousNode);
            int newData;
            if(previousNode)
                newData = previousNode->data;
            else
                newData = __INT32_MAX__;            // if stack is empty, then compare the key with infinity

            if(keys[keypointer] < newData){
                struct Node_Int *newChild = (struct Node_Int *)malloc(sizeof(struct Node_Int));
                newChild->data = keys[keypointer];
                newChild->lChild = newChild->rChild = NULL;

                temp->rChild = newChild;
                temp = newChild;
                keypointer++;
            }
            else if(keys[keypointer] > newData){
                temp = pop_Int(stack_int);
            }
            else{
                printf("\n\nDuplicate value encountered\n\n");
                keypointer++;
            }
        }
        else{
            printf("\n\nDuplicate value encountered\n\n");
            keypointer++;
        }
    }

    return root;
}