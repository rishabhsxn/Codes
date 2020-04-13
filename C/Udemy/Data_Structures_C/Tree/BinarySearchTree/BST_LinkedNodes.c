#include<stdio.h>
#include<stdlib.h>
#include"../BinaryTree/LinkedNodes.h"       // To use the displayBinaryTree() method


struct Node_Int * creation_BST_Int();       // returns the address of the root node
void insert_BST_recursive_Int(struct Node_Int *, int);
void insert_BST_iterative_Int(struct Node_Int *, int);
struct Node_Int * search_BST_Int(struct Node_Int *, int);


int main(){
    printf("\n-----------------------------Creating BST-----------------------------\n\n");
    struct Node_Int *root = creation_BST_Int();

    // displayBinaryTree_Int(root);

    int choice = 1;
    do{
        printf("\n----------------------------------------------------------------------");
        printf("\nSelect an option:\n1. Insert in BST\n2. Display BST\n3. Search for an element\n4. Terminate\n\n");
        scanf("%d", &choice);
        int num;
        switch(choice){
            case 1:
                printf("\nKey to insert: ");
                scanf("%d",&num);
                insert_BST_recursive_Int(root, num);
                break;
            case 2:
                displayBinaryTree_Int(root);
                break;
            case 3:
                printf("\nKey to search: ");
                scanf("%d",&num);
                struct Node_Int *result = search_BST_Int(root, num);
                break;
            case 4:
                printf("\nTerminating.....\n");
                break;
            default:
                printf("\nInvalid selection!!\n");
        }

    }while(choice!=4);

    return 0;
}


struct Node_Int * creation_BST_Int(){
    int size;
    printf("Enter no. of elements you want to Insert: ");
    scanf("%d",&size);
    if(size>0){
        struct Node_Int *root = (struct Node_Int *)malloc(sizeof(struct Node_Int));
        root->lChild = root->rChild = NULL;
        printf("Enter %d nodes: ",size);
        for(int i=0; i<size; i++){
            if(i==0)
                scanf("%d",&root->data);
            else{
                int num;
                scanf("%d",&num);
                insert_BST_iterative_Int(root, num);
            }
        }
        return root;
    }
    printf("Tree is empty...\n");
    return NULL;
}


void insert_BST_recursive_Int(struct Node_Int *node, int num){
    if(node){
        if(num==node->data){
            printf("duplicate detected\n");
            return;
        }
        else if(num < node->data){              // number is less than node
            if(node->lChild)                                // if left-subtree present, move to it
                insert_BST_recursive_Int(node->lChild, num);
            else{                                               // create a new node and add it to present node
                struct Node_Int *temp = (struct Node_Int *)malloc(sizeof(struct Node_Int));
                temp->lChild = temp->rChild = NULL;
                temp->data = num;
                node->lChild = temp;
                temp = NULL;
            }
        }
        else{                                   // number is greater than node
            if(node->rChild)
                insert_BST_recursive_Int(node->rChild, num);
            else{
                struct Node_Int *temp = (struct Node_Int *)malloc(sizeof(struct Node_Int));
                temp->lChild = temp->rChild = NULL;
                temp->data = num;
                node->rChild = temp;
                temp = NULL;
            }
        }
    }
    else{
        printf("\n----------Tree is empty!!----------\n");
        return;
    }
}


void insert_BST_iterative_Int(struct Node_Int *root, int num){
    if(!root){
        printf("\n----------Tree is empty!!----------\n");
        return;
    }
    struct Node_Int *temp = root;
    while(temp){
        if(num == temp->data){
            printf("Duplicate found\n");
            return;
        }
        else if(num < temp->data){
            if(temp->lChild)
                temp = temp->lChild;
            else{
                struct Node_Int *node = (struct Node_Int *)malloc(sizeof(struct Node_Int));
                node->lChild = node->rChild = NULL;
                node->data = num;
                temp->lChild = node;
                break;
            }
        }
        else{
            if(temp->rChild)
                temp = temp->rChild;
            else{
                struct Node_Int *node = (struct Node_Int *)malloc(sizeof(struct Node_Int));
                node->lChild = node->rChild = NULL;
                node->data = num;
                temp->rChild = node;
                break;
            }
        }
    }
}

struct Node_Int * search_BST_Int(struct Node_Int *root, int key){
    if(!root){
        printf("\nTree is empty... Searching Failed!!\n\n");
        return NULL;
    }
    struct Node_Int *result = root;

    while(result){
        if(key == result->data){
            printf("\nFound !\n\n");
            return result;
        }
        else if(key < result->data){
            result = result->lChild;
            if(!result){
                printf("\nElement not found!\n\n");
                return NULL;
            }
        }
        else{
            result = result->rChild;
            if(!result){
                printf("\nElement not found!\n\n");
                return NULL;
            }
        }
    }
}
