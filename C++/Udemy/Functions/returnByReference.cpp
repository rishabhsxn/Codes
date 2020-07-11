#include<iostream>

using namespace std;

int & fun(int &a){
    return a;       // this is returning a reference
}


int main(){
    int x = 10;

    /* Here function is written on Left hand side because when fun() returns 
    the reference to x, fun(x) becomes a reference itself */
    fun(x) = 25;            

    cout << "x = " << x << endl;

    return 0;
}