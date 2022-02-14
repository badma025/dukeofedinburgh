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

    Human(string name, int age, char gender) {
         this->name = name;
         this->age = age;
         this->gender = gender;
    }
};

int main()
{
    //  data type - human
    Human human1("Alim", 13, 'M');
    Human human2("Adel", 6, 'M');


    cout << human1.name << endl;
    cout << human1.age << endl;
    cout << human1.gender << endl;
    cout << endl;
    cout << human2.name << endl;
    cout << human2.age << endl;
    cout << human2.gender << endl;
    
}