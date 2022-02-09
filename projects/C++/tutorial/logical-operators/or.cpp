#include <iostream>
#include <string>
using namespace std;

int main()
{
    // && AND logical operator
    // || OR logical operator

    string cough;

    cout << "Do you have a cough? (yes/no): ";
    getline(cin, cough);

    if (cough.at(0) == 'y' || cough.at(0) == 'Y')
    {
        cout << "You are sick!";
    }
    else
    {
        cout << "You are probably fine.";
    }
}