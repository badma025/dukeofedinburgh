#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>
#include <cstdlib> // random
#include <time.h>  // time
#include <array>
using namespace std;

class Human
{
public:
    string name;
    int age;
    char gender;
    double weight;

    void eat()
    {
        cout << this->name << " is eating.";
    }
    void drink()
    {
        cout << this->name << " is drinking." << endl;
    }
    void sleep()
    {
        cout << this->name << " is sleeping.";
    }
};

int
main()
{
    //  data type - human
    Human human1;
    Human human2;

    human1.name = "Alim";
    human1.age = 13;
    human1.gender = 'M';
    human1.weight = 56;

    human1.drink();

    cout << human1.name << endl;
    cout << human1.age << endl;
    cout << human1.gender << endl;
    cout << human1.weight << endl;
}