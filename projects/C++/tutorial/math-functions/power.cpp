#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
    double x;
    double y;

    cout << "This program will return x ^ y" << endl;

    cout << "Enter number 1: ";
    cin >> x;

    cout << "Enter number 2: ";
    cin >> y;

    double z = pow(x, y);
    

    cout << "Answer: " << z;

    return 0;
}