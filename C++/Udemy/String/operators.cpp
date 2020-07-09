#include<iostream>

using namespace std;

int main(){
    string str1 = "Rishabh";
    str1.at(0) = 'V';

    str1 = str1 + " Saxena";

    cout << str1 << endl;

    cout << str1.front() << endl;

    cout << str1.back() << endl;

    return 0;
}