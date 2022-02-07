#include <iostream>
#include <string>
using namespace std;

int main()
{
    string first_name;
    string substring;

    cout << "Enter your first name: ";
    getline(cin, first_name);
    cout << "Search for which character/s: ";
    getline(cin, substring);

    int position = first_name.find(substring);

    cout << "Found character/s at position " << position;
}