/* Program to demonstrate Writing and Reading file contents of a .txt file using fstream */

#include<iostream>
#include<fstream>

using namespace std;

#define FILE_NAME "student_details.txt"

int main(){
    string name = "Rishabh Saxena";
    int age = 21;


    ofstream out_file;
    out_file.open(FILE_NAME, ios::trunc);        // ios::truc is a mode to override previous content
    // or 
    // ofstream out_file(FILE_NAME, ios::trunc);

    // During writing, there is no need to check if the file is successfully open. If it doesn't exist, it creates the file.

    // use Insertion operator to input anything into the file
    out_file << "Name: " << name << endl;
    out_file << "Age: " << age << endl;

    // close the open file
    out_file.close();


    ifstream in_file(FILE_NAME);

    // Before reading, we have to check if the file is open successfully
    // if(in_file){}
    // or
    if(in_file.is_open()){
        cout << "File open successfully..." << endl << endl;
        
        cout << "file content: " << endl;
        char data[100];
        while(!in_file.eof()){
            in_file >> data;
            cout << data << " ";
            data[0] = '\0';
        }

        cout << "\n---End of File---" << endl;

    }
    else{
        cout << "Error! File not Found." << endl;
    }

    in_file.close();


    return 0;
}