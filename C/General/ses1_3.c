//PROGRAM TO REVERSE THE CONTENTS OF A DOUBLY LINKED LIST, assuming the content are integers

//include the file which have function to create and display doubly linked list
#include"Dll_Functions.h"

void reverseDll(NODE *, NODE *);

//create the doubly linked list and display it
//call the reverseDll passing the pointers by call by value and reverse the contents
//again display the new linked list
void main()
{
   NODE *first=0, *last=0;
   create(&first, &last);
   display(first);
   printf("\n");
   reverseDll(first,last);
   printf("\nAfter reversing the contents\nNow ");
   display(first);
}

//move the pointer first towards right and the pointer last towards left simultaneously
//swap their contents using a temporary variable
//stop the loop when both the pointers reach the same position or the adjacent one
void reverseDll(NODE *firstt, NODE *lastt)
{
  int swap;
  while( firstt != lastt && firstt->prev != lastt)   //****IMP*****
  {
    swap = firstt->data;
    firstt->data = lastt->data;
    lastt->data = swap;

    firstt = firstt->next;
    lastt = lastt->prev;
  }
}
