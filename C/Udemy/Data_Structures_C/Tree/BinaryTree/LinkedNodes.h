// this Header file provides method to create binary tree using Linked Nodes
// this program uses Queue of type struct Node, which is implemented in the Header file
// we are creating the tree level by level (top to bottom)

#include<stdio.h>
#include<stdlib.h>
#include"queueUsingArray.h"

#define defaultQueueCapacity 20


struct Node_Char * createTree_Char();   // it will make own copy of Queue, use it and then discard it
struct Node_Int * createTree_Int();
void displayBinaryTree_Char(struct Node_Char *);
void displayBinaryTree_Int(struct Node_Int *);


struct Node_Char * createTree_Char(){
    struct Queue_Char *Q = createQueue_Char(defaultQueueCapacity);
    char rootData;
    printf("Root: ");
    scanf(" %c",&rootData);
    struct Node_Char *root = (struct Node_Char *)malloc(sizeof(struct Node_Char));
    if(root==NULL){
        printf("No memory...root node can not be created!!\n");
        return NULL;
    }
    root->data = rootData;
    enqueue_Char(Q, root);

    struct Node_Char *temp;

    printf("\n****if a node doesn't exist, enter @ when asked****\n\n");
    while(!isEmpty_Char(*Q)){

        temp = dequeue_Char(Q);

        if(temp==NULL){
            printf("Queue is empty\n");
            break;
        }

        // ask for left child and enqueue it's pointer
        char lChildData;
        printf("%c's left child: ",temp->data);
        scanf(" %c",&lChildData);

        if(lChildData != '@'){
            struct Node_Char *lChild = (struct Node_Char*)malloc(sizeof(struct Node_Char));
            if(lChild==NULL){
                printf("No memory...node can't be created!!\n");
                return NULL;
            }
            lChild->data = lChildData;
            temp->lChild = lChild;
            int x = enqueue_Char(Q, lChild);
            if(x==-1)
                return NULL;
        }

        // ask for right child and enqueue it's pointer
        char rChildData;
        printf("%c's right child: ",temp->data);
        scanf(" %c",&rChildData);

        if(rChildData != '@'){
            struct Node_Char *rChild = (struct Node_Char *)malloc(sizeof(struct Node_Char));
            if(rChild==NULL){
                printf("No memory...node can't be created!!\n");
                return NULL;
            }
            rChild->data = rChildData;
            temp->rChild = rChild;
            int x = enqueue_Char(Q, rChild);
            if(x==-1)
                return NULL;
        }
    }

    return root;
}
struct Node_Int * createTree_Int(){
    struct Queue_Int *Q = createQueue_Int(defaultQueueCapacity); 
    int rootData;
    printf("Root: ");
    scanf("%d",&rootData);
    struct Node_Int *root = (struct Node_Int *)malloc(sizeof(struct Node_Int));
    if(root==NULL){
        printf("No memory...root node can not be created!!\n");
        return NULL;
    }
    root->data = rootData;
    enqueue_Int(Q, root);

    struct Node_Int *temp;

    printf("\n****if a node doesn't exist, enter -1 when asked****\n\n");
    while(!isEmpty_Int(*Q)){

        temp = dequeue_Int(Q);

        if(temp==NULL){
            printf("Queue is empty\n");
            break;
        }

        // ask for left child and enqueue it's pointer
        int lChildData;
        printf("%d's left child: ",temp->data);
        scanf("%d",&lChildData);

        if(lChildData != -1){
            struct Node_Int *lChild = (struct Node_Int*)malloc(sizeof(struct Node_Int));
            if(lChild==NULL){
                printf("No memory...node can't be created!!\n");
                return NULL;
            }
            lChild->data = lChildData;
            temp->lChild = lChild;
            int x = enqueue_Int(Q, lChild);
            if(x==-1)
                return NULL;
        }

        // ask for right child and enqueue it's pointer
        int rChildData;
        printf("%d's right child: ",temp->data);
        scanf("%d",&rChildData);

        if(rChildData != -1){
            struct Node_Int *rChild = (struct Node_Int *)malloc(sizeof(struct Node_Int));
            if(rChild==NULL){
                printf("No memory...node can't be created!!\n");
                return NULL;
            }
            rChild->data = rChildData;
            temp->rChild = rChild;
            int x = enqueue_Int(Q, rChild);
            if(x==-1)
                return NULL;
        }
    }

    return root;
}

void displayBinaryTree_Char(struct Node_Char *root){
    struct Queue_Char *Q = createQueue_Char(defaultQueueCapacity);
    printf("\n\n--------------------Displaying Tree-------------------\n\n");
    struct Node_Char *temp;
    enqueue_Char(Q, root);

    printf("Root ");
    while(!isEmpty_Char(*Q)){
        temp = dequeue_Char(Q);
        printf("Node: %c\n",temp->data);

        struct Node_Char *lChild = temp->lChild;
        if(lChild!=NULL){
            printf("left child: %c\n",lChild->data);
            enqueue_Char(Q, lChild);
        }

        struct Node_Char *rChild = temp->rChild;
        if(rChild!=NULL){
            printf("right child: %c\n",rChild->data);
            enqueue_Char(Q, rChild);
        }

        printf("\n");
    }
}
void displayBinaryTree_Int(struct Node_Int *root){
    struct Queue_Int *Q = createQueue_Int(defaultQueueCapacity); 
    printf("\n\n--------------------Displaying Tree-------------------\n\n");
    struct Node_Int *temp;
    enqueue_Int(Q, root);

    printf("Root ");
    while(!isEmpty_Int(*Q)){
        temp = dequeue_Int(Q);
        printf("Node: %d\n",temp->data);

        struct Node_Int *lChild = temp->lChild;
        if(lChild!=NULL){
            printf("left child: %d\n",lChild->data);
            enqueue_Int(Q, lChild);
        }

        struct Node_Int *rChild = temp->rChild;
        if(rChild!=NULL){
            printf("right child: %d\n",rChild->data);
            enqueue_Int(Q, rChild);
        }

        printf("\n");
    }
}