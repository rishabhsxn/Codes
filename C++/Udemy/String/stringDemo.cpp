#include<iostream>

using namespace std;

int main(){
    char name[20];
    char name2[20];

    // Use only 1 section at a time

    // SECTION 1 - reads only 1 word
    // cout << "Enter full name: ";
    // cin >> name;
    // cout << "output: " << name << endl << endl;

    
    // SECTION 2 - illustrates problem in get()
    cout << "Enter full name: ";
    cin.get(name, 20);
    cout << "output: " << name << endl;

    // cin.ignore();

    cout << "Enter full name again: ";
    cin.get(name2, 20);
    cout << "output: " << name2 << endl << endl;


    // SECTION 3 - reads full sentence and even manage enter press
    // cout << "Enter full name: ";
    // cin.getline(name, 20);
    // cout << "output: " << name << endl;

    // cout << "Enter full name again: ";
    // cin.getline(name2, 20);
    // cout << "output: " << name2 << endl << endl;


    return 0;
}