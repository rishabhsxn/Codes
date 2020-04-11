// Header file to implement CIRCULAR Queue data structure using Arrays for struct Node
// Header files dont need main() function

#include<stdio.h>
#include<stdlib.h>

struct Node_Char{
    struct Node_Char *lChild;
    char data;
    struct Node_Char *rChild;
};

struct Node_Int{
    struct Node_Int *lChild;
    int data;
    struct Node_Int *rChild;
};

struct Queue_Char{
    int capacity;
    struct Node_Char **q;
    int front;      // front will be one index before the actual front element
    int rear;       // rear will be on the index of the actual rear element
};

struct Queue_Int{
    int capacity;
    struct Node_Int **q;
    int front;      // front will be one index before the actual front element
    int rear;       // rear will be on the index of the actual rear element
};

struct Queue_Char * createQueue_Char(int);
struct Queue_Int * createQueue_Int(int);
int enqueue_Char(struct Queue_Char *, struct Node_Char *);           // return -1 if enqueue is not successful else 0
int enqueue_Int(struct Queue_Int *, struct Node_Int *);           // return -1 if enqueue is not successful else 0
struct Node_Char * dequeue_Char(struct Queue_Char *);           // returns NULL if dequeue not successful otherwise, element
struct Node_Int * dequeue_Int(struct Queue_Int *);           // returns NULL if dequeue not successful otherwise, element
int isFull_Char(struct Queue_Char);              // 0 = false, 1 = true
int isFull_Int(struct Queue_Int);              // 0 = false, 1 = true
int isEmpty_Char(struct Queue_Char);             // 0 = false, 1 = true
int isEmpty_Int(struct Queue_Int);             // 0 = false, 1 = true
void printQueue_Char(struct Queue_Char);
void printQueue_Int(struct Queue_Int);


struct Queue_Char * createQueue_Char(int capacity){
    struct Queue_Char *Q = NULL;
    Q = (struct Queue_Char *) malloc(sizeof(struct Queue_Char));
    // printf("enter capacity: ");
    // scanf("%d",&Q->capacity);
    Q->capacity = capacity + 1;   // because 1 space is left empty always

    Q->q = (struct Node_Char **)malloc(Q->capacity*sizeof(struct Node_Char *));
    Q->front = Q->rear = 0;

    return Q;
}
struct Queue_Int * createQueue_Int(int capacity){
    struct Queue_Int *Q = NULL;
    Q = (struct Queue_Int *) malloc(sizeof(struct Queue_Int));
    // printf("enter capacity: ");
    // scanf("%d",&Q->capacity);
    Q->capacity = capacity + 1;   // because 1 space is left empty always

    Q->q = (struct Node_Int **)malloc(Q->capacity*sizeof(struct Node_Int *));
    Q->front = Q->rear = 0;

    return Q;
}


int enqueue_Char(struct Queue_Char *Q, struct Node_Char *nodePointer){
    if(isFull_Char(*Q)){
        printf("Queue full, cannot Enqueue!!\n");
        return -1;
    }

    Q->rear = (Q->rear+1) % Q->capacity;
    Q->q[Q->rear] = nodePointer;
    return 0;
}
int enqueue_Int(struct Queue_Int *Q, struct Node_Int *nodePointer){
    if(isFull_Int(*Q)){
        printf("Queue full, cannot Enqueue!!\n");
        return -1;
    }

    Q->rear = (Q->rear+1) % Q->capacity;
    Q->q[Q->rear] = nodePointer;
    return 0;
}

struct Node_Char * dequeue_Char(struct Queue_Char *Q){
    if(isEmpty_Char(*Q)){
        printf("Queue is empty, cannot Dequeue !!!\n");
        return NULL;
    }

    Q->front = (Q->front+1) % Q->capacity;
    return Q->q[Q->front];
}
struct Node_Int * dequeue_Int(struct Queue_Int *Q){
    if(isEmpty_Int(*Q)){
        printf("Queue is empty, cannot Dequeue !!!\n");
        return NULL;
    }

    Q->front = (Q->front+1) % Q->capacity;
    return Q->q[Q->front];
}

int isEmpty_Char(struct Queue_Char Q){
    if(Q.front==Q.rear)
        return 1;
    return 0;
}
int isEmpty_Int(struct Queue_Int Q){
    if(Q.front==Q.rear)
        return 1;
    return 0;
}


int isFull_Char(struct Queue_Char Q){
    if( (Q.rear+1) % Q.capacity == Q.front)
        return 1;
    return 0;
}
int isFull_Int(struct Queue_Int Q){
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