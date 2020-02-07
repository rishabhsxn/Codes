#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node *next;
};
// }*head;                      // This way we can declare a global pointer of this struct type

// ***IMP: whenever create a pointer, make it NULL initially before using.

struct Node * createLL(int *, int);    // create a linked list from a given array and its size
void displayLL(struct Node *);         // it will not modify the original head pointer because head pointer is passed by value (iterative)
void displayLL_R(struct Node *);       // recursive function to display a linked list (reverse)
void displayReverse_R(struct Node *);  // display Linked List in reverse in O(n) time complexity
int lengthLL(struct Node *);           // returns no. of nodes (iterative)
int lengthLL_R(struct Node *);         // recursive
int sumLL(struct Node *);
int sumLL_R(struct Node *);
int maxLL(struct Node *);
int maxLL_R(struct Node *);
struct Node * searchLL(struct Node *, int); // linear search and returns pointer to the node, if not found return NULL; (iterative)
struct Node * searchLL_R(struct Node *, int); // recursive

struct Node * improvedSearchLL(struct Node **, int);     // improved search using "Move to Head" method
// had to modify the original head pointer, had to take pointer to pointer  
// ***IMP - take a look how to change original head pointer***

struct Node * insertAtPos(struct Node *, int, int);   
// ***IMP: instead of taking pointer to pointer and changing original head, I am returning new/original head pointer and taking it in
 //   original head pointer***

struct Node * insertAtLast(struct Node *, int);       // also handles when there is no node in the linked List
struct Node * insertInSortedLL(struct Node *, int);   // LL should be already sorted in ascending order

int deleteFromPos(struct Node **, int);      //head node is changed only when the 0th node is deleted
// this function work as extraction function

int isSortedLL(struct Node *);             // returns 1 if sorted in ascending order, otherwise 0
void reverseUsingArray(struct Node *, int);    // more time taking because copying of data is involved which can be of any size
struct Node * reverseUsingSlidingPointers(struct Node *);      // pointers are swapped, therefore it is fast.  last node becomes head
void concatLL(struct Node *, struct Node *);    // head of 1st LL will be head of new concated LL.
struct Node * mergeSortedLL(struct Node *, struct Node *);    // merge two already sorted ascending LLs.
// returns the head of new merged LL (cannot know in advance which list's head will be new head)

int checkLoop(struct Node *);        // returns 1 when there is a loop. 
// two pointers will be used - 1st move by 1 step and 2nd move by 2 steps
// remember racing example - laps

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

    // displayLL_R(head);

    // displayReverse_R(head);
    // printf("\n");
    // printf("Length of Linked List: %d\n",lengthLL_R(head));

    // printf("Sum: %d\n",sumLL_R(head));

    // printf("Maximum element: %d\n", maxLL_R(head));
    // for(struct Node *i=head; i!=NULL; i=i->next)
    //     printf("%u -> ",i);

    // printf("\n");

    // int key;
    // printf("Enter key to find: ");
    // scanf("%d", &key);

    // struct Node *result = improvedSearchLL(&head, key);
    // if(result == NULL)
    //     printf("\nNot Found!\n\n");
    // else{
    //     printf("Found at %u\n\n",result);
    // }

    // int pos, x;
    // printf("No. to insert: ");
    // scanf("%d",&x);

    // printf("index: ");
    // scanf("%d",&pos);

    // head = insertAtPos(head, x, pos);

    // head = insertAtLast(head, 4);
    // head = insertAtLast(head, 0);
    // displayLL(head);

    // struct Node *head2 = NULL;
    // head2 = insertAtLast(head2, 1);
    // head2 = insertAtLast(head2, 2);

    // displayLL(head2);

    // int x; 
    // printf("Enter no. to insert: ");
    // scanf("%d",&x);

    // head = insertInSortedLL(head, x);

    // int pos;
    // printf("Enter index to delete: ");
    // scanf("%d",&pos);
    // int x = deleteFromPos(&head, pos);
    // printf("extracted no.: %d\n\n",x);

    // if(isSortedLL(head))
    //     printf("Linked List is Sorted\n");
    // else
    //     printf("Linked list is not Sorted\n");
    
    // reverseUsingArray(head, n);

    // head = reverseUsingSlidingPointers(head);

    // int n2;
    // printf("Enter size of 2nd LL: ");
    // scanf("%d",&n2);
    // int b[n2];
    // printf("Enter %d elements: ",n2);
    // for(int i=0; i<n2; i++)
    //     scanf("%d",&b[i]);
    // struct Node *head2 = NULL;
    // head2 = createLL(b, n2);

    // displayLL(head);
    // displayLL(head2);

    // concatLL(head, head2);
    // printf("\nAfter Concat: \n");
    // struct Node *head3 = NULL;
    // head3 = mergeSortedLL(head, head2);

    // printf("\nAfter merging: \n");

    //creating loop
    // head->next->next->next = head->next->next;

    // if(checkLoop(head))
    //     printf("Loop present in LL.\n");
    // else
    //     printf("Loop not present in LL.\n");

    // displayLL(head);

    return 0;
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

void displayLL_R(struct Node *head){
    if(head->next == NULL){
        printf("%d\n",head->data);
    }
    else{
        printf("%d -> ",head->data);
        displayLL_R(head->next);
    }
}

void displayReverse_R(struct Node *head){
    if(head){
        displayReverse_R(head->next);
        printf("%d -> ",head->data);
    }
}

int lengthLL(struct Node *head){
    int len = 0;
    while(head){
        len++;
        head = head->next;
    }
    return len;
}

