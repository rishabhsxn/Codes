/* Program for Linked List implementation and checking loop */

#include<iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

Node * createLL(int ar[], int size);
int checkLoop(Node *head);

int main(){
    int ar[] = {1, 2, 3, 4, 5};
    int size = 5;

    Node *head = createLL(ar, size);
    head->next->next->next = head;

    if(checkLoop(head)==1)
        cout << "Loop present" << endl;
    else
        cout << "Loop not present" << endl;

    return 0;
}

Node * createLL(int ar[], int size){
    Node *head = new Node();
    Node *last;

    head->data = ar[0];
    head->next = nullptr;
    last = head;

    int i = 1;
    while(i<size){
        Node *temp = new Node();
        temp->data - ar[i];
        temp->next = nullptr;
        last->next = temp;
        last = temp;
        i++;
    }

    return head;
}

int checkLoop(Node *head){
    Node *s, *p;
    s = p = head;

    while(s && p && p->next){
        s = s->next;
        p = p->next->next;

        if(s==p)
            return 1;
    }

    return 0;
}