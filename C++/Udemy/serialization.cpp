/* Serialization is writing data and objects into a file so that it can be later read, called de-serialization 
So, this will include operator overloading of >> and << on the object and fstream (ifstream & ofstream) */


#include<iostream>
#include<fstream>

using namespace std;

#define FILE_NAME "student_details.txt"


class Student{
    private:
        string name;
        int age;
        int roll_no;

    public:
        Student(){ };   // to create empty object to use for storing data extracted from file
        Student(string name, int age, int roll_no);
        string getName();
        int getAge();
        int getRollNo();

        friend ofstream & operator<<(ofstream &ofs, Student &s);
        friend ifstream & operator>>(ifstream &ifs, Student &s);        // it is a friend function, so it can also access private members
        friend ostream & operator<<(ostream &cout, Student &s);
};


int main(){
    // creating student objects
    Student s1("Rishabh", 21, 179301163);
    Student s2("Poojan", 20, 179301143);
    Student s3("John", 22, 179301069);


    // writing objects into file
    ofstream out_file(FILE_NAME, ios::app);

    out_file << s1;
    out_file << s2;
    out_file << s3;

    out_file.close();


    // reading objects from file and storing into objects
    Student s[5];
    ifstream in_file(FILE_NAME);

    if(in_file.is_open()){
        int i=0;
        while(!in_file.eof()){
            in_file >> s[i];
            i++;
        }

        cout << "--------Data extracted from file--------" << endl;
        for(int j=0; j<3; j++){
            cout << s[j] << endl;
        }
    }
    else
        cout << "Error! File not found..." << endl;

    return 0;
}



Student::Student(string name, int age, int roll_no){
    this->name = name;
    this->age = age;
    this->roll_no = roll_no;
}

string Student::getName(){
    return name;
}

int Student::getAge(){
    return age;
}

int Student::getRollNo(){
    return roll_no;
}


ofstream & operator<<(ofstream &ofs, Student &s){
    ofs << s.getName() << endl;
    ofs << s.getAge() << endl;
    ofs << s.getRollNo() << endl;

    return ofs;
}

ifstream & operator>>(ifstream &ifs, Student &s){
    // this function can modify/set private members of Student class because it is a friend function
    ifs >> s.name;
    ifs >> s.age;
    ifs >> s.roll_no;

    return ifs;
}

ostream & operator<<(ostream &cout, Student &s){
    cout << "---------Student details---------" << endl;
    cout << "Name: " << s.name << endl;
    cout << "Age: " << s.age << endl;
    cout << "Roll No.: " << s.roll_no << endl;

    return cout;
}