// in a circular linked List, the last node is connected to the head node.
// not that much better than singly LL, because it adds only the feature to reach first node after last node directly

#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node *next;
};

struct Node * createCLL(int [], int);    // similar as for singly LL
void displayCLL(struct Node *);
struct Node * insertCLL(struct Node *, int , int);   // position validation not done
struct Node * deletionCLL(struct Node *, int);       // not returning deleted number


int main(){
    int n;
    printf("Enter size of Linked List: ");
    scanf("%d",&n);
    int a[n];
    printf("Enter %d elements: ",n);
    for(int i=0; i<n; i++)
        scanf("%d",&a[i]);

    struct Node *head = createCLL(a, n);

    // int pos, key;
    // printf("No. to insert: ");
    // scanf("%d",&key);
    // printf("Position to insert: ");
    // scanf("%d",&pos);

    // head = insertCLL(head, key, pos);

    int pos;
    printf("Enter postion to delete: ");
    scanf("%d",&pos);

    head = deletionCLL(head, pos);
    
    displayCLL(head);

    return 0;
}


struct Node * createCLL(int a[], int size){
    struct Node *head = (struct Node *)malloc(sizeof(struct Node));
    head->data = a[0];
    head->next = NULL;
    struct Node *tail = head;

    for(int i=1; i<size; i++){
        struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
        temp->data = a[i];
        temp->next = NULL;
        tail->next = temp;
        tail = temp;
    }

    tail->next = head;

    return head;
}

void displayCLL(struct Node *head){
    struct Node *temp = head;

    do{
        if(temp->next == head)
            printf("%d\n",temp->data);
        else
            printf("%d -> ",temp->data);
        temp = temp->next;

    }while(temp != head);

}

struct Node * insertCLL(struct Node *head, int key, int pos){
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    temp->data = key;
    temp->next = NULL;
    struct Node *temp2 = head;

    if(pos == 0){
        temp->next = head;
        while(temp2->next != head)
            temp2 = temp2->next;
        temp2->next = temp;
        return temp;
    }
    else{
        for(int i=1; i<pos; i++)
            temp2 = temp2->next;

        temp->next = temp2->next;
        temp2->next = temp;
        return head;
    }
}

struct Node * deletionCLL(struct Node *head, int pos){
    struct Node *temp = head;
    if(pos==0){
        while(temp->next != head)
            temp = temp->next;
        temp->next = head->next;
        temp = temp->next;
        free(head);
        return temp;
    }
    else{
        struct Node *temp2 = NULL;
        for(int i=1; i<=pos; i++){
            temp2 = temp;
            temp = temp->next;
        }
        temp2->next = temp->next;
        free(temp);
        return head;
    }
}