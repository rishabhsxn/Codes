#include<iostream>
#include<cstring>

using namespace std;

int main(){

    // LENGTH
    char s[20] = "Hello World";

    cout << "String: " << s << endl;
    cout << "Length: " << strlen(s) << endl << endl;

    char *s2;
    cout << "Enter string: ";
    cin.getline(s2, 40);
    cout << "Length: " << strlen(s2) << endl << endl << endl;


    // CONCATENATION
    char a[100] = "Good ";
    char b[] = "Morning";
    strcat(a, b);       // changes in a
    cout << "Concatenated string: " << a << endl;
    strncat(a, b, 3);
    cout << "again concatenation of 3 chars: " << a << endl << endl << endl;


    // COPY
    char x[100];
    char y[] = "Will this be overwritten?";     // yes
    char z[] = "Hello";

    strcpy(x, z);
    strcpy(y, z);
    // similarly there is strncpy()

    cout << "x: " << x << endl;
    cout << "y: " << y << endl;

    return 0;
}