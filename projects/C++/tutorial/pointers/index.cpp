#include <iostream>
#include <string>
#include <cmath>
#include <cstdlib> // random
#include <time.h>  // time
using namespace std;

int main()
{
    //   pointers
    // & address-of operator
    // * dereference operator

    string name = "Alim";
    int age = 13;
    string food = "pizza";

    string* pName = &name;
    string* pFood = &food;
    int* pAge = &age;

    cout << pName << endl;
    cout << pAge << endl;
}