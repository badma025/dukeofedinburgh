#include <iostream>
#include <typeinfo>
#include <string>

using namespace std;

int main()
{
    string name;
    int age;
    cout << "Please enter your name: ";
    // the character input is equal to the name
    // cin only accepts a single value (only allowed to input one word). Multiple words will not work.
    // getline() reads an entire line of text
    // it only applies to strings and will not work on other data types like integers
    getline(cin, name);
    cout << "Please enter your age: ";
    cin >> age;

    cout << "Welcome, " << name << endl;
    cout << "You are " << age << " years old" << endl;
}
