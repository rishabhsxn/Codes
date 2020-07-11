#include<iostream>

using namespace std;

template<class T>
T maxim(T a,T b){
    return a > b ? a : b;
}

int main(){

    cout << maxim(10, 20) << endl;
    cout << maxim(2.1f, 3.2f) << endl;
    cout << maxim(2.5, 1.5) << endl;

    return 0;
}