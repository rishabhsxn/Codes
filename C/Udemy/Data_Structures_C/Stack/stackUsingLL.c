// push will be performed at the start of linked list i.e. at head

#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node *next;
};

struct Node* createStack();   // always return NULL
int isFull();
int isEmpty(struct Node*);
void push(struct Node **, int);  // modifies the head (top)
int pop(struct Node **);         // modifies the head(top)
void displayStack(struct Node*);

int main(){
    struct Node *s1 = createStack();

    for(int i=1; i<10; i++)
        push(&s1, i);

    int x = pop(&s1);
    if(x==-__INT16_MAX__)
        printf("\nPop operation failed!! Stack Underflow!!!\n");
    else
        printf("Popped value: %d\n", x);

    displayStack(s1);
    
    return 0;
}


struct Node* createStack(){
    struct Node *temp = (struct Node*)malloc(sizeof(struct Node));
    temp->next = NULL;
    if(temp==NULL)
        printf("\nCouldn't create Stack...Memory Full!!!\nNULL is returned\n");
    
    return NULL;
}

int isFull(){
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    if(temp==NULL)
        return 1;
    return 0;
}

int isEmpty(struct Node *s){
    if(s == NULL)
        return 1;
    return 0;
}

void push(struct Node **s, int key){
    if(isFull())
        printf("\nPush operation failed!! Stack Overflow!!\n");
    else{
        struct Node *newTop = (struct Node*)malloc(sizeof(struct Node));
        newTop->data = key;
        newTop->next = *(s);
        *s = newTop;
    }
}

int pop(struct Node **s){
    if(isEmpty(*s))
        return -__INT16_MAX__;

    int result = (*s)->data;
    struct Node *temp = *s;
    *s = (*s)->next;
    free(temp);
    return result;
}

void displayStack(struct Node *s){
    if(isEmpty(s))
        printf("\nStack is Empty!!\n");
    else{
        printf("\n");
        while(s){
            if(s->next==NULL)
                printf("|_%d_|\n",s->data);
            else
                printf("| %d |\n",s->data);

            s = s->next;
        }
        printf("\n");
    }
}