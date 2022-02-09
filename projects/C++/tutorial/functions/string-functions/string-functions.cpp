#include <iostream>
#include <string>
using namespace std;

int main()
{
    string first_name;

    cout << "Enter your first name: ";
    getline(cin, first_name);

    int length = first_name.length();
    string email = first_name.append("@gmail.com");

    if (length >= 12)
    {
        cout << "Your name, " << first_name << ", is " << length << " characters long. Usernames cannot be over 12 characters long.";
    }
    else if (first_name.empty())
    {
        cout << "You didn't enter a name!";
    }
    else
    {
        cout << "Welcome, " << first_name << endl;
        cout << "Your name has been cleared" << endl;
        first_name.clear();
        cout << "Welcome, " << first_name;
        cout << "Your email is now " << email;

    }
}