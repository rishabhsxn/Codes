#include<iostream>

using namespace std;

int sum(int a, int b){
    return a+b;
}

float sum(float a, float b){
    return a+b;
}

int sum(int a, int b, int c){
    return a+b+c;
}

int sum(int a, float b){
    return a+(int)b;
}

int sum(float a, int b){
    return (int)a+b;
}

int main(){

    cout << sum(10, 20) << endl;
    cout << sum(10, 2.2f) << endl;
    cout << sum(3.1f, 10) << endl;
    cout << sum(3.1f, 2.5f) << endl;
    cout << sum(10, 20, 30) << endl;

    return 0;
}