// write a program to find multiple missing elements from the array,
// given the starting element and the array should be sorted

#include<stdio.h>

int main(){

    int arr[] = {6, 7, 8, 10, 11, 12, 16, 17};
    int length = 8;

    int diff;
    for(int i=0; i<length; i++){
        if(i==0)
            diff = arr[i] - i;
        else{
            int newDiff = arr[i] - i;
            if(newDiff == diff)
                continue;
            
            int ddiff = newDiff - diff;
            diff = newDiff;

            for(int j=1; j<=ddiff; j++)
                printf("Missing: %d\n",arr[i-1]+j);
        }
    }
    return 0;
}

// can be done in O(n) 
// void findMissing(struct Array arr){
    
//     struct Array ret;
//     ret.capacity = arr.ptr[arr.used-1] - arr.ptr[0];
//     ret.used = 0;
//     ret.ptr = (int*)malloc(sizeof(int)*arr.capacity);
//     for(int i = arr.ptr[0],j=0; i<=arr.ptr[arr.used-1]; i++){
//         if (i != arr.ptr[j])
//         {
//             //printf("inside if for %d\n",i);
//             ret.ptr[ret.used] = i;
//             //printf("%d is used\n",ret.used);
//             ret.used++;
//         }
//         else{
//             //printf("inside else for %d\n",i);
//             j++;
//         }
//     }
//     printf("NO. of misssing elements were %d\n",ret.used);
//     printArray(ret.ptr, ret.used);
//     //return ret;
// }