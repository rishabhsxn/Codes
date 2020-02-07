/* OBJECTIVE - Find the node on which two linked list intersect (also check whether they intersect or not */

/* LOGIC - Storing addresses in Stack, then checking from last till where the addresses are common */


#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node *next;
};

struct Node * createLL(int *, int);
void displayLL(struct Node *);

struct Node * findIntersection_LL(struct Node *, struct Node *);     // ***FOCUSED FUNCTION***
/* returns address of intersecting Node or NULL (if no intersection)   */


int main(){
    int n1;
    printf("Enter size of 1st linked list: ");
    scanf("%d",&n1);

    int a[n1];
    printf("Enter %d elements: ",n1);
    for(int i=0; i<n1; i++)
        scanf("%d",&a[i]);

    struct Node *head1 = NULL;
    head1 = createLL(a, n1);

    int n2;
    printf("Enter size of 2nd linked list: ");
    scanf("%d",&n2);

    int b[n2];
    printf("Enter %d elements: ",n2);
    for(int i=0; i<n2; i++)
        scanf("%d",&b[i]);

    struct Node *head2 = NULL;
    head2 = createLL(b, n2);

    displayLL(head1);
    displayLL(head2);

    struct Node *intersection = findIntersection_LL(head1, head2);
    if(intersection)
        printf("\nIntersection Node's data: %d\n\n",intersection->data);
    else
        printf("\nNo intersection\n\n");

    return 0;
}


struct Node * findIntersection_LL(struct Node *head1, struct Node *head2){
    
}


struct Node * createLL(int a[], int size){
    struct Node *head, *last, *temp;
    head = (struct Node *)malloc(sizeof(struct Node));
    head->data = a[0];
    head->next = NULL;
    last = head;

    for(int i=1; i<size; i++){
        temp = (struct Node *)malloc(sizeof(struct Node));
        temp->data = a[i];
        temp->next = NULL;
        last->next = temp;
        last = temp;
    }

    return head;   
}

void displayLL(struct Node *head){
    while(head){
        if(head->next != NULL)
            printf("%d -> ",head->data);
        else
            printf("%d \n",head->data);
        head = head->next;
    }
}