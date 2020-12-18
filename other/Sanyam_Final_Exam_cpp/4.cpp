#include <iostream>

using namespace std;

int main()
{
    // use 2D 3x3 array to store the 3 equation's coefficients(x, y, z)
    int A[3][3];
    // use 1D array to store c1, c2, c3
    float B[3];
    // storing input
    for (int i = 0; i < 3; i++)
    {
        if (i == 0)
            cout << "Enter x1 y1 z1 c1: ";
        else if (i == 1)
            cout << "Enter x2 y2 z2 c2: ";
        else
            cout << "Enter x3 y3 z3 c3: ";

        cin >> A[i][0];
        cin >> A[i][1];
        cin >> A[i][2];
        cin >> B[i];
    }

    // find inverse of A and multiply with B and store result in X
    float I[3][3];

    int i, j;
    float determinant = 0;

    //finding determinant
    for (i = 0; i < 3; i++)
        determinant = determinant + (A[0][i] * (A[1][(i + 1) % 3] * A[2][(i + 2) % 3] - A[1][(i + 2) % 3] * A[2][(i + 1) % 3]));

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
            I[i][j] = ((A[(j + 1) % 3][(i + 1) % 3] * A[(j + 2) % 3][(i + 2) % 3]) - (A[(j + 1) % 3][(i + 2) % 3] * A[(j + 2) % 3][(i + 1) % 3])) / determinant;
    }

    for (i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
            cout << I[i][j] << " ";
        cout << endl;
    }
    float x, y, z;

    for (int i = 0; i < 3; i++)
    {
        float ans;
        ans = I[i][0] * B[0] + I[i][1] * B[1] + I[i][2] * B[2];
        if (i == 0)
            x = ans;
        else if (i == 1)
            y = ans;
        else
            z = ans;
    }

    cout << "X: " << x << "\tY: " << y << "\tZ: " << z << endl;

    return 0;
}