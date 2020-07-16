/* The following program is to understand the basics of Operator Overloading for a class.
   + and << operators are overloaded in the code below.

    FRIEND FUNCTION: when a function includes objects of multiple classes, then we have to declare that
    function as friend in the class. And it needs to be defined outside the class. It is like a Global 
    function.
*/

#include<iostream>

using namespace std;

class ComplexNumber{
    private:
        int real;
        int img;

    public:

        ComplexNumber(int real=1, int img=0);

        ComplexNumber operator+(ComplexNumber &c);
        friend ostream & operator<<(ostream &out, ComplexNumber &c);

};


int main(){
    ComplexNumber c1(3,2);
    ComplexNumber c2(2, 5);
    ComplexNumber c3;

    c3 = c1 + c2;   // expansion:   c3 = c1.operator+(c2);
    
    cout << c3 << endl;   // expansion :    operator<<(cout, c3) << endl;
    
    return 0;
}

// NOTE: Default arguments should only be defined in the declaration of function
// Following is a good way to mention the default arguments so that the code is more understandable
ComplexNumber::ComplexNumber(int real /*=1*/, int img /*=0*/){
    this->real = real;
    this->img = img;
}

// c is passed as reference so that no extra copy of this object is created
ComplexNumber ComplexNumber::operator+(ComplexNumber &c){
    ComplexNumber temp;
    temp.real = real + c.real;
    temp.img = img + c.img;

    return temp;

    /* DOUBT: If temp object is created in the stack memory, it should be deleted when the add() function ends. 
       How we are able to assign it to a variable and the correct value is printed ? */
}

ostream & operator<<(ostream &out, ComplexNumber &c){
    out << c.real << " + " << c.img << "i";
    return out;     // we are returning ostream object so that it can be reused in the same line
}