/* Sparse matrix (matrix with more zero elements) can be represented using array of Linked Lists each representing
row of the sparse matrix */

// **** IMPORTANT - here passing of 2D array to a function is implemented ****

#include<stdio.h>
#include<stdlib.h>

struct Node{
    int col;
    int val;
    struct Node *next;
};

void createLLforSparse(struct Node **, int m, int n, int a[m][n] );  
/* receive the array of pointers to struct Node and 2D array(matrix).  create LL for each row of matrix and
fills it in the array */

void displayLLofSparse(struct Node **, int, int);      
/* displays the sparse matrix data saved in LL in form of matrix. Also requires the size of array i.e. no. of rows 
in matrix and the no. of columns to print the 0s of sparse matrix in original form */

struct Node ** additionSparse(struct Node **, int, int, struct Node **, int, int);
/* receives the 2 array of pointers to struct Node, add the elements and then creates(dynamically) and store results in a new array 
of pointers. Returns the pointer to the array. Returns NULL if the matrices cannot be added */

int main(){
    int m, n;
    printf("no. of rows: "); scanf("%d",&m);
    printf("no. of columns: "); scanf("%d",&n);

    int a[m][n];
    printf("Enter elements row-wise: \n");
    for(int i=0; i<m; i++){
        for(int j=0; j<n; j++)
            scanf("%d",&a[i][j]);
    }

    struct Node *s[m];
    createLLforSparse(s, m, n, a);

    // displayLLofSparse(s, m, n);

    int m2, n2;
    printf("\n\nno. of rows: "); scanf("%d",&m2);
    printf("no. of columns: "); scanf("%d",&n2);

    int b[m2][n2];
    printf("Enter elements row-wise: \n");
    for(int i=0; i<m2; i++){
        for(int j=0; j<n2; j++)
            scanf("%d",&b[i][j]);
    }

    struct Node *s2[m2];
    createLLforSparse(s2, m2, n2, b);
    printf("\n\n");

    struct Node **s3 = additionSparse(s, m, n, s2, m2, n2);

    if(s3){
        printf("After addition: ");
        displayLLofSparse(s3, m, n);
    }
    else
        printf("\n\nThe 2 matrices are incompatible for addition!!!\n\n");



    return 0;
}


void createLLforSparse(struct Node *s[], int m, int n, int a[][n]){

    for(int i=0; i<m; i++){

        struct Node *first = NULL, *last=NULL;
        int flag=0;
        for(int j=0; j<n; j++){

            if(a[i][j] != 0){

                if(flag==0){             // for 1st element the node's address has to be saved;
                    flag=1;
                    first = (struct Node *)malloc(sizeof(struct Node));
                    first->col = j;
                    first->val = a[i][j];
                    first->next = NULL;
                    last = first;
                }
                else{
                    struct Node *temp = (struct Node*)malloc(sizeof(struct Node));
                    temp->col = j;
                    temp->val = a[i][j];
                    temp->next = NULL;
                    last->next = temp;
                    last = temp;
                }
               
            }
        }
        
        s[i] = first;
    }
}

void displayLLofSparse(struct Node *s[], int m, int n){

    printf("\n");
    
    for(int i=0; i<m; i++){
        struct Node *head = s[i];
        for(int j=0; j<n; j++){
            if(head == NULL)
                printf("0 ");
            else{
                if(head->col == j){
                    printf("%d ",head->val);
                    head = head->next;
                }
                else
                    printf("0 ");                
            }
        }
        printf("\n");
    }

    printf("\n");
}

struct Node ** additionSparse(struct Node *s1[], int m1, int n1, struct Node *s2[], int m2, int n2){
    if(m1!=m2 || n1!=n2)
        return NULL;

    struct Node **s3 = (struct Node**)malloc(m1*sizeof(struct Node*));
    struct Node *head1=NULL, *head2=NULL;

    for(int i=0; i<m1; i++){
        head1 = s1[i];
        head2 = s2[i];

        int flag=0;
        struct Node *head3=NULL, *last=NULL;

        for(int j=0; j<n1; j++){
            int x=0, y=0;

            if(head1 && head1->col==j){
                x = head1->val;
                head1 = head1->next;
            }

            if(head2 && head2->col==j){
                y = head2->val;
                head2 = head2->next;
            }

            if((x+y)!=0){
                if(flag==0){
                    flag=1;
                    head3 = (struct Node*)malloc(sizeof(struct Node));
                    head3->col = j;
                    head3->val = x+y;
                    head3->next = NULL;
                    last = head3;
                }
                else{
                    struct Node *temp = (struct Node*)malloc(sizeof(struct Node));
                    temp->col = j;
                    temp->val = x+y;
                    temp->next = NULL;
                    last->next = temp;
                    last = temp;
                }
            }
        }
        s3[i] = head3;

    }


    return s3;
}