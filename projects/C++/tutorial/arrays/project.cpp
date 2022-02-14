#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>
#include <cstdlib> // random
#include <time.h>  // time
#include <array>
using namespace std;

int main()
{
    int number;
    cout << "How many cars do you have? ";
    cin >> number;
    cin.ignore();

    string* pCars = new string[number];
    // pointer

    for (int i = 0; i < number; i++)
    {
        cout << "Enter car # " << i + 1 << " :";
        getline(cin, pCars[i]);
    }

    cout << endl;
    cout << "Where is your garage?" << endl;

    for (int i = 0; i < number; i++)
    {
        cout << "Car number #" << i + 1 << ": " << pCars[i] << endl;
    }
}