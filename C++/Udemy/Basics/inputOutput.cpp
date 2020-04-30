#include<iostream>

using namespace std;

int main(){
    int a, b, c;
    string name;

    cout << "Enter your name: ";
    // cin >> name;             This will read only one word, i.e. only first name, so use getline()
    getline(cin, name);

    cout << "Enter two numbers: ";
    cin >> a >> b;

    c = a + b;

    cout << name << ", your addition is " << c << endl;
    // endl adds a new line character

    return 0;
}