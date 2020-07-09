#include<iostream>
#include<cstring>

using namespace std;

int main(){
    // string str = "malayalam";
    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    int flag=1;

    for(int i=0, j=str.length()-1; i<j ; i++, j--){
        if(str[i] != str.at(j)){
            flag=0;
            break;
        }
    }

    if(flag==0)
        cout << "It is not a Palindrome" << endl;
    else
        cout << "It is a Palindrome" << endl;

    return 0;
}