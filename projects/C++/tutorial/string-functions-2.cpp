#include <iostream>
#include <string>
using namespace std;

int main()
{
    string first_name;
    string middle_name;
    string last_name;

    cout << "Enter your first name: ";
    getline(cin, first_name);
    cout << "Enter your middle name: ";
    getline(cin, middle_name);
    cout << "Enter your last name: ";
    getline(cin, last_name);

   char letter1 = first_name.at(0);
   char letter2 = middle_name.at(0);
   char letter3 = last_name.at(0);

   cout << "Your initials are: " << letter1 << letter2 << letter3;

}