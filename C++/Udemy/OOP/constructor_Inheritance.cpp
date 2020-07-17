/* This program demonstrate the execution sequence of constructors of Parent and Derived class in Inheritance. 
   By default, the non-parameterized constructor of the Parent class is executed independent of what parameters were passed
   when creating the Derived class object.
   This program also demonstrate how to call a parameterized constructor of the Parent class from Derived class.
*/

/* Constructor Execution sequence:
   Derived constructor CALLED -> Parent constructor CALLED -> Parent constructor EXECUTED -> Derived constructor EXECUTED
*/

#include<iostream>

using namespace std;

class Parent{
    private:
        int x;
    public:
        Parent();
        Parent(int x);
        int getX();
};

// Syntax for Inheriting
class Derived : public Parent{
    private:
        int y;
    public:
        Derived();
        Derived(int y);
        Derived(int x, int y);
        void displayAll();
};


int main(){
    Derived d1;
    cout << endl;
    Derived d2(1);
    cout << endl;
    Derived d3(4, 5);
    return 0;
}



// ----------------Parent class--------------------
Parent::Parent(){ 
    cout << "Parent's non-parameterized constructor" << endl; 
}

Parent::Parent(int x){ 
    this->x = x;
    cout << "Parent's parameterized constructor" << endl;
}

int Parent::getX(){ return x; }


// ----------------Derived class--------------------
Derived::Derived(){ 
    cout << "Derived's non-parameterized constructor" << endl; 
}

Derived::Derived(int y){
    this->y = y;
    cout << "Derived's parameterized (one) constructor" << endl; 
}

// Syntax for calling Parent's parameterized constructor
Derived::Derived(int x, int y):Parent(x){
    this->y = y;
    cout << "Derived's parameterized (two) constructor" << endl; 
}

// The Private members of Parent class are not directly accessible, so accessors and mutators are used
void Derived::displayAll(){
    cout << "x:" << getX() << " y:" << y << endl;
}