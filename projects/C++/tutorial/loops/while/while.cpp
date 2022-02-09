#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
    string name = "";

    while (name.empty()) {
      cout << "Please enter your name: ";
      getline(cin, name);
    }
    cout << "Welcome, " << name;
}