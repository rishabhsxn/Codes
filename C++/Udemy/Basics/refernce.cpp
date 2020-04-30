#include<iostream>

using namespace std;

int main(){
    int x = 10;
    int &y = x;

    x++;
    cout << y << endl;

    y++;
    cout << x << endl;

    cout << "printing addresses of x and y: " << endl;

    cout << "&x = " << &x << " and &y = " << &y << endl;

    return 0;
}