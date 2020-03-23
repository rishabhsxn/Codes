// this program stores binary tree using Linked Nodes
// this program uses Queue of type struct Node, which is implemented in the Header file
// we are creating the tree level by level (top to bottom)

#include<stdio.h>
#include<stdlib.h>
#include"queueUsingArray.h"

// because it is already declared in the Header File
// struct Node{
//     struct Node *lChild;
//     char data;
//     struct Node *rChild;
// };

struct Node * createTree(struct Queue);   // it will make own copy of Queue, use it and then discard it
void displayBinaryTree(struct Node *, struct Queue);


int main(){

    struct Queue *Q = createQueue();

    struct Node *root = createTree(*Q);
    displayBinaryTree(root, *Q);

    return 0;
}


struct Node * createTree(struct Queue Q){
    char rootData;
    printf("Root: ");
    scanf(" %c",&rootData);
    struct Node *root = (struct Node *)malloc(sizeof(struct Node));
    if(root==NULL){
        printf("No memory...root node can not be created!!\n");
        return NULL;
    }
    root->data = rootData;
    enqueue(&Q, root);

    struct Node *temp;

    printf("\n****if a node doesn't exist, enter @ when asked****\n\n");
    while(!isEmpty(Q)){

        temp = dequeue(&Q);

        if(temp==NULL){
            printf("Queue is empty\n");
            break;
        }

        // ask for left child and enqueue it's pointer
        char lChildData;
        printf("%c's left child: ",temp->data);
        scanf(" %c",&lChildData);

        if(lChildData != '@'){
            struct Node *lChild = (struct Node*)malloc(sizeof(struct Node));
            if(lChild==NULL){
                printf("No memory...node can't be created!!\n");
                return NULL;
            }
            lChild->data = lChildData;
            temp->lChild = lChild;
            int x = enqueue(&Q, lChild);
            if(x==-1)
                return NULL;
        }

        // ask for right child and enqueue it's pointer
        char rChildData;
        printf("%c's right child: ",temp->data);
        scanf(" %c",&rChildData);

        if(rChildData != '@'){
            struct Node *rChild = (struct Node *)malloc(sizeof(struct Node));
            if(rChild==NULL){
                printf("No memory...node can't be created!!\n");
                return NULL;
            }
            rChild->data = rChildData;
            temp->rChild = rChild;
            int x = enqueue(&Q, rChild);
            if(x==-1)
                return NULL;
        }
    }

    return root;
}


void displayBinaryTree(struct Node *root, struct Queue Q){
    printf("\n\n--------------------Displaying Tree-------------------\n\n");
    struct Node *temp;
    enqueue(&Q, root);

    printf("Root ");
    while(!isEmpty(Q)){
        temp = dequeue(&Q);
        printf("Node: %c\n",temp->data);

        struct Node *lChild = temp->lChild;
        if(lChild!=NULL){
            printf("left child: %c\n",lChild->data);
            enqueue(&Q, lChild);
        }

        struct Node *rChild = temp->rChild;
        if(rChild!=NULL){
            printf("right child: %c\n",rChild->data);
            enqueue(&Q, rChild);
        }

        printf("\n");
    }
}