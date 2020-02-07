// OBJECTIVE - find the middle element of the LL

// LOGIC - using two pointers, 1st move two steps at a time and 2nd move 1 step. When 1st reaches at last, 2nd will be in mid

#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node *next;
};

struct Node * createLL(int *, int);
void displayLL(struct Node *);
struct Node * findMid(struct Node *);         // ***FOCUSED FUNCTION***
// returns the address of the mid node of passed LL


int main(){
    int n;
    printf("Enter size of linked list: ");
    scanf("%d",&n);

    int a[n];
    printf("Enter %d elements: ",n);
    for(int i=0; i<n; i++)
        scanf("%d",&a[i]);

    struct Node *head = NULL;
    head = createLL(a, n);

    displayLL(head);

    struct Node *mid = findMid(head);
    printf("\nMid node data: %d\n\n",mid->data);

    return 0;
}


struct Node * findMid(struct Node *head){
    struct Node *temp = head;

    while(head->next){            // checks if head can move further forward or not
        head = head->next;
        if(head->next)
            head = head->next;    // take 2nd step only when it is not already NULL otherwise, breaks the loops
        else
            break;

        temp = temp->next;
    }

    return temp;
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
