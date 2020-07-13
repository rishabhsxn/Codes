#include<iostream>

using namespace std;

int x = 10;     // Global

void fun(){
    x++;        // global is modified
    cout << "x: " << x << endl;

    int x = 20;     // Local

    {
        cout << "x: " << x << endl;     // nearest local
        int x = 5;
        x++;
        cout << "x: " << x << endl;     // Block-level scope, this x is deleted after }
    }

    x++;        // nearest local

    cout << "x: " << x << endl;

    :: x++;         // modifying Global x using Scope Resolution

    cout << "x: " << ::x << endl;

}

int main(){
    x++;        // Global x is accessible in every function

    fun();

    return 0;
}