#include<iostream>

using namespace std;


void swap(int &a, int &b){      // syntax for Reference variable
    int temp;
    temp = a;           // no need of de-referencing
    a = b;
    b = temp;
}


int main(){
    int x=10, y=20;
    cout << "Before swapping -\nx=" << x << " and y=" << y << endl;

    swap(x,y);  // no requirement of passing address of variable or so

    cout << "\nAfter swapping - \nx=" << x << " and y=" << y << endl;

    return 0;
}