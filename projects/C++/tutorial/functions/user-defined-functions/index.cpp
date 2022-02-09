#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>
using namespace std;

void welcome(string name, int age)
{
    cout << "Welcome, " << name << ", you are " << age << " years old.";
    cout << endl;
};

void goodbye(string name)
{
    cout << "Goodbye, " << name;
    cout << endl;
};

int main()
{
    string name;
    int age;

    cout << "Enter your name: ";
    getline(cin, name);

    cout << "Enter your age: ";
    cin >> age;

    welcome(name, age);
    goodbye(name);
}
