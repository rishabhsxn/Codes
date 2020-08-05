/* Program to show runtime polymorphism - Pointer of Generalized class (Shape - Abstract) can point on both child class ( Rectangle & Circle)
 and demonstration of same statement behaving differently (area) */

#include<iostream>

// abstract class
class Shape{
  public:
    virtual float area() = 0;   // these are pure virtual functions which make this class abstract (required to be overriden)
    virtual float perimeter() = 0;
};

class Rectangle : public Shape{
    private:
        int length;
        int breadth;
    public:
        Rectangle(int length=1, int breadth=1);
        float area();
        float perimeter();
};

class Circle : public Shape{
    private:
        int radius;
    public:
        Circle(int radius=1);
        float area();
        float perimeter();
};


using namespace std;

int main(){
    Shape *ptr;

    ptr = new Rectangle(2, 5);
    cout << "-------------Rectangle-------------" << endl;
    cout << "area: " << ptr->area() << endl;
    cout << "perimeter: " << ptr->perimeter() << endl << endl;

    ptr = new Circle(5);
    cout << "-------------Circle-------------" << endl;
    cout << "area: " << ptr->area() << endl;
    cout << "perimeter: " << ptr->perimeter() << endl << endl;      // these lines are same as above, but they will call diferent functions (polymorphism)

    return 0;
}


Rectangle::Rectangle(int length /*=1*/, int breadth /*=1*/){
    this->length = length;
    this->breadth = breadth;
}

float Rectangle::area(){
    return length*breadth;
}

float Rectangle::perimeter(){
    return 2*(length + breadth);
}


Circle::Circle(int radius /*=1*/){
    this->radius = radius;
}

float Circle::area(){
    return 3.14*radius*radius;
}

float Circle::perimeter(){
    return 2*3.14*radius;
}