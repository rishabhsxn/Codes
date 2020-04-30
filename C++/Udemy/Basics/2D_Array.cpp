#include<iostream>

using namespace std;

int main(){
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};

    // nested loop to traverse the 2D array elements, this auto& x: a syntax is mandatory
    cout << "The 2D array: " << endl;
    for(auto& x: a){
        for(int y: x){
            cout << y << " ";
        }
        cout << endl;
    }

    return 0;
}