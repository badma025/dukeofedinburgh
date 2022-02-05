#include <iostream>
#include <string>
using namespace std;

int main()
{
    char answer;
    cout << "What letter grade did you get? (A-F): ";
    cin >> answer;

    switch (answer){
    case 'A':
        cout << "A for average";
        break;
    case 'B':
        cout << "B for FAILURE!";
        break;
    case 'C':
        cout << "C for CATASTROPHIC FAILURE!";
        break;
    case 'D':
        cout << "D for DON'T COME HOME!";
        break;
    case 'F':
        cout << "F for FAILURE";
        break;
    default:
        cout << "Ener a letter grade (A-F): ";
    }
}
