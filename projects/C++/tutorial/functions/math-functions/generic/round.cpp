#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
    double x;

    cout << "This program will round a number to the nearest whole number" << endl;

    cout << "Enter your number: ";
    cin >> x;

    double y = round(x);

    cout << "Answer: " << y;

    return 0;
}