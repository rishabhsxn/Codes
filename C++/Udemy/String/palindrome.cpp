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
        
        if(str[i] != str[j]){
            if(str[i]>=65 && str[i]<=90 && str[i]+32 == str[j])     // check if str[i] is a capital letter and str[j] is the same small letter
                continue;
            else if(str[i]>=97 && str[i]<=122 && str[i]-32 == str[j])   // check if str[i] is a small letter and str[j] is the same capital letter
                continue;
            else{
                flag=0;
                break;
            }
        }
    }

    if(flag==0)
        cout << "It is not a Palindrome" << endl;
    else
        cout << "It is a Palindrome" << endl;

    return 0;
}