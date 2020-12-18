#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

void swap(int *x, int *y);

int main()
{
    int a, b, c, d;
    a = 4;
    b = 2;
    c = a + b;
    cout << "C: " << c << endl;
    int j = 1;
    int n;
    cout << "Enter n: ";
    cin >> n;

    int k = 1;
    do
    {
        cout << setw(4) << j;
        j = j + 3;
        d = d + pow(k, 2);
        cout << "\tThe Value of d in the" << k << "th iteration is " << d << endl;
        k++;
    } while (k <= n);

    double p;
    p = sqrt(c);
    // cout << p << endl;
    cout << "Square root of " << c << " is " << p << endl;
    int x = 5, y = 10;
    cout << "Main. Before swap, x: " << x << " y: " << y << endl;
    swap(&x, &y);
    cout << "Main. After swap, x: " << x << " y: " << y << endl;
    return 0;
}

void swap(int *px, int *py)
{
    int temp;
    cout << "Swap. Before swap, *px: " << *px << " *py: " << *py << endl;
    temp = *px;
    *px = *py;
    *py = temp;
    cout << "Swap. After swap, *px: " << *px << " *py: " << *py << endl;
}