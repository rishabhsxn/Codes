#include <iostream>

using namespace std;

void printGrid(char **arr, int rows);

int main()
{
    int rows;
    cout << "Enter no. of rows: ";
    cin >> rows;

    // no. of rows and columns will be same in the 2D array i.e. square matrix
    int columns = rows;
    char **arr; // array of pointers
    arr = new char *[rows];
    for (int i = 0; i < rows; i++)
        arr[i] = new char[columns];

    printGrid(arr, rows);

    return 0;
}

void printGrid(char **arr, int rows)
{
    // use the 2D array to store the pattern and then print
    // use the lower half only
    for (int i = 0; i < rows; i++)
    {
        if (i == rows - 1)
        {
            for (int k = 0; k < rows; k++)
                arr[i][k] = '#';
        }
        else
        {
            int counter = 1;
            for (int j = 0; j <= i; j++)
            {
                if (j == 0 || j == i)
                    arr[i][j] = '#';
                else
                {
                    arr[i][j] = '0' + counter; // conversion of int to char
                    counter++;
                }
            }
        }
    }

    // printing the pattern
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j <= i; j++)
            cout << arr[i][j] << " ";
        cout << endl;
    }
}