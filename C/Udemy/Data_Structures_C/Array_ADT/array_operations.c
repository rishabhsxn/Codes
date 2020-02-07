#include<stdio.h>
#include<stdlib.h>

struct Array{
    int *A;
    int size;
    int length;
};

void swap(int *, int *);

void display(struct Array);
void append(struct Array *, int);
void insert(struct Array *, int, int);
int delete(struct Array *, int);
int linearSearch(struct Array, int);
int improvedLinearSearchTransposition(struct Array *, int);
int improvedLinearSearchMoveToHead(struct Array *, int);
int binarySearchI(struct Array, int);
int binarySearchR(struct Array, int, int, int);
int get(struct Array, int);
void set(struct Array *, int, int);
int max(struct Array);
int min(struct Array);
int sum(struct Array);
float average(struct Array);
void reverse1(struct Array *);
void reverse2(struct Array *);
void shiftR(struct Array *, int);
void shiftL(struct Array *, int);
void rotateL(struct Array *, int);
void rotateR(struct Array *, int);
void insertSorted(struct Array *, int);
int isSorted(struct Array);
void minusPlus(struct Array *);

//binary operations
struct Array * mergeSortedArrays(struct Array , struct Array);
struct Array * concat(struct Array, struct Array);


int main(){

    struct Array arr;
    printf("Enter size of array: ");
    scanf("%d",&arr.size);
    // int a[arr.size];
    // arr.A = a;
    arr.A = (int *)malloc(arr.size*sizeof(int));

    printf("How many elements you want to enter?: ");
    scanf("%d",&arr.length);
    if(arr.length > arr.size){
        printf("Invalid.\nExiting program...\n");
        exit(1);
    }

    printf("Enter %d elements: ",arr.length);
    for(int i=0; i<arr.length; i++)
        scanf("%d",&arr.A[i]);

    struct Array arr2;
    printf("Enter size of array: ");
    scanf("%d",&arr2.size);
    arr2.A = (int *)malloc(arr2.size*sizeof(int));

    printf("How many elements you want to enter?: ");
    scanf("%d",&arr2.length);
    if(arr2.length > arr2.size){
        printf("Invalid.\nExiting program...\n");
        exit(1);
    }

    printf("Enter %d elements: ",arr2.length);
    for(int i=0; i<arr2.length; i++)
        scanf("%d",&arr2.A[i]);
    
    display(arr);
    display(arr2);

    struct Array *arr3 = concat(arr, arr2);
    display(*arr3);

    return 0;
}

void display(struct Array arr){
    printf("Array content: ");
    for(int i=0; i<arr.length; i++)
        printf("%d ",arr.A[i]);

    printf("\n");
}

void append(struct Array *arr, int x){

    if(arr->length < arr->size){
        arr->A[arr->length] = x;
        arr->length++;
        printf("Appended %d successful \n", x);
    }
    else{
        printf("Append failed - Array is full.\n");
    }   
}

void insert(struct Array *arr, int index, int x){
    if(index<0 || index>=arr->length || arr->length==arr->size){
        printf("Insertion failed\n");
    }
    else{
        for(int i=arr->length; i>index; i--){
            arr->A[i] = arr->A[i-1];
        }
        arr->A[index] = x;
        arr->length++;
        printf("Insertion successful\n");
    }
}

int delete(struct Array *arr, int index){
    if(index<0 || index>=arr->length){
        return -1;
    }
    else{
        int x = arr->A[index];
        for(int i=index; i<arr->length-1; i++){
            arr->A[i] = arr->A[i+1];
        }
        arr->length--;
        return x;
    }
}

int linearSearch(struct Array arr, int x){
    for(int i=0; i<arr.length; i++){
        if(arr.A[i] == x){
            return i;
        }
    }
    return -1;
}

void swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

int improvedLinearSearchTransposition(struct Array *arr, int x){
    for(int i=0; i<arr->length; i++){
        if(arr->A[i] == x){
            if(i==0){
                return 0;
            }
            swap(&arr->A[i], &arr->A[i-1]);
            return i-1;
        }
    }
    return -1;
}

int improvedLinearSearchMoveToHead(struct Array *arr, int x){
    for(int i=0; i<arr->length; i++){
        if(arr->A[i] == x){
            swap(&arr->A[i], &arr->A[0]);
            return 0;
        }
    }
    return -1;
}

int binarySearchI(struct Array arr, int x){    //array should be sorted in ascending order
    int l=0, r=arr.length-1;
    while(l<=r){
        int mid= (l+r)/2;
        if(arr.A[mid]==x)
            return mid;

        else if(arr.A[mid]>x)
            r = mid-1;

        else
            l = mid+1;
    }

    return -1;
}

int binarySearchR(struct Array arr, int x, int l, int r){    //array should be sorted in ascending order

    if(l<=r){
        int mid = (l+r)/2;
        if(arr.A[mid]==x)
            return mid;

        else if(x > arr.A[mid])
            return binarySearchR(arr, x, mid+1, r);

        else
            return binarySearchR(arr, x, l, mid-1);
    }

    return -1;
}

