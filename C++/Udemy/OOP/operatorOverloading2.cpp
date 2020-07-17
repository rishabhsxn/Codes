/* Operator overloading for Rational number + and << */

#include<iostream>

using namespace std;

class RationalNumber{
    private:
        int num;
        int den;

    public:
        RationalNumber(int num=1, int den=1);
        RationalNumber operator+(RationalNumber &r);
        friend ostream & operator<<(ostream &out, RationalNumber &r);
};

int lcm(int a, int b){
    int i = a > b ? a : b;

    while(true){
        if(i%a==0 && i%b==0)
            return i;
        i++;
    }
}

int main(){
    RationalNumber r1(1, 4);
    RationalNumber r2(3, 2);

    RationalNumber r3 = r1 + r2;
    cout << r3 << endl;

    return 0;
}


RationalNumber::RationalNumber(int num /*=1*/, int den /*=1*/){
    this->num = num;
    this->den = den;
}

RationalNumber RationalNumber::operator+(RationalNumber &r){
    RationalNumber temp;
    // find LCM of denominators and then add
    int LCM = lcm(den, r.den);
    int sum = (LCM/den)*num + (LCM/r.den)*r.num;

    temp.num = sum;
    temp.den = LCM;

    return temp;
}

ostream & operator<<(ostream &out, RationalNumber &r){
    out << r.num << "/" << r.den;
    return out;
}
