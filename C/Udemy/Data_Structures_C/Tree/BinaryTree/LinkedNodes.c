// this program stores binary tree using Linked Nodes
// this program uses Queue of type struct Node, which is implemented in the Header file
// we are creating the tree level by level (top to bottom)

// more functions - countNodes, heightTree, levelTree, leafNodes, nodesDegreeTwo, nodesDegreeOne

#include<stdio.h>
#include<stdlib.h>
#include"queueUsingArray.h"

#define defaultQueueCapacity 20

// because it is already declared in the Header File
// struct Node{
//     struct Node *lChild;
//     char data;
//     struct Node *rChild;
// };

struct Node * createTree(struct Queue);   // it will make own copy of Queue, use it and then discard it
void displayBinaryTree(struct Node *, struct Queue);
int countNodes(struct Node *);          // recursive function
int heightTree(struct Node *);
int levelTree(struct Node *);
int leafNodes(struct Node *);
int nodesDegreeTwo(struct Node *);
int nodesDegreeOne(struct Node *);


int main(){

    struct Queue *Q = createQueue(defaultQueueCapacity);

    struct Node *root = createTree(*Q);
    displayBinaryTree(root, *Q);

    int noOfNodes = countNodes(root);
    printf("\nNo. of nodes: %d\n",noOfNodes);

    int levelCount = levelTree(root);
    printf("Levels in this Tree: %d\n",levelCount);

    int height = heightTree(root);
    printf("Height of Tree: %d\n",height);

    int leafCount = leafNodes(root);
    printf("No. of Leaf nodes: %d\n",leafCount);

    int nodeDegreeTwoCount = nodesDegreeTwo(root);
    printf("No. of nodes with Degree(2): %d\n",nodeDegreeTwoCount);

    int nodeDegreeOneCount = nodesDegreeOne(root);
    printf("No. of nodes with Degree(1): %d\n\n",nodeDegreeOneCount);

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


int countNodes(struct Node *node){
    if(node){
        int x,y;
        x = countNodes(node->lChild);
        y = countNodes(node->rChild);
        return x+y+1;
    }

    return 0;
}

int levelTree(struct Node *node){
    if(node){
        int x,y;

        x = levelTree(node->lChild);
        y = levelTree(node->rChild);

        if(x>y)
            return x+1;         // select the side with greater height, add 1 to it and return it.
        else
            return y+1;
    }

    return 0;       // if node is NULL, height of left and right subtree is 0
}

int heightTree(struct Node *root){
    return levelTree(root) - 1;
}

int leafNodes(struct Node *node){
    if(node){
        int x,y;

        x = leafNodes(node->lChild);
        y = leafNodes(node->rChild);

        if(!(node->lChild) && !(node->rChild))
            return x + y + 1;    // if it's left and right child are NULL, then count it otherwise not
        else
            return x + y;
    }
    return 0;
}

int nodesDegreeTwo(struct Node *node){
    if(node){
        int x,y;

        x = nodesDegreeTwo(node->lChild);
        y = nodesDegreeTwo(node->rChild);

        if(node->lChild && node->rChild)
            return x + y + 1;       // count node only if both child are not NULL
        else
            return x + y;
    }
    return 0;
}

int nodesDegreeOne(struct Node *node){
    if(node){
        int x,y;

        x = nodesDegreeOne(node->lChild);
        y = nodesDegreeOne(node->rChild);

        if((node->lChild && !(node->rChild)) || (!(node->lChild) && node->rChild))
            return x + y + 1;          // count node only if only one child is present
        else
            return x + y;
    }
}