// Recursive and Iterative methods for Post-Order traversal  (Post-order = left, right, root)
// The iterative method is little bit different and tricky than PreOrder & InOrder iterative methods

//****************************************************** IMPORTANT ****************************************************************

/* In the iterative method, we will need the parent node's address two times, 1st for going to right child and 2nd for printing the
parent node's data after completing the right subtree */
/* So first time push the pointer normally, but on the 2nd time push the negative value of the address, so that when popping
the pointers from stack, we can differentiate when to go to right child and when to print data */

// *********************************************************************************************************************************


#include<stdio.h>
#include<stdlib.h>

#include"LinkedNodes.h"
#include"stackUsingArray.h"

#define defaultStackCapacity 20

void postOrderRecursive(struct Node *);
void postOrderIterative(struct Node *);

int main(){

    struct Node *root = createTree();

    printf("\n***Recursive method***\n");
    printf("Post-order: ");
    postOrderRecursive(root);
    printf("\n");


    printf("\n***Iterative method***\n");
    postOrderIterative(root);

    return 0;
}


void postOrderRecursive(struct Node *node){
    if(node){
        postOrderRecursive(node->lChild);
        postOrderRecursive(node->rChild);
        printf("%c ",node->data);
    }
}


void postOrderIterative(struct Node *root){
    struct Stack *S = createStack(defaultStackCapacity);

    int long addressInInt;  // this variable will hold the address(negative also), because simple pointer can't be negative

    struct Node *node = root;
    printf("Post-order: ");
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
            addressInInt = (int long) pop(S);   // type cast into node pointer before using(dereferencing) it.
            if(addressInInt<0){
                node = (struct Node *)(-addressInInt);
                printf("%c ",node->data);
                node = NULL;
            }
            else{
                node = (struct Node *) addressInInt;
                push(S, (struct Node *)(-addressInInt));
                node = node->rChild;
            }
        }
    }
    printf("\n\n");
}