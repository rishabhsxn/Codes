//PROGRAM TO STORE A BINARY TREE IN A DOUBLY LINKED TREE IN ITS IN ORDER (complete)

#include<stdio.h>
#include<malloc.h>
#include"Dll_Functions.h"
//use pre existing functions to create and display doubly linked list

// inside create_bt_tree call create function of Dll_Functions
// take inorder of the tree to be created
void create_bt_tree();

 /*  ***COMPLETE THIS LATER WITH OPTIONS TO DISPLAY TREE IN POST, PRE AND INORDER*** */
// display_bt_tree function calls display_Dll function to display inorder;
//void display_bt_tree(NODE *);


void main()
{
    create_bt_tree();
}

void create_bt_tree()
{
  NODE *first=0, *last=0;
  printf("Enter Node data of tree in in-order\n");
  create_Dll(&first, &last);
  printf("The BT Tree in in-order is\n");
  display_Dll(first);
}
