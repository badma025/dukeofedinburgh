#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
    char symbol;
    int width;
    int height;

    cout << "Enter the symbol to use: ";
    cin >> symbol;

    cout << "Enter the width: ";
    cin >> width;

    cout << "Enter the height: ";
    cin >> height;

    for (int i = 0; i < height; i++)
    {
        for (int i = 0; i < width; i++)
        {
            cout << symbol;
        }
        cout << endl;
    }
}