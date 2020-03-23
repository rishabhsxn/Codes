// program to implement CIRCULAR Queue data structure using Arrays for INTEGERS

#include<stdio.h>
#include<stdlib.h>


struct Queue{
    int capacity;
    int *q;
    int front;      // front will be one index before the actual front element
    int rear;       // rear will be on the index of the actual rear element
};

struct Queue * createQueue();
int enqueue(struct Queue *, int);           // return -1 if enqueue is not successful else 0
int dequeue(struct Queue *);           // returns -__INT16_MAX__ if dequeue not successful otherwise, element
int isFull(struct Queue);              // 0 = false, 1 = true
int isEmpty(struct Queue);             // 0 = false, 1 = true
void printQueue(struct Queue);


int main(){
    int choice;

    printf("\n-----------------CIRCULAR QUEUE-----------------------\n\n");
    struct Queue *Q = createQueue();

    do{
        printf("\nFront: %d   rear: %d\n",Q->front,Q->rear);
        printf("Select an option -\n1. Enqueue()\n2. Dequeue()\n3. DisplayQueue()\n4. Terminate\n");
        printf("Answer: ");
        scanf("%d",&choice);
        printf("\n");
        int n;

        switch(choice){
            case 1:        
                printf("num: ");
                scanf("%d",&n);
                enqueue(Q, n);
                break;

            case 2:
                n = dequeue(Q);
                if(n!=-__INT16_MAX__)
                    printf("Dequeued no.: %d\n",n);
                break;

            case 3:
                printf("Queue: ");
                printQueue(*Q);
                break;

            default:
                printf("Exiting program.....\n");
        }
        printf("\n");

    }while(choice!=4);

    return 0;
}


struct Queue * createQueue(){
    struct Queue *Q = NULL;
    Q = (struct Queue *) malloc(sizeof(struct Queue));
    printf("enter capacity: ");
    scanf("%d",&Q->capacity);
    Q->capacity = Q->capacity + 1;   // because 1 space is left empty always

    Q->q = (int *)malloc(Q->capacity*sizeof(int));
    Q->front = Q->rear = 0;

    return Q;
}


int enqueue(struct Queue *Q, int n){
    if(isFull(*Q)){
        printf("Queue full, cannot Enqueue!!\n");
        return -1;
    }

    Q->rear = (Q->rear+1) % Q->capacity;
    Q->q[Q->rear] = n;
    return 0;
}

int dequeue(struct Queue *Q){
    if(isEmpty(*Q)){
        printf("Queue is empty, cannot Dequeue !!!\n");
        return -__INT16_MAX__;
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

void printQueue(struct Queue Q){
    if(!isEmpty(Q)){
        int f = (Q.front + 1) % Q.capacity;
        int r = Q.rear;
        while(1){
            printf("%d ",Q.q[f]);
            if(f==r)
                break;
            f = (f + 1) % Q.capacity;
        }
        printf("\n");
    }
    else
        printf("Queue is empty!!\n");
    
}