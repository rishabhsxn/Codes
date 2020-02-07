#include<stdio.h>
#include<stdlib.h>

struct Node{
    struct Node *prev;
    int data;
    struct Node *next;
};

struct Node * createDLL(int [], int);
void displayDLL(struct Node *);
struct Node * reverseDLL(struct Node *);            // returns the new head's address
// simply iterate the LL, and exchange each one's prev and next

struct Node * insertAtPos_DLL(struct Node*, int ,int);          // returns head. Position validation not done
struct Node * deleteFromPos_DLL(struct Node *, int);            // returns head. Position validation not done


int main(){
    int n;
    printf("Enter size of Linked List: ");
    scanf("%d",&n);
    int a[n];
    printf("Enter %d integers: ",n);
    for(int i=0; i<n; i++)
        scanf("%d",&a[i]);

    struct Node *head = NULL;
    head = createDLL(a, n);

    displayDLL(head);

    // head = reverseDLL(head);
    // int key, pos;
    // printf("No. to insert: ");
    // scanf("%d",&key);
    // printf("Position to insert: ");
    // scanf("%d",&pos);

    // head = insertAtPos_DLL(head, key, pos);

    int pos;
    printf("Position to delete: ");
    scanf("%d",&pos);

    head = deleteFromPos_DLL(head, pos);

    displayDLL(head);

    return 0;
}


struct Node * createDLL(int a[], int size){
    struct Node *head = (struct Node *)malloc(sizeof(struct Node));
    head->prev = NULL;
    head->data = a[0];
    head->next = NULL;
    struct Node *temp = head;

    for(int i=1; i<size; i++){
        struct Node *temp2 = (struct Node *)malloc(sizeof(struct Node));
        temp->next = temp2;
        temp2->prev = temp;
        temp2->data = a[i];
        temp2->next = NULL;
        temp = temp2;
    }

    return head;
}

void displayDLL(struct Node *head){
    while(head){
        if(head->next == NULL)
            printf("%d\n",head->data);
        else
            printf("%d -> ",head->data);
        head = head->next;
    }
}

struct Node * reverseDLL(struct Node *head){
    struct Node *temp = NULL;
    while(head){
        temp = head->next;
        head->next = head->prev;
        head->prev = temp;
        
        temp = head;           // so that at end we can return the address of new head
        head = head->prev;     // now to move forward, head will use prev;
    }

    return temp;
}

struct Node * insertAtPos_DLL(struct Node *head, int key, int pos){
    if(pos<0){
        printf("\nInvalid position!!! cannot insert\n");
        return head;
    }

    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    temp->prev = NULL;
    temp->data = key;
    temp->next = NULL;
    if(pos==0){
        head->prev = temp;
        temp->next = head;
        return temp;
    }
    else{
        struct Node *temp2 = head;

        for(int i=1; i<pos; i++)
            head = head->next;

        temp->prev = head;
        temp->next = head->next;
        if(head->next)
            head->next->prev = temp;
        head->next = temp;

        return temp2;
    }
}

struct Node * deleteFromPos_DLL(struct Node *head, int pos){
    struct Node *temp = head;
    if(pos==0){
        head = head->next;
        head->prev = NULL;
        free(temp);
        return head;
    }
    else{
        for(int i=1; i<=pos; i++)
            temp = temp->next;

        temp->prev->next = temp->next;
        if(temp->next)
            temp->next->prev = temp->prev;
        free(temp);

        return head;
    }
}