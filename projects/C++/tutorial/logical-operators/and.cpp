#include <iostream>
using namespace std;

int main()
{
    // && AND logical operator
    // || OR logical operator

    double temp;

    cout << "Enter your temperature (C): ";
    cin >> temp;

    if (temp >= 35 && temp <= 37.5) {
      cout << "Your temperature is normal.";
    } else {
        cout << "Go to a doctor.";
    }

}