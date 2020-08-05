/* Following program demonstrate user-defined exception objects, handling them, template class (generic) and Destructor by the help of class Stack 
Exceptions handled:     1. Stack Overflow   2, Stack Underflow */

#include<iostream>
#include<exception>

using namespace std;



// defining user-defined exception classes
class StackOverflow: public exception{
    public:
        const char * what() const throw() { return "No space in stack to insert new element!!\n"; }
};

class StackUnderflow: public exception{
    public:
        const char * what() const throw() { return "Stack is empty, can't pop!!\n"; }
};


template <class T>
class Stack{
    private:
        int top;
        int capacity;
        T *stk;

    public:
        Stack(int capacity=10);
        ~Stack();

        bool isEmpty();
        bool isFull();
        void push(T x) /* throw (StackOverflow) */;
        T pop() /* throw (StackUnderflow) */;
        void display();
};



int main(){

    Stack<int> s1(5);

    try{
        // s1.pop();
        s1.push(1);
        s1.push(2);
        s1.push(3);
        s1.push(4);
        s1.push(5);

        int x = s1.pop();
        
        s1.push(6);
        // s1.push(7);
    }
    catch(StackOverflow& er){
        cout << er.what() << endl;
    }
    catch(StackUnderflow& er){
        cout << er.what() << endl;
    }

    s1.display();

    return 0;
}



template <class T>
Stack<T>::Stack(int capacity /*=10*/){
    top = -1;
    this->capacity = capacity;
    stk = new T[capacity];
}

template <class T>
Stack<T>::~Stack(){
    delete [] stk;
}

template <class T>
bool Stack<T>::isEmpty(){
    if(top == -1)
        return true;
    return false;
}

template <class T>
bool Stack<T>::isFull(){
    if(top == capacity-1)
        return true;
    return false;
}

template <class T>
void Stack<T>::push(T x) /* throw (StackOverflow) */{
    if(isFull())
        throw StackOverflow();
    else{
        top++;
        stk[top] = x;
    }
}

template <class T>
T Stack<T>::pop() /* throw (StackUnderflow) */{
    if(isEmpty())
        throw StackUnderflow();
    else{
        top--;
        return stk[top+1];
    }
}

template <class T>
void Stack<T>::display(){
    cout << endl;
    if(isEmpty())
        cout << "Stack is Empty!!" << endl;
    else{
        for(int i=top; i>=0; i--)
            cout << "|   " << stk[i] << "   |" << endl;
        cout << "|_______|" << endl << endl;
    }
}