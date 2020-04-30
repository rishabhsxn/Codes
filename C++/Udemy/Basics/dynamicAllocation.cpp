#include<iostream>

using namespace std;

int main(){
    int *p;
    p = new int[5];     // new keyword is used in C++ to assign heap memory, returns a pointer

    cout << "Enter 5 integers: ";
    for(int i=0; i<5; i++){
        cin >> p[i];
    }
    
    cout << endl << "Dynamic array: ";
    // FIND OUT WHY THIS ERROR
    // for(int x: p){
    //     cout << x << " ";
    // }

    for(int i=0; i<5; i++){
        cout << p[i] << " ";
    }
    cout << endl;

    delete []p;     // deallocating memory to prevent memory leak
    p = nullptr;

    return 0;
}