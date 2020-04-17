#include<stdio.h>
#include<stdlib.h>
#include"../BinaryTree/LinkedNodes.h"       // To use the displayBinaryTree() method


struct Node_Int * creation_BST_Int();       // returns the address of the root node
void insert_BST_recursive_Int(struct Node_Int *, int);
void insert_BST_iterative_Int(struct Node_Int *, int);
struct Node_Int * search_BST_Int(struct Node_Int *, int);
int delete_BST_Int(struct Node_Int **, int);        // 0 = unsuccessful as element does not exist in tree
struct Node_Int * get_InorderPredecessor(struct Node_Int *);    // removes the predecessor and maintain the tree
struct Node_Int * get_InorderSuccessor(struct Node_Int *);      // removes the successor and maintain the tree

int main(){
    printf("\n-----------------------------Creating BST-----------------------------\n\n");
    struct Node_Int *root = creation_BST_Int();

    // displayBinaryTree_Int(root);

    int choice = 1;
    do{
        printf("\n----------------------------------------------------------------------");
        printf("\nSelect an option:\n1. Insert in BST\n2. Display BST\n3. Search for an element\n4. Delete an element\n5. Terminate\n\n");
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
                printf("Key to delete: ");
                scanf("%d", &num);
                delete_BST_Int(&root, num);
                break;
            case 5:
                printf("\nTerminating.....\n");
                break;
            default:
                printf("\nInvalid selection!!\n");
        }

    }while(choice!=5);

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

int delete_BST_Int(struct Node_Int **root, int key){
    if(!(*root)){
        printf("\nTree is empty!!\n\n");
        return 0;
    }

    // search the key
    struct Node_Int *temp = *root;
    struct Node_Int *parent = temp;
    int flagDeleteRoot = 0, flagLeftChild=0, flagRightChild=0;

    while(temp){
        if(key == temp->data){
            // delete the node

            // check if the node to be deleted is a leaf node
            if(!(temp->lChild) && !(temp->rChild)){
                if(flagLeftChild)
                    parent->lChild = NULL;
                else
                    parent->rChild = NULL;
                
                free(temp);
                return 1;
            }

            // check if the node to be deleted is root
            if(temp == *root)
                flagDeleteRoot = 1;

            // get predecessor
            struct Node_Int *replacement = get_InorderPredecessor(temp);

            // if no predecessor, get the successor
            if(!replacement){
                printf("\n\n******Predecessor not found, going for Successor******\n\n");
                replacement = get_InorderSuccessor(temp);
            }
            else
                printf("\n\n******Predecessor found: %d******\n\n",replacement->data);            

            // check if replacement is node's lChild or rChild or neither
            if(replacement == temp->lChild)
                replacement->rChild = temp->rChild;
            else if(replacement == temp->rChild)
                replacement->lChild = temp->lChild;
            else{
                replacement->lChild = temp->lChild;
                replacement->rChild = temp->rChild;
            }


            // root is to be deleted, so change the value of root to new root
            if(flagDeleteRoot){
                printf("\nRoot is to be deleted...Pointing root to newRoot\n");
                free(*root);
                *root = replacement;
            }
            else{
                // check temp is parent's lChild or rChild
                free(temp);
                if(flagLeftChild)
                    parent->lChild = replacement;
                else
                    parent->rChild = replacement;
            }
            

            return 1;
        }
        else if(key < temp->data){
            parent = temp;
            temp = temp->lChild;
            flagLeftChild = 1;
            flagRightChild = 0;
        }
        else{
            parent = temp;
            temp = temp->rChild;
            flagLeftChild = 0;
            flagRightChild = 1;
        }
    }

    // key not found
    printf("\nkey not found!!\n\n");
    return 0;
}

struct Node_Int * get_InorderPredecessor(struct Node_Int *node){
    if(!(node->lChild)){
        // no inorderPredecessor
        printf("****no predecessor****\n");
        return NULL;
    }

    struct Node_Int *follower;  // needed to fill the gap that will be created because of removing of predecessor
    follower = node;
    node = node->lChild;


    // if the lChild of node don't have rChild, then it will be the predecessor
    if(node->rChild == NULL)
        return node;

    while(node->rChild){    // go to extreme right
        follower = node;
        node = node->rChild;
    }

    // check if predecessor has own left child (right child not possible)
    if(node->lChild)
        follower->rChild = node->lChild;
    else
        follower->rChild = NULL;

    return node;
}

struct Node_Int * get_InorderSuccessor(struct Node_Int *node){
    if(!(node->rChild)){
        // no inorderSuccessor
        printf("****no succcessor****\n");
        return NULL;
    }

    struct Node_Int *follower;  // needed to fill the gap that will be created because of removal of successor
    follower = node;
    node = node->rChild;


    // if the rChild of node don't have lChild, then it will be the succcessor
    if(node->lChild == NULL)
        return node;

    while(node->lChild){    // go to extreme left
        follower = node;
        node = node->lChild;
    }

    // check if successor has own right child (left child not possible)
    if(node->rChild)
        follower->lChild = node->rChild;
    else
        follower->lChild = NULL;

    return node;
}