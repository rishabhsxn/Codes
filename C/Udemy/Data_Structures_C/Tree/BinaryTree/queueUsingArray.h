// Header file to implement CIRCULAR Queue data structure using Arrays for struct Node
// Header files dont need main() function

#include<stdio.h>
#include<stdlib.h>

struct Node{
    struct Node *lChild;
    char data;
    struct Node *rChild;
};

struct Queue{
    int capacity;
    struct Node **q;
    int front;      // front will be one index before the actual front element
    int rear;       // rear will be on the index of the actual rear element
};

struct Queue * createQueue();
int enqueue(struct Queue *, struct Node *);           // return -1 if enqueue is not successful else 0
struct Node * dequeue(struct Queue *);           // returns NULL if dequeue not successful otherwise, element
int isFull(struct Queue);              // 0 = false, 1 = true
int isEmpty(struct Queue);             // 0 = false, 1 = true
void printQueue(struct Queue);


struct Queue * createQueue(){
    struct Queue *Q = NULL;
    Q = (struct Queue *) malloc(sizeof(struct Queue));
    printf("enter capacity: ");
    scanf("%d",&Q->capacity);
    Q->capacity = Q->capacity + 1;   // because 1 space is left empty always

    Q->q = (struct Node **)malloc(Q->capacity*sizeof(struct Node *));
    Q->front = Q->rear = 0;

    return Q;
}


int enqueue(struct Queue *Q, struct Node *nodePointer){
    if(isFull(*Q)){
        printf("Queue full, cannot Enqueue!!\n");
        return -1;
    }

    Q->rear = (Q->rear+1) % Q->capacity;
    Q->q[Q->rear] = nodePointer;
    return 0;
}

struct Node * dequeue(struct Queue *Q){
    if(isEmpty(*Q)){
        printf("Queue is empty, cannot Dequeue !!!\n");
        return NULL;
    }

    Q->front = (Q->front+1) % Q->capacity;
    return Q->q[Q->front];
}


int isEmpty(struct Queue Q){
    if(Q.front==Q.rear)
        return 1;
    return 0;
}


int isFull(struct Queue Q){
    if( (Q.rear+1) % Q.capacity == Q.front)
        return 1;
    return 0;
}

// void printQueue(struct Queue Q){
//     if(!isEmpty(Q)){
//         int f = (Q.front + 1) % Q.capacity;
//         int r = Q.rear;
//         while(1){
//             printf("%u ",Q.q[f]);
//             if(f==r)
//                 break;
//             f = (f + 1) % Q.capacity;
//         }
//         printf("\n");
//     }
//     else
//         printf("Queue is empty!!\n");
    
// }