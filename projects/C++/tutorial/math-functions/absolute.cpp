#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
    double x;

    cout << "This program will return the square root of x" << endl;

    cout << "Enter your number: ";
    cin >> x;

    double y = abs(x);

    cout << "Answer: " << y;

    return 0;
}