int get(struct Array arr, int index){
    if(index >= 0 && index < arr.length){
        return arr.A[index];
    }
    else{
        printf("Index out of bound\nFailed!\n");
        return -1;
    }
}

void set(struct Array *arr, int x, int index){
    if(index >= 0 && index < arr->length){
        arr->A[index] = x;
    }
    else{
        printf("Index out of bound\nFailed!\n");
    }
}

int max(struct Array arr){
    int max = arr.A[0];
    for(int i=1; i<arr.length; i++){
        if(arr.A[i] > max)
            max = arr.A[i];
    }
    return max;
}

int min(struct Array arr){
    int min = arr.A[0];
    for(int i=1; i<arr.length; i++){
        if(arr.A[i] < min)
            min = arr.A[i];
    }
    return min;
}

int sum(struct Array arr){
    int sum=0;
    for(int i=0; i<arr.length; i++)
        sum += arr.A[i];

    return sum;
}

float average(struct Array arr){
    int sumS = sum(arr);
    float avg = (float)sumS/arr.length;
    return avg;
}

void reverse1(struct Array *arr){
    int b[arr->length];
    for(int i=arr->length-1; i>=0; i--){
        b[arr->length-i-1] = arr->A[i];
    }
    for(int j=0; j<arr->length; j++){
        arr->A[j] = b[j];
    }
}

void reverse2(struct Array *arr){
    for(int i=0, j=arr->length-1; i<j; i++, j--){
        swap(&arr->A[i], &arr->A[j]);
    }
}

void shiftR(struct Array *arr, int n){
    for(int i=arr->length-1; i>=0 ; i--){
        if(i>n-1)
            arr->A[i] = arr->A[i-n];
        else
            arr->A[i] = 0;
    }
}

void shiftL(struct Array *arr, int n){
    for(int i=0; i<arr->length; i++){
        if(i<=arr->length-1-n)
            arr->A[i] = arr->A[i+n];
        else
            arr->A[i] = 0;
    }
}

void rotateL(struct Array *arr, int n){
    for(int i=1; i<=n; i++){
        int var = arr->A[0];
        for(int j=0; j<arr->length; j++){
            if(j != arr->length-1)
                arr->A[j] = arr->A[j+1];
            else
                arr->A[j] = var;
        }
    }
}

void rotateR(struct Array *arr, int n){
    for(int i=1; i<=n; i++){
        int var = arr->A[arr->length-1];
        for(int j=arr->length-1; j>=0 ; j--){
            if(j != 0)
                arr->A[j] = arr->A[j-1];
            else
                arr->A[j] = var;
        }
    }
}

void insertSorted(struct Array *arr, int x){
 // if sorted in ascending order, start from end of array, if element is larger than no. to be inserted, shift right
    for(int i=arr->length-1; i>=0; i--){
        if(arr->A[i] > x){
            if(arr->length < arr->size){
                arr->A[i+1] = arr->A[i];
            }
            else{
                printf("Array capacity insufficient\nInsertion failed!!\n");
                break;
            }
        }
        else{ // element is smaller or equal, just insert the no.
            if(arr->length < arr->size){
                arr->A[i+1] = x;
                arr->length++;
                break;
            }
            else{
                printf("Array capacity insufficient\nInsertion failed!!\n");
                break;
            }
        }
    }
}

int isSorted(struct Array arr){
    // checking if array is sorted in ascending order...... 0=false, 1=true
    for(int i=0; i<arr.length-1; i++){
        if(arr.A[i] > arr.A[i+1])
            return 0;
    }
    return 1;
}

void minusPlus(struct Array *arr){
    int i=0, j=arr->length-1;
    while(i<j){
        while(arr->A[i]<0){i++;}
        while(arr->A[j] >=0){j--;}
        if(i<j)
            swap(&arr->A[i++], &arr->A[j--]);
    }
}

//binary operations
struct Array * mergeSortedArrays(struct Array arr1, struct Array arr2){
    struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));
    arr3->size = 40;
    arr3->length = arr1.length + arr2.length;
    arr3->A = (int *)malloc(arr3->size*sizeof(struct Array));

    int i=0, j=0, k=0;    
    while(i<arr1.length && j<arr2.length){
        if(arr1.A[i] <= arr2.A[j])
            arr3->A[k++] = arr1.A[i++];
        else
            arr3->A[k++] = arr2.A[j++];
    }
    while(i<arr1.length){ arr3->A[k++] = arr1.A[i++];}
    while(j<arr2.length){ arr3->A[k++] = arr2.A[j++];}

    return arr3;    
}

struct Array * concat(struct Array arr1, struct Array arr2){
    struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));
    arr3->size = 40;
    arr3->length = arr1.length + arr2.length;
    arr3->A = (int *)malloc(arr3->size*sizeof(struct Array));

    int k=0;
    for(int i=0; i<arr1.length; i++){
        arr3->A[k++] = arr1.A[i];
    }
    for(int j=0; j<arr2.length; j++){
        arr3->A[k++] = arr2.A[j];
    }

    return arr3;
}


// compare, copy