int lengthLL_R(struct Node *head){
    if(head)
        return 1 + lengthLL_R(head->next);
    return 0;
}

int sumLL(struct Node *head){
    int sum=0;
    while(head){
        sum += head->data;
        head = head->next;
    }
    return sum;
}

int sumLL_R(struct Node *head){
    if(head)
        return head->data + sumLL_R(head->next);
    return 0;
}

int maxLL(struct Node *head){
    int max = head->data;
    head = head->next;
    while(head){
        if(head->data > max)
            max = head->data;
        head = head->next;
    }
    return max;
}

int maxLL_R(struct Node *head){
    int x;
    if(head){
        x = maxLL_R(head->next);
        return x > head->data ? x : head->data;
    }
    else
        return - __INT16_MAX__;
}

struct Node * searchLL(struct Node *head, int key){
    while(head){
        if(head->data == key)
            return head;
        head = head->next;
    }

    return NULL;
}

struct Node * searchLL_R(struct Node *head, int key){
    if(head){
        if(head->data == key)
            return head;
        return searchLL_R(head->next, key);
    }

    return NULL;
}

struct Node * improvedSearchLL(struct Node **head, int key){
    if((*head)->data == key)
        return *head;

    struct Node *temp = NULL, *temp2 = NULL;
    temp = (*head)->next;
    temp2 = *head;
    while(temp){
        if(temp->data == key){
            temp2->next = temp->next;
            temp->next = *head;
            *head = temp;
            return *head;
        }
        temp2 = temp;
        temp = temp->next;
    }

    return NULL;
}

struct Node * insertAtPos(struct Node *head, int key, int pos){
    if(pos<0 || pos > lengthLL(head)){
        printf("\nInvalid Position!! -- Cannot insert\n");
        return head;
    }
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    temp->data = key;
    temp->next = NULL;
    if(pos == 0){
        // inserting before head
        temp->next = head;
        head = temp;
        return head;
    }
    else{
        struct Node *temp2 = head;
        for(int i=1; i<pos; i++)
            temp2 = temp2->next;
        
        temp->next = temp2->next;
        temp2->next = temp;
        return head;
    }
}

struct Node * insertAtLast(struct Node *head, int key){
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    temp->data = key;
    temp->next = NULL;

    if(lengthLL(head) == 0)
        return temp;
    
    struct Node *temp2 = head;
    while(temp2->next)
        temp2 = temp2->next;
    
    temp2->next = temp;
    return head;
}

struct Node * insertInSortedLL(struct Node *head, int key){
    struct Node *n = (struct Node *)malloc(sizeof(struct Node));
    n->data = key;
    n->next = NULL;

    if(head->data > key){
        n->next = head;
        return n;
    }

    struct Node *temp, *temp2;
    temp2 = head;
    temp = head->next;
    
    while(temp){
        if(temp->data > key){
            temp2->next = n;
            n->next = temp;
            return head;
        }
        
        temp2 = temp;
        temp = temp->next;
    }

    temp2->next = n;
    return head;
}

int deleteFromPos(struct Node **head, int pos){
    if(pos<0 || pos >= lengthLL(*head)){
        printf("\nInvalid Position -- Cannot Delete!!\n\n");
        return -__INT16_MAX__;
    }
    int val;
    struct Node *temp = *head;

    if(pos == 0){
        *head = (*head)->next;
        val = temp->data;
        free(temp);
        return val;
    }
    
    struct Node *temp2 = NULL;

    for(int i=1; i<=pos; i++){
        temp2 = temp;
        temp = temp->next;
    }
    val = temp->data;
    temp2->next = temp->next;
    free(temp);

    return val;
}

int isSortedLL(struct Node *head){
    int flag = 1;
    while(head->next){
        if(head->data > head->next->data){
            flag = 0;
            break;
        }
        head = head->next;
    }
    return flag;
}

void reverseUsingArray(struct Node *head, int size){
    if(size > 1){
        struct Node *temp = head;
        int arr[size];
        for(int i=0; i<size; i++){
            arr[i] = temp->data;
            temp = temp->next;
        }

        for(int j=size-1; j>=0; j--){
            head->data = arr[j];
            head = head->next;
        }
    }
}

struct Node * reverseUsingSlidingPointers(struct Node *head){
    struct Node *temp, *temp2;
    temp = temp2 = NULL;

    while(head){
        temp2 = temp;
        temp = head;
        head = head->next;

        temp->next = temp2;
    }

    return temp;
}

void concatLL(struct Node *head1, struct Node *head2){
    while(head1->next)
        head1 = head1->next;

    head1->next = head2;
}

struct Node * mergeSortedLL(struct Node *head1, struct Node *head2){
    struct Node *last = NULL, *newHead = NULL;

    if(head1->data <= head2->data){
        newHead = last = head1;
        head1 = head1->next;
    }
    else{
        newHead = last = head2;
        head2 = head2->next;
    }
    last->next = NULL;

    while(head1 && head2){
        if(head1->data <= head2->data){
            last->next = head1;
            head1 = head1->next;
        }
        else{
            last->next = head2;
            head2 = head2->next;
        }
        last = last->next;
        last->next = NULL;
    }

    // head1 or head2, anyone of them will be NULL for sure. Both cannot be NULL
    if(head1 == NULL)
        last->next = head2;
    else
        last->next = head1;

    return newHead;
}

int checkLoop(struct Node *head){
    struct Node *temp=head;

    while(head){
        temp = temp->next;   // move by 1 step

        head = head->next;    // move by 2 steps
        if(head)
            head = head->next;     // 2nd step taken only when head is not already NULL
        
        if(temp == head)
            return 1;
    }

    return 0;
}