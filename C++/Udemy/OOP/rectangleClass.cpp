#include<iostream>

using namespace std;

class Rectangle{
    public:
        int length;
        int breadth;


        int area(){
            return length*breadth;
        }

        int perimeter(){
            return 2*(length + breadth);
        }
};


int main(){

    // Static declaration, stored in Stack memory
    Rectangle r1;
    r1.length = 10;
    r1.breadth = 20;

    cout << "Area of r1: " << r1.area() << endl;
    cout << "Perimeter of r1: " << r1.perimeter() << endl;


    // Dynamic declaration, stored in Heap memory
    Rectangle *r2 = new Rectangle;      // r2 is a pointer of object Rectangle
    // or use
    Rectangle *r3 = new Rectangle();

    r2->length = 20;
    r2->breadth = 30;

    cout << "Area of r2: " << r2->area() << endl;       // properties and methods are accessed using arrow in case of pointers

    return 0;
}