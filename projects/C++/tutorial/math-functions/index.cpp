#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
    int number_1;
    int number_2;

    cout << "Enter a number: ";
    cin >> number_1;

    cout << "Enter another number: ";
    cin >> number_2;

    int maximum_number = max(number_1, number_2);
    int minimum_number = min(number_1, number_2);

    if (maximum_number == number_1)
    {
        cout << "The first number you entered was bigger" << endl;
    }
    else
    {
        cout << "The second number you entered was bigger" << endl;
    }
    if (minimum_number == number_1)
    {
        cout << "The first number you entered was smaller" << endl;
    }
    else
    {
        cout << "The second number you entered was smaller" << endl;
    }
}