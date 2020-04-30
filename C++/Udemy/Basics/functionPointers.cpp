#include<iostream>

using namespace std;

int max(int x, int y){
    return x>y ? x:y;
}

int min(int x, int y){
    return x>y ? y:x;
}

int main(){

    int (*fp)(int, int);    // function pointer declaration

    fp = max;       // initialization
    cout << (*fp)(10, 5) << endl;       // function call through fp

    fp = min;
    cout << (*fp)(10, 5) << endl;

    return 0;
}