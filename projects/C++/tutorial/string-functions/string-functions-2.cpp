#include <iostream>
#include <string>
using namespace std;

int main()
{
    string first_name;
    string middle_name;
    string last_name;
    string user_name;

    cout << "Enter your first name: ";
    getline(cin, first_name);
    cout << "Enter your middle name: ";
    getline(cin, middle_name);
    cout << "Enter your last name: ";
    getline(cin, last_name);
    cout << "Enter your username: ";
    getline(cin, user_name);

    char letter1 = first_name.at(0);
    char letter2 = middle_name.at(0);
    char letter3 = last_name.at(0);

    string nickname = first_name.substr(0, 3);
    user_name.insert(0, "@");

    cout << "Your initials are: " << letter1 << letter2 << letter3 << endl;
    cout << "Hello, " << nickname << endl;
    cout << "Your username is: " << user_name;
}