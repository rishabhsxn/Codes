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

void postOrderRecursive_Char(struct Node_Char *);
void postOrderIterative_Char(struct Node_Char *);

int main(){

    struct Node_Char *root = createTree_Char();

    printf("\n***Recursive method***\n");
    printf("Post-order: ");
    postOrderRecursive_Char(root);
    printf("\n");


    printf("\n***Iterative method***\n");
    postOrderIterative_Char(root);

    return 0;
}


void postOrderRecursive_Char(struct Node_Char *node){
    if(node){
        postOrderRecursive_Char(node->lChild);
        postOrderRecursive_Char(node->rChild);
        printf("%c ",node->data);
    }
}


void postOrderIterative_Char(struct Node_Char *root){
    struct Stack_Char *S = createStack_Char(defaultStackCapacity);

    int long addressInInt;  // this variable will hold the address(negative also), because simple pointer can't be negative

    struct Node_Char *node = root;
    printf("Post-order: ");
    while(!isEmpty_Stack_Char(S) || node){

        if(node){
            int x = push_Char(S, node);
            if(x==-1){
                printf("Cannot push node pointer in stack\n");
                break;
            }
            node = node->lChild;
        }
        else{
            addressInInt = (int long) pop_Char(S);   // type cast into node pointer before using(dereferencing) it.
            if(addressInInt<0){
                node = (struct Node_Char *)(-addressInInt);
                printf("%c ",node->data);
                node = NULL;
            }
            else{
                node = (struct Node_Char *) addressInInt;
                push_Char(S, (struct Node_Char *)(-addressInInt));
                node = node->rChild;
            }
        }
    }
    printf("\n\n");
}